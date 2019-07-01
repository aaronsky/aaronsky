/**
 * Designed for use in the Gatsby build process
 */

const { readdir, readFile, stat } = require('fs')
const pdf = require('html-pdf')
const { resolve: pathResolve, extname: pathExtname } = require('path')
const { promisify } = require('util')

const readdirAsync = promisify(readdir)
const readFileAsync = promisify(readFile)
const statAsync = promisify(stat)

module.exports = async () => {
    const publicDir = pathResolve(__dirname, '..', 'public')

    const pdfFilePath = await getResumePath(publicDir)
    const resumeHtml = await getResumeHtml(publicDir)

    await writePdfToFile(resumeHtml, pdfFilePath)
}

const getResumePath = async publicDir => {
    const staticDir = pathResolve(publicDir, 'static')

    console.log('Reading', staticDir, 'to find an existing resume.(.*).pdf...')

    const files = await readdirAsync(staticDir)
    const matches = files.filter(
        file => file.includes('resume') && pathExtname(file) == '.pdf'
    )
    const matchesWithStats = await Promise.all(
        matches.map(async file => {
            const filepath = pathResolve(staticDir, file)
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

    const filepath = pathResolve(staticDir, filename)
    console.log('Found', filename, 'at', filepath)

    return filepath
}

const getResumeHtml = async publicDir => {
    const resumeHtml = pathResolve(publicDir, 'resume', 'index.html')
    console.log('Reading', resumeHtml, '...')

    const html = await readFileAsync(resumeHtml, 'utf-8')
    console.log('Successfully loaded', resumeHtml)

    const scrubbedHtml = html.replace(/url\(\//gi, `url(file://${publicDir}/`)

    return scrubbedHtml
}

const writePdfToFile = async (html, filepath) => {
    console.log('Writing new PDF to', filepath)

    const options = {
        border: {
            top: '0.30in',
            left: '0.65in',
            bottom: '0.30in',
            right: '0.65in',
        },
    }

    const result = pdf.create(html, options)

    return new Promise((resolve, reject) => {
        result.toFile(filepath, (err, _info) => {
            if (err) {
                reject(err)
                return
            }
            console.log('Successfully wrote', filepath, 'to disk!')
            resolve()
        })
    })
}
