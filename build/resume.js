/**
 * Designed for use in the Gatsby build process
 */

const { readdir, readFile, stat } = require('fs')
const pdf = require('html-pdf')
const path = require('path')
const { promisify } = require('util')

const readdirAsync = promisify(readdir)
const readFileAsync = promisify(readFile)
const statAsync = promisify(stat)

module.exports = async () => {
    const publicDir = path.resolve(__dirname, '..', 'public')

    const pdfFilePath = await getResumePath(publicDir)
    const resumeHtml = await getResumeHtml(publicDir)

    await writePdfToFile(resumeHtml, pdfFilePath, publicDir)
}

/**
 * @param {string} publicDir - public directory path
 */
const getResumePath = async (publicDir) => {
    const staticDir = path.resolve(publicDir, 'static')

    console.log('Reading', staticDir, 'to find an existing resume.(.*).pdf...')

    const files = await readdirAsync(staticDir)
    const matches = files.filter(
        (file) => file.includes('resume') && path.extname(file) == '.pdf'
    )
    const matchesWithStats = await Promise.all(
        matches.map(async (file) => {
            const filepath = path.resolve(staticDir, file)
            const stats = await statAsync(filepath)
            return {
                file,
                path: filepath,
                ...stats,
            }
        })
    )
    const sortedMatches = matchesWithStats.sort(
        (left, right) => left.mtime.getTime() - right.mtime.getTime()
    )
    const firstMatch = sortedMatches[0]
    const filename = firstMatch.file

    if (!filename) {
        throw new Error("No file path containing 'resume(.*).pdf' was found")
    }

    const filepath = path.resolve(staticDir, filename)
    console.log('Found matching file at', filepath)

    return filepath
}

/**
 * @param {string} publicDir - public directory path
 */
const getResumeHtml = (publicDir) => {
    const resumeHtmlPath = path.resolve(publicDir, 'resume', 'index.html')
    return readFileAsync(resumeHtmlPath, 'utf-8')
}

/**
 * @param {string} html - html content
 * @param {string} filepath - path to write to
 * @param {string} baseDir - path resources live in
 */
const writePdfToFile = async (html, filepath, baseDir) => {
    console.log('Writing new PDF to', filepath)

    const options = {
        base: 'file://' + baseDir + '/',
        border: {
            top: '0.30in',
            left: '0.65in',
            bottom: '0.30in',
            right: '0.65in',
        },
    }

    const result = pdf.create(html, options)

    return new Promise((resolve, reject) => {
        result.toFile(filepath, (err, info) => {
            if (err) {
                reject(err)
                return
            }
            console.log('Successfully wrote', info.filename, 'to disk!')
            resolve()
        })
    })
}