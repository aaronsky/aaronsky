type Maybe<T> = T | null

interface SitePluginConnectionSort {
    fields: (Maybe<SitePluginConnectionSortByFieldsEnum>)[]

    order?: SitePluginConnectionSortOrderValues
}
/** Filter connection on its fields */
interface FilterSitePlugin {
    resolve?: Maybe<SitePluginConnectionResolveQueryString_2>

    id?: Maybe<SitePluginConnectionIdQueryString_2>

    name?: Maybe<SitePluginConnectionNameQueryString_2>

    version?: Maybe<SitePluginConnectionVersionQueryString_2>

    pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>

    nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>

    browserAPIs?: Maybe<SitePluginConnectionBrowserApIsQueryList_2>

    ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>

    pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>

    packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>

    internal?: Maybe<SitePluginConnectionInternalInputObject_2>
}

interface SitePluginConnectionResolveQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionVersionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPluginOptionsInputObject_2 {
    name?: Maybe<SitePluginConnectionPluginOptionsNameQueryString_2>

    path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>

    color?: Maybe<SitePluginConnectionPluginOptionsColorQueryString_2>

    showSpinner?: Maybe<
        SitePluginConnectionPluginOptionsShowSpinnerQueryBoolean_2
    >

    logo?: Maybe<SitePluginConnectionPluginOptionsLogoQueryString_2>

    injectHTML?: Maybe<
        SitePluginConnectionPluginOptionsInjectHtmlQueryBoolean_2
    >

    icons?: Maybe<SitePluginConnectionPluginOptionsIconsInputObject_2>

    pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>
}

interface SitePluginConnectionPluginOptionsNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPluginOptionsPathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPluginOptionsColorQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPluginOptionsShowSpinnerQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginConnectionPluginOptionsLogoQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPluginOptionsInjectHtmlQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginConnectionPluginOptionsIconsInputObject_2 {
    android?: Maybe<SitePluginConnectionPluginOptionsIconsAndroidInputObject_2>

    appleIcon?: Maybe<
        SitePluginConnectionPluginOptionsIconsAppleIconInputObject_2
    >

    appleStartup?: Maybe<
        SitePluginConnectionPluginOptionsIconsAppleStartupInputObject_2
    >

    coast?: Maybe<SitePluginConnectionPluginOptionsIconsCoastQueryBoolean_2>

    favicons?: Maybe<
        SitePluginConnectionPluginOptionsIconsFaviconsQueryBoolean_2
    >

    firefox?: Maybe<SitePluginConnectionPluginOptionsIconsFirefoxQueryBoolean_2>

    twitter?: Maybe<SitePluginConnectionPluginOptionsIconsTwitterQueryBoolean_2>

    yandex?: Maybe<SitePluginConnectionPluginOptionsIconsYandexQueryBoolean_2>

    windows?: Maybe<SitePluginConnectionPluginOptionsIconsWindowsQueryBoolean_2>
}

interface SitePluginConnectionPluginOptionsIconsAndroidInputObject_2 {
    background?: Maybe<
        SitePluginConnectionPluginOptionsIconsAndroidBackgroundQueryString_2
    >
}

interface SitePluginConnectionPluginOptionsIconsAndroidBackgroundQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPluginOptionsIconsAppleIconInputObject_2 {
    background?: Maybe<
        SitePluginConnectionPluginOptionsIconsAppleIconBackgroundQueryString_2
    >
}

interface SitePluginConnectionPluginOptionsIconsAppleIconBackgroundQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPluginOptionsIconsAppleStartupInputObject_2 {
    background?: Maybe<
        SitePluginConnectionPluginOptionsIconsAppleStartupBackgroundQueryString_2
    >
}

interface SitePluginConnectionPluginOptionsIconsAppleStartupBackgroundQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPluginOptionsIconsCoastQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginConnectionPluginOptionsIconsFaviconsQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginConnectionPluginOptionsIconsFirefoxQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginConnectionPluginOptionsIconsTwitterQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginConnectionPluginOptionsIconsYandexQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginConnectionPluginOptionsIconsWindowsQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginConnectionNodeApIsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionBrowserApIsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionSsrApIsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPluginFilepathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPackageJsonInputObject_2 {
    name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>

    description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>

    version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>

    main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>

    license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>

    dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>

    devDependencies?: Maybe<
        SitePluginConnectionPackageJsonDevDependenciesQueryList_2
    >

    peerDependencies?: Maybe<
        SitePluginConnectionPackageJsonPeerDependenciesQueryList_2
    >

    keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>
}

interface SitePluginConnectionPackageJsonNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPackageJsonVersionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPackageJsonMainQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
    elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>
}

interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
    name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>

    version?: Maybe<
        SitePluginConnectionPackageJsonDependenciesVersionQueryString_2
    >
}

interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
    elemMatch?: Maybe<
        SitePluginConnectionPackageJsonDevDependenciesInputObject_2
    >
}

interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
    name?: Maybe<
        SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2
    >

    version?: Maybe<
        SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2
    >
}

interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
    elemMatch?: Maybe<
        SitePluginConnectionPackageJsonPeerDependenciesInputObject_2
    >
}

interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
    name?: Maybe<
        SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2
    >

    version?: Maybe<
        SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2
    >
}

interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionInternalInputObject_2 {
    contentDigest?: Maybe<
        SitePluginConnectionInternalContentDigestQueryString_2
    >

    type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>

    owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>
}

interface SitePluginConnectionInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginConnectionInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionSort {
    fields: (Maybe<DirectoryConnectionSortByFieldsEnum>)[]

    order?: DirectoryConnectionSortOrderValues
}
/** Filter connection on its fields */
interface FilterDirectory {
    id?: Maybe<DirectoryConnectionIdQueryString_2>

    internal?: Maybe<DirectoryConnectionInternalInputObject_2>

    sourceInstanceName?: Maybe<
        DirectoryConnectionSourceInstanceNameQueryString_2
    >

    absolutePath?: Maybe<DirectoryConnectionAbsolutePathQueryString_2>

    relativePath?: Maybe<DirectoryConnectionRelativePathQueryString_2>

    extension?: Maybe<DirectoryConnectionExtensionQueryString_2>

    size?: Maybe<DirectoryConnectionSizeQueryInteger_2>

    prettySize?: Maybe<DirectoryConnectionPrettySizeQueryString_2>

    modifiedTime?: Maybe<DirectoryConnectionModifiedTimeQueryString_2>

    accessTime?: Maybe<DirectoryConnectionAccessTimeQueryString_2>

    changeTime?: Maybe<DirectoryConnectionChangeTimeQueryString_2>

    birthTime?: Maybe<DirectoryConnectionBirthTimeQueryString_2>

    root?: Maybe<DirectoryConnectionRootQueryString_2>

    dir?: Maybe<DirectoryConnectionDirQueryString_2>

    base?: Maybe<DirectoryConnectionBaseQueryString_2>

    ext?: Maybe<DirectoryConnectionExtQueryString_2>

    name?: Maybe<DirectoryConnectionNameQueryString_2>

    relativeDirectory?: Maybe<DirectoryConnectionRelativeDirectoryQueryString_2>

    dev?: Maybe<DirectoryConnectionDevQueryInteger_2>

    mode?: Maybe<DirectoryConnectionModeQueryInteger_2>

    nlink?: Maybe<DirectoryConnectionNlinkQueryInteger_2>

    uid?: Maybe<DirectoryConnectionUidQueryInteger_2>

    gid?: Maybe<DirectoryConnectionGidQueryInteger_2>

    rdev?: Maybe<DirectoryConnectionRdevQueryInteger_2>

    blksize?: Maybe<DirectoryConnectionBlksizeQueryInteger_2>

    ino?: Maybe<DirectoryConnectionInoQueryInteger_2>

    blocks?: Maybe<DirectoryConnectionBlocksQueryInteger_2>

    atimeMs?: Maybe<DirectoryConnectionAtimeMsQueryFloat_2>

    mtimeMs?: Maybe<DirectoryConnectionMtimeMsQueryFloat_2>

    ctimeMs?: Maybe<DirectoryConnectionCtimeMsQueryFloat_2>

    birthtimeMs?: Maybe<DirectoryConnectionBirthtimeMsQueryFloat_2>

    atime?: Maybe<DirectoryConnectionAtimeQueryString_2>

    mtime?: Maybe<DirectoryConnectionMtimeQueryString_2>

    ctime?: Maybe<DirectoryConnectionCtimeQueryString_2>

    birthtime?: Maybe<DirectoryConnectionBirthtimeQueryString_2>
}

interface DirectoryConnectionIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionInternalInputObject_2 {
    contentDigest?: Maybe<DirectoryConnectionInternalContentDigestQueryString_2>

    type?: Maybe<DirectoryConnectionInternalTypeQueryString_2>

    description?: Maybe<DirectoryConnectionInternalDescriptionQueryString_2>

    owner?: Maybe<DirectoryConnectionInternalOwnerQueryString_2>
}

interface DirectoryConnectionInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionInternalDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionSourceInstanceNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionAbsolutePathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionRelativePathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionExtensionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionSizeQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionPrettySizeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionModifiedTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionAccessTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionChangeTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionBirthTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionRootQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionDirQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionBaseQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionExtQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionRelativeDirectoryQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionDevQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionModeQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionNlinkQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionUidQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionGidQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionRdevQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionBlksizeQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionInoQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionBlocksQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionAtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionMtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionCtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryConnectionAtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionMtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionCtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryConnectionBirthtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionSort {
    fields: (Maybe<FileConnectionSortByFieldsEnum>)[]

    order?: FileConnectionSortOrderValues
}
/** Filter connection on its fields */
interface FilterFile {
    id?: Maybe<FileConnectionIdQueryString_2>

    internal?: Maybe<FileConnectionInternalInputObject_2>

    sourceInstanceName?: Maybe<FileConnectionSourceInstanceNameQueryString_2>

    absolutePath?: Maybe<FileConnectionAbsolutePathQueryString_2>

    relativePath?: Maybe<FileConnectionRelativePathQueryString_2>

    extension?: Maybe<FileConnectionExtensionQueryString_2>

    size?: Maybe<FileConnectionSizeQueryInteger_2>

    prettySize?: Maybe<FileConnectionPrettySizeQueryString_2>

    modifiedTime?: Maybe<FileConnectionModifiedTimeQueryString_2>

    accessTime?: Maybe<FileConnectionAccessTimeQueryString_2>

    changeTime?: Maybe<FileConnectionChangeTimeQueryString_2>

    birthTime?: Maybe<FileConnectionBirthTimeQueryString_2>

    root?: Maybe<FileConnectionRootQueryString_2>

    dir?: Maybe<FileConnectionDirQueryString_2>

    base?: Maybe<FileConnectionBaseQueryString_2>

    ext?: Maybe<FileConnectionExtQueryString_2>

    name?: Maybe<FileConnectionNameQueryString_2>

    relativeDirectory?: Maybe<FileConnectionRelativeDirectoryQueryString_2>

    dev?: Maybe<FileConnectionDevQueryInteger_2>

    mode?: Maybe<FileConnectionModeQueryInteger_2>

    nlink?: Maybe<FileConnectionNlinkQueryInteger_2>

    uid?: Maybe<FileConnectionUidQueryInteger_2>

    gid?: Maybe<FileConnectionGidQueryInteger_2>

    rdev?: Maybe<FileConnectionRdevQueryInteger_2>

    blksize?: Maybe<FileConnectionBlksizeQueryInteger_2>

    ino?: Maybe<FileConnectionInoQueryInteger_2>

    blocks?: Maybe<FileConnectionBlocksQueryInteger_2>

    atimeMs?: Maybe<FileConnectionAtimeMsQueryFloat_2>

    mtimeMs?: Maybe<FileConnectionMtimeMsQueryFloat_2>

    ctimeMs?: Maybe<FileConnectionCtimeMsQueryFloat_2>

    birthtimeMs?: Maybe<FileConnectionBirthtimeMsQueryFloat_2>

    atime?: Maybe<FileConnectionAtimeQueryString_2>

    mtime?: Maybe<FileConnectionMtimeQueryString_2>

    ctime?: Maybe<FileConnectionCtimeQueryString_2>

    birthtime?: Maybe<FileConnectionBirthtimeQueryString_2>

    publicURL?: Maybe<PublicUrlQueryString_4>
}

interface FileConnectionIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionInternalInputObject_2 {
    contentDigest?: Maybe<FileConnectionInternalContentDigestQueryString_2>

    type?: Maybe<FileConnectionInternalTypeQueryString_2>

    mediaType?: Maybe<FileConnectionInternalMediaTypeQueryString_2>

    description?: Maybe<FileConnectionInternalDescriptionQueryString_2>

    owner?: Maybe<FileConnectionInternalOwnerQueryString_2>
}

interface FileConnectionInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionInternalMediaTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionInternalDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionSourceInstanceNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionAbsolutePathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionRelativePathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionExtensionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionSizeQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionPrettySizeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionModifiedTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionAccessTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionChangeTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionBirthTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionRootQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionDirQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionBaseQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionExtQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionRelativeDirectoryQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionDevQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionModeQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionNlinkQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionUidQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionGidQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionRdevQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionBlksizeQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionInoQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionBlocksQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionAtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionMtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionCtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionBirthtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileConnectionAtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionMtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionCtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileConnectionBirthtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PublicUrlQueryString_4 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonConnectionSort {
    fields: (Maybe<PortfolioJsonConnectionSortByFieldsEnum>)[]

    order?: PortfolioJsonConnectionSortOrderValues
}
/** Filter connection on its fields */
interface FilterPortfolioJson {
    image?: Maybe<PortfolioJsonConnectionImageQueryString_2>

    school?: Maybe<PortfolioJsonConnectionSchoolQueryString_2>

    location?: Maybe<PortfolioJsonConnectionLocationQueryString_2>

    degree?: Maybe<PortfolioJsonConnectionDegreeQueryString_2>

    date?: Maybe<PortfolioJsonConnectionDateQueryString_2>

    id?: Maybe<PortfolioJsonConnectionIdQueryString_2>

    internal?: Maybe<PortfolioJsonConnectionInternalInputObject_2>
}

interface PortfolioJsonConnectionImageQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonConnectionSchoolQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonConnectionLocationQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonConnectionDegreeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonConnectionDateQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonConnectionIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonConnectionInternalInputObject_2 {
    contentDigest?: Maybe<
        PortfolioJsonConnectionInternalContentDigestQueryString_2
    >

    type?: Maybe<PortfolioJsonConnectionInternalTypeQueryString_2>

    owner?: Maybe<PortfolioJsonConnectionInternalOwnerQueryString_2>
}

interface PortfolioJsonConnectionInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonConnectionInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonConnectionInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SkillsJsonConnectionSort {
    fields: (Maybe<SkillsJsonConnectionSortByFieldsEnum>)[]

    order?: SkillsJsonConnectionSortOrderValues
}
/** Filter connection on its fields */
interface FilterSkillsJson {
    time?: Maybe<SkillsJsonConnectionTimeQueryString_2>

    tool?: Maybe<SkillsJsonConnectionToolQueryString_2>

    id?: Maybe<SkillsJsonConnectionIdQueryString_2>

    internal?: Maybe<SkillsJsonConnectionInternalInputObject_2>
}

interface SkillsJsonConnectionTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SkillsJsonConnectionToolQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SkillsJsonConnectionIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SkillsJsonConnectionInternalInputObject_2 {
    contentDigest?: Maybe<
        SkillsJsonConnectionInternalContentDigestQueryString_2
    >

    type?: Maybe<SkillsJsonConnectionInternalTypeQueryString_2>

    owner?: Maybe<SkillsJsonConnectionInternalOwnerQueryString_2>
}

interface SkillsJsonConnectionInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SkillsJsonConnectionInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SkillsJsonConnectionInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionSort {
    fields: (Maybe<ProjectsJsonConnectionSortByFieldsEnum>)[]

    order?: ProjectsJsonConnectionSortOrderValues
}
/** Filter connection on its fields */
interface FilterProjectsJson {
    title?: Maybe<ProjectsJsonConnectionTitleQueryString_2>

    image?: Maybe<ProjectsJsonConnectionImageQueryString_2>

    link?: Maybe<ProjectsJsonConnectionLinkQueryString_2>

    type?: Maybe<ProjectsJsonConnectionTypeQueryString_2>

    start?: Maybe<ProjectsJsonConnectionStartQueryString_2>

    end?: Maybe<ProjectsJsonConnectionEndQueryString_2>

    languages?: Maybe<ProjectsJsonConnectionLanguagesQueryList_2>

    platforms?: Maybe<ProjectsJsonConnectionPlatformsQueryList_2>

    roles?: Maybe<ProjectsJsonConnectionRolesQueryList_2>

    ignore?: Maybe<ProjectsJsonConnectionIgnoreQueryBoolean_2>

    id?: Maybe<ProjectsJsonConnectionIdQueryString_2>

    internal?: Maybe<ProjectsJsonConnectionInternalInputObject_2>

    longDescription?: Maybe<ProjectsJsonConnectionLongDescriptionQueryString_2>

    resume?: Maybe<ProjectsJsonConnectionResumeQueryBoolean_2>
}

interface ProjectsJsonConnectionTitleQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionImageQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionLinkQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionStartQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionEndQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionLanguagesQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionPlatformsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionRolesQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionIgnoreQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface ProjectsJsonConnectionIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionInternalInputObject_2 {
    contentDigest?: Maybe<
        ProjectsJsonConnectionInternalContentDigestQueryString_2
    >

    type?: Maybe<ProjectsJsonConnectionInternalTypeQueryString_2>

    owner?: Maybe<ProjectsJsonConnectionInternalOwnerQueryString_2>
}

interface ProjectsJsonConnectionInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionLongDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonConnectionResumeQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface CertificationJsonConnectionSort {
    fields: (Maybe<CertificationJsonConnectionSortByFieldsEnum>)[]

    order?: CertificationJsonConnectionSortOrderValues
}
/** Filter connection on its fields */
interface FilterCertificationJson {
    title?: Maybe<CertificationJsonConnectionTitleQueryString_2>

    image?: Maybe<CertificationJsonConnectionImageQueryString_2>

    link?: Maybe<CertificationJsonConnectionLinkQueryString_2>

    start?: Maybe<CertificationJsonConnectionStartQueryString_2>

    end?: Maybe<CertificationJsonConnectionEndQueryString_2>

    ignore?: Maybe<CertificationJsonConnectionIgnoreQueryBoolean_2>

    id?: Maybe<CertificationJsonConnectionIdQueryString_2>

    internal?: Maybe<CertificationJsonConnectionInternalInputObject_2>
}

interface CertificationJsonConnectionTitleQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonConnectionImageQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonConnectionLinkQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonConnectionStartQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonConnectionEndQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonConnectionIgnoreQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface CertificationJsonConnectionIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonConnectionInternalInputObject_2 {
    contentDigest?: Maybe<
        CertificationJsonConnectionInternalContentDigestQueryString_2
    >

    type?: Maybe<CertificationJsonConnectionInternalTypeQueryString_2>

    owner?: Maybe<CertificationJsonConnectionInternalOwnerQueryString_2>
}

interface CertificationJsonConnectionInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonConnectionInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonConnectionInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionSort {
    fields: (Maybe<WorkJsonConnectionSortByFieldsEnum>)[]

    order?: WorkJsonConnectionSortOrderValues
}
/** Filter connection on its fields */
interface FilterWorkJson {
    employer?: Maybe<WorkJsonConnectionEmployerQueryString_2>

    title?: Maybe<WorkJsonConnectionTitleQueryString_2>

    image?: Maybe<WorkJsonConnectionImageQueryString_2>

    link?: Maybe<WorkJsonConnectionLinkQueryString_2>

    description?: Maybe<WorkJsonConnectionDescriptionQueryString_2>

    longDescription?: Maybe<WorkJsonConnectionLongDescriptionQueryString_2>

    start?: Maybe<WorkJsonConnectionStartQueryString_2>

    end?: Maybe<WorkJsonConnectionEndQueryString_2>

    languages?: Maybe<WorkJsonConnectionLanguagesQueryList_2>

    platforms?: Maybe<WorkJsonConnectionPlatformsQueryList_2>

    ignore?: Maybe<WorkJsonConnectionIgnoreQueryBoolean_2>

    id?: Maybe<WorkJsonConnectionIdQueryString_2>

    internal?: Maybe<WorkJsonConnectionInternalInputObject_2>

    location?: Maybe<WorkJsonConnectionLocationQueryString_2>

    resume?: Maybe<WorkJsonConnectionResumeQueryBoolean_2>
}

interface WorkJsonConnectionEmployerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionTitleQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionImageQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionLinkQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionLongDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionStartQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionEndQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionLanguagesQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionPlatformsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionIgnoreQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface WorkJsonConnectionIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionInternalInputObject_2 {
    contentDigest?: Maybe<WorkJsonConnectionInternalContentDigestQueryString_2>

    type?: Maybe<WorkJsonConnectionInternalTypeQueryString_2>

    owner?: Maybe<WorkJsonConnectionInternalOwnerQueryString_2>
}

interface WorkJsonConnectionInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionLocationQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonConnectionResumeQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface MarkdownRemarkConnectionSort {
    fields: (Maybe<MarkdownRemarkConnectionSortByFieldsEnum>)[]

    order?: MarkdownRemarkConnectionSortOrderValues
}
/** Filter connection on its fields */
interface FilterMarkdownRemark {
    id?: Maybe<MarkdownRemarkConnectionIdQueryString_2>

    internal?: Maybe<MarkdownRemarkConnectionInternalInputObject_2>

    frontmatter?: Maybe<MarkdownRemarkConnectionFrontmatterInputObject_2>

    rawMarkdownBody?: Maybe<
        MarkdownRemarkConnectionRawMarkdownBodyQueryString_2
    >

    fileAbsolutePath?: Maybe<
        MarkdownRemarkConnectionFileAbsolutePathQueryString_2
    >

    fields?: Maybe<MarkdownRemarkConnectionFieldsInputObject_2>

    html?: Maybe<HtmlQueryString_4>

    excerpt?: Maybe<ExcerptQueryString_4>

    headings?: Maybe<HeadingsQueryList_4>

    timeToRead?: Maybe<TimeToReadQueryInt_4>

    tableOfContents?: Maybe<TableOfContentsQueryString_4>

    wordCount?: Maybe<WordCountTypeName_4>
}

interface MarkdownRemarkConnectionIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkConnectionInternalInputObject_2 {
    content?: Maybe<MarkdownRemarkConnectionInternalContentQueryString_2>

    type?: Maybe<MarkdownRemarkConnectionInternalTypeQueryString_2>

    contentDigest?: Maybe<
        MarkdownRemarkConnectionInternalContentDigestQueryString_2
    >

    owner?: Maybe<MarkdownRemarkConnectionInternalOwnerQueryString_2>

    fieldOwners?: Maybe<
        MarkdownRemarkConnectionInternalFieldOwnersInputObject_2
    >
}

interface MarkdownRemarkConnectionInternalContentQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkConnectionInternalFieldOwnersInputObject_2 {
    slug?: Maybe<MarkdownRemarkConnectionInternalFieldOwnersSlugQueryString_2>
}

interface MarkdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
    title?: Maybe<MarkdownRemarkConnectionFrontmatterTitleQueryString_2>

    date?: Maybe<MarkdownRemarkConnectionFrontmatterDateQueryString_2>

    _PARENT?: Maybe<MarkdownRemarkConnectionFrontmatterParentQueryString_2>
}

interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkConnectionFrontmatterDateQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkConnectionFrontmatterParentQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkConnectionFileAbsolutePathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkConnectionFieldsInputObject_2 {
    slug?: Maybe<MarkdownRemarkConnectionFieldsSlugQueryString_2>
}

interface MarkdownRemarkConnectionFieldsSlugQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface HtmlQueryString_4 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ExcerptQueryString_4 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface HeadingsQueryList_4 {
    elemMatch?: Maybe<HeadingsListElemTypeName_4>
}

interface HeadingsListElemTypeName_4 {
    value?: Maybe<HeadingsListElemValueQueryString_4>

    depth?: Maybe<HeadingsListElemDepthQueryInt_4>
}

interface HeadingsListElemValueQueryString_4 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface HeadingsListElemDepthQueryInt_4 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface TimeToReadQueryInt_4 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface TableOfContentsQueryString_4 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WordCountTypeName_4 {
    paragraphs?: Maybe<WordCountParagraphsQueryInt_4>

    sentences?: Maybe<WordCountSentencesQueryInt_4>

    words?: Maybe<WordCountWordsQueryInt_4>
}

interface WordCountParagraphsQueryInt_4 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface WordCountSentencesQueryInt_4 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface WordCountWordsQueryInt_4 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface SitePageConnectionSort {
    fields: (Maybe<SitePageConnectionSortByFieldsEnum>)[]

    order?: SitePageConnectionSortOrderValues
}
/** Filter connection on its fields */
interface FilterSitePage {
    jsonName?: Maybe<SitePageConnectionJsonNameQueryString>

    internalComponentName?: Maybe<
        SitePageConnectionInternalComponentNameQueryString
    >

    path?: Maybe<SitePageConnectionPathQueryString_2>

    component?: Maybe<SitePageConnectionComponentQueryString>

    componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>

    context?: Maybe<SitePageConnectionContextInputObject>

    pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>

    pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>

    componentPath?: Maybe<SitePageConnectionComponentPathQueryString>

    id?: Maybe<SitePageConnectionIdQueryString_2>

    internal?: Maybe<SitePageConnectionInternalInputObject_2>
}

interface SitePageConnectionJsonNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionInternalComponentNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionComponentQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionComponentChunkNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionContextInputObject {
    slug?: Maybe<SitePageConnectionContextSlugQueryString>
}

interface SitePageConnectionContextSlugQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorInputObject {
    resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>

    id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>

    name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>

    version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>

    pluginOptions?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsInputObject
    >

    nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>

    browserAPIs?: Maybe<SitePageConnectionPluginCreatorBrowserApIsQueryList>

    ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>

    pluginFilepath?: Maybe<
        SitePageConnectionPluginCreatorPluginFilepathQueryString
    >

    packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>

    parent?: Maybe<SitePageConnectionPluginCreatorParentQueryString>

    internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>
}

interface SitePageConnectionPluginCreatorResolveQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorIdQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorVersionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
    name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsNameQueryString>

    path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>

    color?: Maybe<SitePageConnectionPluginCreatorPluginOptionsColorQueryString>

    showSpinner?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsShowSpinnerQueryBoolean
    >

    logo?: Maybe<SitePageConnectionPluginCreatorPluginOptionsLogoQueryString>

    injectHTML?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsInjectHtmlQueryBoolean
    >

    icons?: Maybe<SitePageConnectionPluginCreatorPluginOptionsIconsInputObject>

    pathCheck?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean
    >
}

interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsColorQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsShowSpinnerQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsLogoQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsInjectHtmlQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsInputObject {
    android?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsIconsAndroidInputObject
    >

    appleIcon?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsIconsAppleIconInputObject
    >

    appleStartup?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsIconsAppleStartupInputObject
    >

    coast?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsIconsCoastQueryBoolean
    >

    favicons?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsIconsFaviconsQueryBoolean
    >

    firefox?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsIconsFirefoxQueryBoolean
    >

    twitter?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsIconsTwitterQueryBoolean
    >

    yandex?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsIconsYandexQueryBoolean
    >

    windows?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsIconsWindowsQueryBoolean
    >
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsAndroidInputObject {
    background?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsIconsAndroidBackgroundQueryString
    >
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsAndroidBackgroundQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsAppleIconInputObject {
    background?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsIconsAppleIconBackgroundQueryString
    >
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsAppleIconBackgroundQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsAppleStartupInputObject {
    background?: Maybe<
        SitePageConnectionPluginCreatorPluginOptionsIconsAppleStartupBackgroundQueryString
    >
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsAppleStartupBackgroundQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsCoastQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsFaviconsQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsFirefoxQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsTwitterQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsYandexQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsIconsWindowsQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePageConnectionPluginCreatorNodeApIsQueryList {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorSsrApIsQueryList {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPackageJsonInputObject {
    name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>

    description?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString
    >

    version?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonVersionQueryString
    >

    main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>

    license?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonLicenseQueryString
    >

    dependencies?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList
    >

    devDependencies?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList
    >

    peerDependencies?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList
    >

    keywords?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList
    >
}

interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
    elemMatch?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject
    >
}

interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
    name?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString
    >

    version?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString
    >
}

interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
    elemMatch?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject
    >
}

interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
    name?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString
    >

    version?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString
    >
}

interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
    elemMatch?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject
    >
}

interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
    name?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString
    >

    version?: Maybe<
        SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString
    >
}

interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorParentQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorInternalInputObject {
    contentDigest?: Maybe<
        SitePageConnectionPluginCreatorInternalContentDigestQueryString
    >

    type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>

    owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>
}

interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorInternalTypeQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionPluginCreatorIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionComponentPathQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionInternalInputObject_2 {
    type?: Maybe<SitePageConnectionInternalTypeQueryString_2>

    contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>

    description?: Maybe<SitePageConnectionInternalDescriptionQueryString>

    owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>
}

interface SitePageConnectionInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionInternalDescriptionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageConnectionInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginResolveQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginVersionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPluginOptionsInputObject_2 {
    name?: Maybe<SitePluginPluginOptionsNameQueryString_2>

    path?: Maybe<SitePluginPluginOptionsPathQueryString_2>

    color?: Maybe<SitePluginPluginOptionsColorQueryString_2>

    showSpinner?: Maybe<SitePluginPluginOptionsShowSpinnerQueryBoolean_2>

    logo?: Maybe<SitePluginPluginOptionsLogoQueryString_2>

    injectHTML?: Maybe<SitePluginPluginOptionsInjectHtmlQueryBoolean_2>

    icons?: Maybe<SitePluginPluginOptionsIconsInputObject_2>

    pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>
}

interface SitePluginPluginOptionsNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPluginOptionsPathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPluginOptionsColorQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPluginOptionsShowSpinnerQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginPluginOptionsLogoQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPluginOptionsInjectHtmlQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginPluginOptionsIconsInputObject_2 {
    android?: Maybe<SitePluginPluginOptionsIconsAndroidInputObject_2>

    appleIcon?: Maybe<SitePluginPluginOptionsIconsAppleIconInputObject_2>

    appleStartup?: Maybe<SitePluginPluginOptionsIconsAppleStartupInputObject_2>

    coast?: Maybe<SitePluginPluginOptionsIconsCoastQueryBoolean_2>

    favicons?: Maybe<SitePluginPluginOptionsIconsFaviconsQueryBoolean_2>

    firefox?: Maybe<SitePluginPluginOptionsIconsFirefoxQueryBoolean_2>

    twitter?: Maybe<SitePluginPluginOptionsIconsTwitterQueryBoolean_2>

    yandex?: Maybe<SitePluginPluginOptionsIconsYandexQueryBoolean_2>

    windows?: Maybe<SitePluginPluginOptionsIconsWindowsQueryBoolean_2>
}

interface SitePluginPluginOptionsIconsAndroidInputObject_2 {
    background?: Maybe<
        SitePluginPluginOptionsIconsAndroidBackgroundQueryString_2
    >
}

interface SitePluginPluginOptionsIconsAndroidBackgroundQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPluginOptionsIconsAppleIconInputObject_2 {
    background?: Maybe<
        SitePluginPluginOptionsIconsAppleIconBackgroundQueryString_2
    >
}

interface SitePluginPluginOptionsIconsAppleIconBackgroundQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPluginOptionsIconsAppleStartupInputObject_2 {
    background?: Maybe<
        SitePluginPluginOptionsIconsAppleStartupBackgroundQueryString_2
    >
}

interface SitePluginPluginOptionsIconsAppleStartupBackgroundQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPluginOptionsIconsCoastQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginPluginOptionsIconsFaviconsQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginPluginOptionsIconsFirefoxQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginPluginOptionsIconsTwitterQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginPluginOptionsIconsYandexQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginPluginOptionsIconsWindowsQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePluginNodeApIsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginBrowserApIsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginSsrApIsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPluginFilepathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPackageJsonInputObject_2 {
    name?: Maybe<SitePluginPackageJsonNameQueryString_2>

    description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>

    version?: Maybe<SitePluginPackageJsonVersionQueryString_2>

    main?: Maybe<SitePluginPackageJsonMainQueryString_2>

    license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>

    dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>

    devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>

    peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>

    keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>
}

interface SitePluginPackageJsonNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPackageJsonDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPackageJsonVersionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPackageJsonMainQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPackageJsonLicenseQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPackageJsonDependenciesQueryList_2 {
    elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>
}

interface SitePluginPackageJsonDependenciesInputObject_2 {
    name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>

    version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>
}

interface SitePluginPackageJsonDependenciesNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPackageJsonDevDependenciesQueryList_2 {
    elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>
}

interface SitePluginPackageJsonDevDependenciesInputObject_2 {
    name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>

    version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>
}

interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
    elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>
}

interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
    name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>

    version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>
}

interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginPackageJsonKeywordsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginInternalInputObject_2 {
    contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>

    type?: Maybe<SitePluginInternalTypeQueryString_2>

    owner?: Maybe<SitePluginInternalOwnerQueryString_2>
}

interface SitePluginInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePluginInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataInputObject_2 {
    title?: Maybe<SiteSiteMetadataTitleQueryString_2>

    author?: Maybe<SiteSiteMetadataAuthorQueryString_2>

    caption?: Maybe<SiteSiteMetadataCaptionQueryString_2>

    email?: Maybe<SiteSiteMetadataEmailQueryString_2>

    site?: Maybe<SiteSiteMetadataSiteQueryString_2>

    linkedin?: Maybe<SiteSiteMetadataLinkedinQueryString_2>

    github?: Maybe<SiteSiteMetadataGithubQueryString_2>

    npm?: Maybe<SiteSiteMetadataNpmQueryString_2>

    packageJson?: Maybe<SiteSiteMetadataPackageJsonInputObject_2>
}

interface SiteSiteMetadataTitleQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataAuthorQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataCaptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataEmailQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataSiteQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataLinkedinQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataGithubQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataNpmQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonInputObject_2 {
    name?: Maybe<SiteSiteMetadataPackageJsonNameQueryString_2>

    version?: Maybe<SiteSiteMetadataPackageJsonVersionQueryString_2>

    description?: Maybe<SiteSiteMetadataPackageJsonDescriptionQueryString_2>

    keywords?: Maybe<SiteSiteMetadataPackageJsonKeywordsQueryList_2>

    scripts?: Maybe<SiteSiteMetadataPackageJsonScriptsInputObject_2>

    repository?: Maybe<SiteSiteMetadataPackageJsonRepositoryInputObject_2>

    author?: Maybe<SiteSiteMetadataPackageJsonAuthorQueryString_2>

    license?: Maybe<SiteSiteMetadataPackageJsonLicenseQueryString_2>

    main?: Maybe<SiteSiteMetadataPackageJsonMainQueryString_2>

    private?: Maybe<SiteSiteMetadataPackageJsonPrivateQueryBoolean_2>

    bugs?: Maybe<SiteSiteMetadataPackageJsonBugsInputObject_2>

    homepage?: Maybe<SiteSiteMetadataPackageJsonHomepageQueryString_2>

    dependencies?: Maybe<SiteSiteMetadataPackageJsonDependenciesInputObject_2>

    devDependencies?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesInputObject_2
    >

    husky?: Maybe<SiteSiteMetadataPackageJsonHuskyInputObject_2>
}

interface SiteSiteMetadataPackageJsonNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonVersionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonKeywordsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonScriptsInputObject_2 {
    build?: Maybe<SiteSiteMetadataPackageJsonScriptsBuildQueryString_2>

    dev?: Maybe<SiteSiteMetadataPackageJsonScriptsDevQueryString_2>

    graphql?: Maybe<SiteSiteMetadataPackageJsonScriptsGraphqlQueryString_2>

    test?: Maybe<SiteSiteMetadataPackageJsonScriptsTestQueryString_2>

    coverage?: Maybe<SiteSiteMetadataPackageJsonScriptsCoverageQueryString_2>
}

interface SiteSiteMetadataPackageJsonScriptsBuildQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonScriptsDevQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonScriptsGraphqlQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonScriptsTestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonScriptsCoverageQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonRepositoryInputObject_2 {
    type?: Maybe<SiteSiteMetadataPackageJsonRepositoryTypeQueryString_2>

    url?: Maybe<SiteSiteMetadataPackageJsonRepositoryUrlQueryString_2>
}

interface SiteSiteMetadataPackageJsonRepositoryTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonRepositoryUrlQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonAuthorQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonLicenseQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonMainQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonPrivateQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SiteSiteMetadataPackageJsonBugsInputObject_2 {
    url?: Maybe<SiteSiteMetadataPackageJsonBugsUrlQueryString_2>
}

interface SiteSiteMetadataPackageJsonBugsUrlQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonHomepageQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesInputObject_2 {
    gatsby?: Maybe<SiteSiteMetadataPackageJsonDependenciesGatsbyQueryString_2>

    gatsby_plugin_favicon?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesGatsbyPluginFaviconQueryString_2
    >

    gatsby_plugin_nprogress?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesGatsbyPluginNprogressQueryString_2
    >

    gatsby_plugin_react_helmet?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesGatsbyPluginReactHelmetQueryString_2
    >

    gatsby_plugin_remove_trailing_slashes?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesGatsbyPluginRemoveTrailingSlashesQueryString_2
    >

    gatsby_plugin_typescript?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesGatsbyPluginTypescriptQueryString_2
    >

    gatsby_source_filesystem?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesGatsbySourceFilesystemQueryString_2
    >

    gatsby_transformer_json?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesGatsbyTransformerJsonQueryString_2
    >

    gatsby_transformer_remark?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesGatsbyTransformerRemarkQueryString_2
    >

    moment?: Maybe<SiteSiteMetadataPackageJsonDependenciesMomentQueryString_2>

    react?: Maybe<SiteSiteMetadataPackageJsonDependenciesReactQueryString_2>

    react_dom?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesReactDomQueryString_2
    >

    react_helmet?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesReactHelmetQueryString_2
    >

    react_icons?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesReactIconsQueryString_2
    >

    typeface_roboto?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesTypefaceRobotoQueryString_2
    >

    typeface_roboto_mono?: Maybe<
        SiteSiteMetadataPackageJsonDependenciesTypefaceRobotoMonoQueryString_2
    >
}

interface SiteSiteMetadataPackageJsonDependenciesGatsbyQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesGatsbyPluginFaviconQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesGatsbyPluginNprogressQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesGatsbyPluginReactHelmetQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesGatsbyPluginRemoveTrailingSlashesQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesGatsbyPluginTypescriptQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesGatsbySourceFilesystemQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesGatsbyTransformerJsonQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesGatsbyTransformerRemarkQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesMomentQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesReactQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesReactDomQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesReactHelmetQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesReactIconsQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesTypefaceRobotoQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDependenciesTypefaceRobotoMonoQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesInputObject_2 {
    _types_jest?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesTypesJestQueryString_2
    >

    _types_node?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesTypesNodeQueryString_2
    >

    _types_react?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesTypesReactQueryString_2
    >

    _types_react_dom?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesTypesReactDomQueryString_2
    >

    _types_react_helmet?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesTypesReactHelmetQueryString_2
    >

    codecov?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesCodecovQueryString_2
    >

    graphql_code_generator?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesGraphqlCodeGeneratorQueryString_2
    >

    html_pdf?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesHtmlPdfQueryString_2
    >

    husky?: Maybe<SiteSiteMetadataPackageJsonDevDependenciesHuskyQueryString_2>

    jest?: Maybe<SiteSiteMetadataPackageJsonDevDependenciesJestQueryString_2>

    prettier?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesPrettierQueryString_2
    >

    pretty_quick?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesPrettyQuickQueryString_2
    >

    ts_jest?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesTsJestQueryString_2
    >

    typescript?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesTypescriptQueryString_2
    >

    graphql_codegen_typescript_common?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesGraphqlCodegenTypescriptCommonQueryString_2
    >

    graphql_codegen_typescript_client?: Maybe<
        SiteSiteMetadataPackageJsonDevDependenciesGraphqlCodegenTypescriptClientQueryString_2
    >
}

interface SiteSiteMetadataPackageJsonDevDependenciesTypesJestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesTypesNodeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesTypesReactQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesTypesReactDomQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesTypesReactHelmetQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesCodecovQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesGraphqlCodeGeneratorQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesHtmlPdfQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesHuskyQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesJestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesPrettierQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesPrettyQuickQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesTsJestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesTypescriptQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesGraphqlCodegenTypescriptCommonQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonDevDependenciesGraphqlCodegenTypescriptClientQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteSiteMetadataPackageJsonHuskyInputObject_2 {
    hooks?: Maybe<SiteSiteMetadataPackageJsonHuskyHooksInputObject_2>
}

interface SiteSiteMetadataPackageJsonHuskyHooksInputObject_2 {
    pre_commit?: Maybe<
        SiteSiteMetadataPackageJsonHuskyHooksPreCommitQueryString_2
    >
}

interface SiteSiteMetadataPackageJsonHuskyHooksPreCommitQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePortQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteHostQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePathPrefixQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePolyfillQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SiteBuildTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteInternalInputObject_2 {
    contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>

    type?: Maybe<SiteInternalTypeQueryString_2>

    owner?: Maybe<SiteInternalOwnerQueryString_2>
}

interface SiteInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SiteInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryInternalInputObject_2 {
    contentDigest?: Maybe<DirectoryInternalContentDigestQueryString_2>

    type?: Maybe<DirectoryInternalTypeQueryString_2>

    description?: Maybe<DirectoryInternalDescriptionQueryString_2>

    owner?: Maybe<DirectoryInternalOwnerQueryString_2>
}

interface DirectoryInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryInternalDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectorySourceInstanceNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryAbsolutePathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryRelativePathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryExtensionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectorySizeQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryPrettySizeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryModifiedTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryAccessTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryChangeTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryBirthTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryRootQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryDirQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryBaseQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryExtQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryRelativeDirectoryQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryDevQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryModeQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryNlinkQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryUidQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryGidQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryRdevQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryBlksizeQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryInoQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryBlocksQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryAtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryMtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryCtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryBirthtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface DirectoryAtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryMtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryCtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface DirectoryBirthtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileInternalInputObject_2 {
    contentDigest?: Maybe<FileInternalContentDigestQueryString_2>

    type?: Maybe<FileInternalTypeQueryString_2>

    mediaType?: Maybe<FileInternalMediaTypeQueryString_2>

    description?: Maybe<FileInternalDescriptionQueryString_2>

    owner?: Maybe<FileInternalOwnerQueryString_2>
}

interface FileInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileInternalMediaTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileInternalDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileSourceInstanceNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileAbsolutePathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileRelativePathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileExtensionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileSizeQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FilePrettySizeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileModifiedTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileAccessTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileChangeTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileBirthTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileRootQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileDirQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileBaseQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileExtQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileNameQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileRelativeDirectoryQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileDevQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileModeQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileNlinkQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileUidQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileGidQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileRdevQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileBlksizeQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileInoQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileBlocksQueryInteger_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileAtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileMtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileCtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileBirthtimeMsQueryFloat_2 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface FileAtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileMtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileCtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface FileBirthtimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PublicUrlQueryString_3 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonImageQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonSchoolQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonLocationQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonDegreeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonDateQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonInternalInputObject_2 {
    contentDigest?: Maybe<PortfolioJsonInternalContentDigestQueryString_2>

    type?: Maybe<PortfolioJsonInternalTypeQueryString_2>

    owner?: Maybe<PortfolioJsonInternalOwnerQueryString_2>
}

interface PortfolioJsonInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface PortfolioJsonInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SkillsJsonTimeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SkillsJsonToolQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SkillsJsonIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SkillsJsonInternalInputObject_2 {
    contentDigest?: Maybe<SkillsJsonInternalContentDigestQueryString_2>

    type?: Maybe<SkillsJsonInternalTypeQueryString_2>

    owner?: Maybe<SkillsJsonInternalOwnerQueryString_2>
}

interface SkillsJsonInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SkillsJsonInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SkillsJsonInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonTitleQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonImageQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonLinkQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonStartQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonEndQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonLanguagesQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonPlatformsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonRolesQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonIgnoreQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface ProjectsJsonIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonInternalInputObject_2 {
    contentDigest?: Maybe<ProjectsJsonInternalContentDigestQueryString_2>

    type?: Maybe<ProjectsJsonInternalTypeQueryString_2>

    owner?: Maybe<ProjectsJsonInternalOwnerQueryString_2>
}

interface ProjectsJsonInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonLongDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ProjectsJsonResumeQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface CertificationJsonTitleQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonImageQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonLinkQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonStartQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonEndQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonIgnoreQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface CertificationJsonIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonInternalInputObject_2 {
    contentDigest?: Maybe<CertificationJsonInternalContentDigestQueryString_2>

    type?: Maybe<CertificationJsonInternalTypeQueryString_2>

    owner?: Maybe<CertificationJsonInternalOwnerQueryString_2>
}

interface CertificationJsonInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface CertificationJsonInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonEmployerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonTitleQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonImageQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonLinkQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonLongDescriptionQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonStartQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonEndQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonLanguagesQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonPlatformsQueryList_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonIgnoreQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface WorkJsonIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonInternalInputObject_2 {
    contentDigest?: Maybe<WorkJsonInternalContentDigestQueryString_2>

    type?: Maybe<WorkJsonInternalTypeQueryString_2>

    owner?: Maybe<WorkJsonInternalOwnerQueryString_2>
}

interface WorkJsonInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonLocationQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WorkJsonResumeQueryBoolean_2 {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface MarkdownRemarkIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkInternalInputObject_2 {
    content?: Maybe<MarkdownRemarkInternalContentQueryString_2>

    type?: Maybe<MarkdownRemarkInternalTypeQueryString_2>

    contentDigest?: Maybe<MarkdownRemarkInternalContentDigestQueryString_2>

    owner?: Maybe<MarkdownRemarkInternalOwnerQueryString_2>

    fieldOwners?: Maybe<MarkdownRemarkInternalFieldOwnersInputObject_2>
}

interface MarkdownRemarkInternalContentQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkInternalFieldOwnersInputObject_2 {
    slug?: Maybe<MarkdownRemarkInternalFieldOwnersSlugQueryString_2>
}

interface MarkdownRemarkInternalFieldOwnersSlugQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkFrontmatterInputObject_2 {
    title?: Maybe<MarkdownRemarkFrontmatterTitleQueryString_2>

    date?: Maybe<MarkdownRemarkFrontmatterDateQueryString_2>

    _PARENT?: Maybe<MarkdownRemarkFrontmatterParentQueryString_2>
}

interface MarkdownRemarkFrontmatterTitleQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkFrontmatterDateQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkFrontmatterParentQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkFileAbsolutePathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface MarkdownRemarkFieldsInputObject_2 {
    slug?: Maybe<MarkdownRemarkFieldsSlugQueryString_2>
}

interface MarkdownRemarkFieldsSlugQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface HtmlQueryString_3 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface ExcerptQueryString_3 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface HeadingsQueryList_3 {
    elemMatch?: Maybe<HeadingsListElemTypeName_3>
}

interface HeadingsListElemTypeName_3 {
    value?: Maybe<HeadingsListElemValueQueryString_3>

    depth?: Maybe<HeadingsListElemDepthQueryInt_3>
}

interface HeadingsListElemValueQueryString_3 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface HeadingsListElemDepthQueryInt_3 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface TimeToReadQueryInt_3 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface TableOfContentsQueryString_3 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface WordCountTypeName_3 {
    paragraphs?: Maybe<WordCountParagraphsQueryInt_3>

    sentences?: Maybe<WordCountSentencesQueryInt_3>

    words?: Maybe<WordCountWordsQueryInt_3>
}

interface WordCountParagraphsQueryInt_3 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface WordCountSentencesQueryInt_3 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface WordCountWordsQueryInt_3 {
    eq?: Maybe<number>

    ne?: Maybe<number>

    gt?: Maybe<number>

    gte?: Maybe<number>

    lt?: Maybe<number>

    lte?: Maybe<number>

    in?: Maybe<(Maybe<number>)[]>

    nin?: Maybe<(Maybe<number>)[]>
}

interface SitePageJsonNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageInternalComponentNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePathQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageComponentQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageComponentChunkNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageContextInputObject {
    slug?: Maybe<SitePageContextSlugQueryString>
}

interface SitePageContextSlugQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorInputObject {
    resolve?: Maybe<SitePagePluginCreatorResolveQueryString>

    id?: Maybe<SitePagePluginCreatorIdQueryString>

    name?: Maybe<SitePagePluginCreatorNameQueryString>

    version?: Maybe<SitePagePluginCreatorVersionQueryString>

    pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>

    nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>

    browserAPIs?: Maybe<SitePagePluginCreatorBrowserApIsQueryList>

    ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>

    pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>

    packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>

    parent?: Maybe<SitePagePluginCreatorParentQueryString>

    internal?: Maybe<SitePagePluginCreatorInternalInputObject>
}

interface SitePagePluginCreatorResolveQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorIdQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorVersionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPluginOptionsInputObject {
    name?: Maybe<SitePagePluginCreatorPluginOptionsNameQueryString>

    path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>

    color?: Maybe<SitePagePluginCreatorPluginOptionsColorQueryString>

    showSpinner?: Maybe<
        SitePagePluginCreatorPluginOptionsShowSpinnerQueryBoolean
    >

    logo?: Maybe<SitePagePluginCreatorPluginOptionsLogoQueryString>

    injectHTML?: Maybe<SitePagePluginCreatorPluginOptionsInjectHtmlQueryBoolean>

    icons?: Maybe<SitePagePluginCreatorPluginOptionsIconsInputObject>

    pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>
}

interface SitePagePluginCreatorPluginOptionsNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPluginOptionsPathQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPluginOptionsColorQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPluginOptionsShowSpinnerQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePagePluginCreatorPluginOptionsLogoQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPluginOptionsInjectHtmlQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePagePluginCreatorPluginOptionsIconsInputObject {
    android?: Maybe<SitePagePluginCreatorPluginOptionsIconsAndroidInputObject>

    appleIcon?: Maybe<
        SitePagePluginCreatorPluginOptionsIconsAppleIconInputObject
    >

    appleStartup?: Maybe<
        SitePagePluginCreatorPluginOptionsIconsAppleStartupInputObject
    >

    coast?: Maybe<SitePagePluginCreatorPluginOptionsIconsCoastQueryBoolean>

    favicons?: Maybe<
        SitePagePluginCreatorPluginOptionsIconsFaviconsQueryBoolean
    >

    firefox?: Maybe<SitePagePluginCreatorPluginOptionsIconsFirefoxQueryBoolean>

    twitter?: Maybe<SitePagePluginCreatorPluginOptionsIconsTwitterQueryBoolean>

    yandex?: Maybe<SitePagePluginCreatorPluginOptionsIconsYandexQueryBoolean>

    windows?: Maybe<SitePagePluginCreatorPluginOptionsIconsWindowsQueryBoolean>
}

interface SitePagePluginCreatorPluginOptionsIconsAndroidInputObject {
    background?: Maybe<
        SitePagePluginCreatorPluginOptionsIconsAndroidBackgroundQueryString
    >
}

interface SitePagePluginCreatorPluginOptionsIconsAndroidBackgroundQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPluginOptionsIconsAppleIconInputObject {
    background?: Maybe<
        SitePagePluginCreatorPluginOptionsIconsAppleIconBackgroundQueryString
    >
}

interface SitePagePluginCreatorPluginOptionsIconsAppleIconBackgroundQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPluginOptionsIconsAppleStartupInputObject {
    background?: Maybe<
        SitePagePluginCreatorPluginOptionsIconsAppleStartupBackgroundQueryString
    >
}

interface SitePagePluginCreatorPluginOptionsIconsAppleStartupBackgroundQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPluginOptionsIconsCoastQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePagePluginCreatorPluginOptionsIconsFaviconsQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePagePluginCreatorPluginOptionsIconsFirefoxQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePagePluginCreatorPluginOptionsIconsTwitterQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePagePluginCreatorPluginOptionsIconsYandexQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePagePluginCreatorPluginOptionsIconsWindowsQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
    eq?: Maybe<boolean>

    ne?: Maybe<boolean>

    in?: Maybe<(Maybe<boolean>)[]>

    nin?: Maybe<(Maybe<boolean>)[]>
}

interface SitePagePluginCreatorNodeApIsQueryList {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorBrowserApIsQueryList {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorSsrApIsQueryList {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPluginFilepathQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPackageJsonInputObject {
    name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>

    description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>

    version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>

    main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>

    license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>

    dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>

    devDependencies?: Maybe<
        SitePagePluginCreatorPackageJsonDevDependenciesQueryList
    >

    peerDependencies?: Maybe<
        SitePagePluginCreatorPackageJsonPeerDependenciesQueryList
    >

    keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>
}

interface SitePagePluginCreatorPackageJsonNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPackageJsonVersionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPackageJsonMainQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPackageJsonLicenseQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
    elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>
}

interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
    name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>

    version?: Maybe<
        SitePagePluginCreatorPackageJsonDependenciesVersionQueryString
    >
}

interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
    elemMatch?: Maybe<
        SitePagePluginCreatorPackageJsonDevDependenciesInputObject
    >
}

interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
    name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>

    version?: Maybe<
        SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString
    >
}

interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
    elemMatch?: Maybe<
        SitePagePluginCreatorPackageJsonPeerDependenciesInputObject
    >
}

interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
    name?: Maybe<
        SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString
    >

    version?: Maybe<
        SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString
    >
}

interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorParentQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorInternalInputObject {
    contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>

    type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>

    owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>
}

interface SitePagePluginCreatorInternalContentDigestQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorInternalTypeQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorInternalOwnerQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePagePluginCreatorIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageComponentPathQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageIdQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageInternalInputObject_2 {
    type?: Maybe<SitePageInternalTypeQueryString_2>

    contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>

    description?: Maybe<SitePageInternalDescriptionQueryString>

    owner?: Maybe<SitePageInternalOwnerQueryString_2>
}

interface SitePageInternalTypeQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageInternalContentDigestQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageInternalDescriptionQueryString {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

interface SitePageInternalOwnerQueryString_2 {
    eq?: Maybe<string>

    ne?: Maybe<string>

    regex?: Maybe<string>

    glob?: Maybe<string>

    in?: Maybe<(Maybe<string>)[]>

    nin?: Maybe<(Maybe<string>)[]>
}

declare enum SitePluginConnectionSortByFieldsEnum {
    Resolve = 'resolve',
    Id = 'id',
    Name = 'name',
    Version = 'version',
    PluginOptionsName = 'pluginOptions___name',
    PluginOptionsPath = 'pluginOptions___path',
    PluginOptionsColor = 'pluginOptions___color',
    PluginOptionsShowSpinner = 'pluginOptions___showSpinner',
    PluginOptionsLogo = 'pluginOptions___logo',
    PluginOptionsInjectHtml = 'pluginOptions___injectHTML',
    PluginOptionsIconsAndroid = 'pluginOptions___icons___android',
    PluginOptionsIconsAppleIcon = 'pluginOptions___icons___appleIcon',
    PluginOptionsIconsAppleStartup = 'pluginOptions___icons___appleStartup',
    PluginOptionsIconsCoast = 'pluginOptions___icons___coast',
    PluginOptionsIconsFavicons = 'pluginOptions___icons___favicons',
    PluginOptionsIconsFirefox = 'pluginOptions___icons___firefox',
    PluginOptionsIconsTwitter = 'pluginOptions___icons___twitter',
    PluginOptionsIconsYandex = 'pluginOptions___icons___yandex',
    PluginOptionsIconsWindows = 'pluginOptions___icons___windows',
    PluginOptionsPathCheck = 'pluginOptions___pathCheck',
    NodeApIs = 'nodeAPIs',
    BrowserApIs = 'browserAPIs',
    SsrApIs = 'ssrAPIs',
    PluginFilepath = 'pluginFilepath',
    PackageJsonName = 'packageJson___name',
    PackageJsonDescription = 'packageJson___description',
    PackageJsonVersion = 'packageJson___version',
    PackageJsonMain = 'packageJson___main',
    PackageJsonAuthor = 'packageJson___author',
    PackageJsonLicense = 'packageJson___license',
    PackageJsonDependencies = 'packageJson___dependencies',
    PackageJsonDevDependencies = 'packageJson___devDependencies',
    PackageJsonPeerDependencies = 'packageJson___peerDependencies',
    PackageJsonKeywords = 'packageJson___keywords',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
}

declare enum SitePluginConnectionSortOrderValues {
    Asc = 'ASC',
    Desc = 'DESC',
}

declare enum SitePluginDistinctEnum {
    Resolve = 'resolve',
    Id = 'id',
    Name = 'name',
    Version = 'version',
    PluginOptionsName = 'pluginOptions___name',
    PluginOptionsPath = 'pluginOptions___path',
    PluginOptionsColor = 'pluginOptions___color',
    PluginOptionsShowSpinner = 'pluginOptions___showSpinner',
    PluginOptionsLogo = 'pluginOptions___logo',
    PluginOptionsInjectHtml = 'pluginOptions___injectHTML',
    PluginOptionsIconsAndroid = 'pluginOptions___icons___android',
    PluginOptionsIconsAppleIcon = 'pluginOptions___icons___appleIcon',
    PluginOptionsIconsAppleStartup = 'pluginOptions___icons___appleStartup',
    PluginOptionsIconsCoast = 'pluginOptions___icons___coast',
    PluginOptionsIconsFavicons = 'pluginOptions___icons___favicons',
    PluginOptionsIconsFirefox = 'pluginOptions___icons___firefox',
    PluginOptionsIconsTwitter = 'pluginOptions___icons___twitter',
    PluginOptionsIconsYandex = 'pluginOptions___icons___yandex',
    PluginOptionsIconsWindows = 'pluginOptions___icons___windows',
    PluginOptionsPathCheck = 'pluginOptions___pathCheck',
    NodeApIs = 'nodeAPIs',
    BrowserApIs = 'browserAPIs',
    SsrApIs = 'ssrAPIs',
    PluginFilepath = 'pluginFilepath',
    PackageJsonName = 'packageJson___name',
    PackageJsonDescription = 'packageJson___description',
    PackageJsonVersion = 'packageJson___version',
    PackageJsonMain = 'packageJson___main',
    PackageJsonAuthor = 'packageJson___author',
    PackageJsonLicense = 'packageJson___license',
    PackageJsonDependencies = 'packageJson___dependencies',
    PackageJsonDevDependencies = 'packageJson___devDependencies',
    PackageJsonPeerDependencies = 'packageJson___peerDependencies',
    PackageJsonKeywords = 'packageJson___keywords',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
}

declare enum SitePluginGroupEnum {
    Resolve = 'resolve',
    Id = 'id',
    Name = 'name',
    Version = 'version',
    PluginOptionsName = 'pluginOptions___name',
    PluginOptionsPath = 'pluginOptions___path',
    PluginOptionsColor = 'pluginOptions___color',
    PluginOptionsShowSpinner = 'pluginOptions___showSpinner',
    PluginOptionsLogo = 'pluginOptions___logo',
    PluginOptionsInjectHtml = 'pluginOptions___injectHTML',
    PluginOptionsIconsAndroid = 'pluginOptions___icons___android',
    PluginOptionsIconsAppleIcon = 'pluginOptions___icons___appleIcon',
    PluginOptionsIconsAppleStartup = 'pluginOptions___icons___appleStartup',
    PluginOptionsIconsCoast = 'pluginOptions___icons___coast',
    PluginOptionsIconsFavicons = 'pluginOptions___icons___favicons',
    PluginOptionsIconsFirefox = 'pluginOptions___icons___firefox',
    PluginOptionsIconsTwitter = 'pluginOptions___icons___twitter',
    PluginOptionsIconsYandex = 'pluginOptions___icons___yandex',
    PluginOptionsIconsWindows = 'pluginOptions___icons___windows',
    PluginOptionsPathCheck = 'pluginOptions___pathCheck',
    NodeApIs = 'nodeAPIs',
    BrowserApIs = 'browserAPIs',
    SsrApIs = 'ssrAPIs',
    PluginFilepath = 'pluginFilepath',
    PackageJsonName = 'packageJson___name',
    PackageJsonDescription = 'packageJson___description',
    PackageJsonVersion = 'packageJson___version',
    PackageJsonMain = 'packageJson___main',
    PackageJsonAuthor = 'packageJson___author',
    PackageJsonLicense = 'packageJson___license',
    PackageJsonDependencies = 'packageJson___dependencies',
    PackageJsonDevDependencies = 'packageJson___devDependencies',
    PackageJsonPeerDependencies = 'packageJson___peerDependencies',
    PackageJsonKeywords = 'packageJson___keywords',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
}

declare enum DirectoryConnectionSortByFieldsEnum {
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalDescription = 'internal___description',
    InternalOwner = 'internal___owner',
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Blksize = 'blksize',
    Ino = 'ino',
    Blocks = 'blocks',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    BirthtimeMs = 'birthtimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
}

declare enum DirectoryConnectionSortOrderValues {
    Asc = 'ASC',
    Desc = 'DESC',
}

declare enum DirectoryDistinctEnum {
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalDescription = 'internal___description',
    InternalOwner = 'internal___owner',
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Blksize = 'blksize',
    Ino = 'ino',
    Blocks = 'blocks',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    BirthtimeMs = 'birthtimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
}

declare enum DirectoryGroupEnum {
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalDescription = 'internal___description',
    InternalOwner = 'internal___owner',
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Blksize = 'blksize',
    Ino = 'ino',
    Blocks = 'blocks',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    BirthtimeMs = 'birthtimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
}

declare enum FileConnectionSortByFieldsEnum {
    Id = 'id',
    Children = 'children',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalMediaType = 'internal___mediaType',
    InternalDescription = 'internal___description',
    InternalOwner = 'internal___owner',
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Blksize = 'blksize',
    Ino = 'ino',
    Blocks = 'blocks',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    BirthtimeMs = 'birthtimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
    PublicUrl = 'publicURL',
}

declare enum FileConnectionSortOrderValues {
    Asc = 'ASC',
    Desc = 'DESC',
}

declare enum ExcerptFormats {
    Plain = 'PLAIN',
    Html = 'HTML',
}

declare enum HeadingLevels {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

declare enum FileDistinctEnum {
    Id = 'id',
    Children = 'children',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalMediaType = 'internal___mediaType',
    InternalDescription = 'internal___description',
    InternalOwner = 'internal___owner',
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Blksize = 'blksize',
    Ino = 'ino',
    Blocks = 'blocks',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    BirthtimeMs = 'birthtimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
}

declare enum FileGroupEnum {
    Id = 'id',
    Children = 'children',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalMediaType = 'internal___mediaType',
    InternalDescription = 'internal___description',
    InternalOwner = 'internal___owner',
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Blksize = 'blksize',
    Ino = 'ino',
    Blocks = 'blocks',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    BirthtimeMs = 'birthtimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
}

declare enum PortfolioJsonConnectionSortByFieldsEnum {
    Image = 'image',
    School = 'school',
    Location = 'location',
    Degree = 'degree',
    Date = 'date',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
}

declare enum PortfolioJsonConnectionSortOrderValues {
    Asc = 'ASC',
    Desc = 'DESC',
}

declare enum PortfolioJsonDistinctEnum {
    Image = 'image',
    School = 'school',
    Location = 'location',
    Degree = 'degree',
    Date = 'date',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
}

declare enum PortfolioJsonGroupEnum {
    Image = 'image',
    School = 'school',
    Location = 'location',
    Degree = 'degree',
    Date = 'date',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
}

declare enum SkillsJsonConnectionSortByFieldsEnum {
    Time = 'time',
    Tool = 'tool',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
}

declare enum SkillsJsonConnectionSortOrderValues {
    Asc = 'ASC',
    Desc = 'DESC',
}

declare enum SkillsJsonDistinctEnum {
    Time = 'time',
    Tool = 'tool',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
}

declare enum SkillsJsonGroupEnum {
    Time = 'time',
    Tool = 'tool',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
}

declare enum ProjectsJsonConnectionSortByFieldsEnum {
    Title = 'title',
    Image = 'image',
    Link = 'link',
    Type = 'type',
    Start = 'start',
    End = 'end',
    Languages = 'languages',
    Platforms = 'platforms',
    Roles = 'roles',
    Ignore = 'ignore',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
    LongDescription = 'longDescription',
    Resume = 'resume',
}

declare enum ProjectsJsonConnectionSortOrderValues {
    Asc = 'ASC',
    Desc = 'DESC',
}

declare enum ProjectsJsonDistinctEnum {
    Title = 'title',
    Image = 'image',
    Link = 'link',
    Type = 'type',
    Start = 'start',
    End = 'end',
    Languages = 'languages',
    Platforms = 'platforms',
    Roles = 'roles',
    Ignore = 'ignore',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
    LongDescription = 'longDescription',
    Resume = 'resume',
}

declare enum ProjectsJsonGroupEnum {
    Title = 'title',
    Image = 'image',
    Link = 'link',
    Type = 'type',
    Start = 'start',
    End = 'end',
    Languages = 'languages',
    Platforms = 'platforms',
    Roles = 'roles',
    Ignore = 'ignore',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
    LongDescription = 'longDescription',
    Resume = 'resume',
}

declare enum CertificationJsonConnectionSortByFieldsEnum {
    Title = 'title',
    Image = 'image',
    Link = 'link',
    Start = 'start',
    End = 'end',
    Ignore = 'ignore',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
}

declare enum CertificationJsonConnectionSortOrderValues {
    Asc = 'ASC',
    Desc = 'DESC',
}

declare enum CertificationJsonDistinctEnum {
    Title = 'title',
    Image = 'image',
    Link = 'link',
    Start = 'start',
    End = 'end',
    Ignore = 'ignore',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
}

declare enum CertificationJsonGroupEnum {
    Title = 'title',
    Image = 'image',
    Link = 'link',
    Start = 'start',
    End = 'end',
    Ignore = 'ignore',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
}

declare enum WorkJsonConnectionSortByFieldsEnum {
    Employer = 'employer',
    Title = 'title',
    Image = 'image',
    Link = 'link',
    Description = 'description',
    LongDescription = 'longDescription',
    Start = 'start',
    End = 'end',
    Languages = 'languages',
    Platforms = 'platforms',
    Ignore = 'ignore',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
    Location = 'location',
    Resume = 'resume',
}

declare enum WorkJsonConnectionSortOrderValues {
    Asc = 'ASC',
    Desc = 'DESC',
}

declare enum WorkJsonDistinctEnum {
    Employer = 'employer',
    Title = 'title',
    Image = 'image',
    Link = 'link',
    Description = 'description',
    LongDescription = 'longDescription',
    Start = 'start',
    End = 'end',
    Languages = 'languages',
    Platforms = 'platforms',
    Ignore = 'ignore',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
    Location = 'location',
    Resume = 'resume',
}

declare enum WorkJsonGroupEnum {
    Employer = 'employer',
    Title = 'title',
    Image = 'image',
    Link = 'link',
    Description = 'description',
    LongDescription = 'longDescription',
    Start = 'start',
    End = 'end',
    Languages = 'languages',
    Platforms = 'platforms',
    Ignore = 'ignore',
    Id = 'id',
    Parent = 'parent',
    InternalContentDigest = 'internal___contentDigest',
    InternalType = 'internal___type',
    InternalOwner = 'internal___owner',
    Location = 'location',
    Resume = 'resume',
}

declare enum MarkdownRemarkConnectionSortByFieldsEnum {
    Id = 'id',
    Parent = 'parent',
    InternalContent = 'internal___content',
    InternalType = 'internal___type',
    InternalContentDigest = 'internal___contentDigest',
    InternalOwner = 'internal___owner',
    InternalFieldOwnersSlug = 'internal___fieldOwners___slug',
    FrontmatterTitle = 'frontmatter___title',
    FrontmatterDate = 'frontmatter___date',
    FrontmatterParent = 'frontmatter____PARENT',
    RawMarkdownBody = 'rawMarkdownBody',
    FileAbsolutePath = 'fileAbsolutePath',
    FieldsSlug = 'fields___slug',
    Html = 'html',
    Excerpt = 'excerpt',
    Headings = 'headings',
    TimeToRead = 'timeToRead',
    TableOfContents = 'tableOfContents',
    WordCountParagraphs = 'wordCount___paragraphs',
    WordCountSentences = 'wordCount___sentences',
    WordCountWords = 'wordCount___words',
}

declare enum MarkdownRemarkConnectionSortOrderValues {
    Asc = 'ASC',
    Desc = 'DESC',
}

declare enum MarkdownRemarkDistinctEnum {
    Id = 'id',
    Parent = 'parent',
    InternalContent = 'internal___content',
    InternalType = 'internal___type',
    InternalContentDigest = 'internal___contentDigest',
    InternalOwner = 'internal___owner',
    InternalFieldOwnersSlug = 'internal___fieldOwners___slug',
    FrontmatterTitle = 'frontmatter___title',
    FrontmatterDate = 'frontmatter___date',
    FrontmatterParent = 'frontmatter____PARENT',
    RawMarkdownBody = 'rawMarkdownBody',
    FileAbsolutePath = 'fileAbsolutePath',
    FieldsSlug = 'fields___slug',
}

declare enum MarkdownRemarkGroupEnum {
    Id = 'id',
    Parent = 'parent',
    InternalContent = 'internal___content',
    InternalType = 'internal___type',
    InternalContentDigest = 'internal___contentDigest',
    InternalOwner = 'internal___owner',
    InternalFieldOwnersSlug = 'internal___fieldOwners___slug',
    FrontmatterTitle = 'frontmatter___title',
    FrontmatterDate = 'frontmatter___date',
    FrontmatterParent = 'frontmatter____PARENT',
    RawMarkdownBody = 'rawMarkdownBody',
    FileAbsolutePath = 'fileAbsolutePath',
    FieldsSlug = 'fields___slug',
}

declare enum SitePageConnectionSortByFieldsEnum {
    JsonName = 'jsonName',
    InternalComponentName = 'internalComponentName',
    Path = 'path',
    Component = 'component',
    ComponentChunkName = 'componentChunkName',
    ContextSlug = 'context___slug',
    PluginCreatorNode = 'pluginCreator___NODE',
    PluginCreatorId = 'pluginCreatorId',
    ComponentPath = 'componentPath',
    Id = 'id',
    Parent = 'parent',
    InternalType = 'internal___type',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalOwner = 'internal___owner',
}

declare enum SitePageConnectionSortOrderValues {
    Asc = 'ASC',
    Desc = 'DESC',
}

declare enum SitePageDistinctEnum {
    JsonName = 'jsonName',
    InternalComponentName = 'internalComponentName',
    Path = 'path',
    Component = 'component',
    ComponentChunkName = 'componentChunkName',
    ContextSlug = 'context___slug',
    PluginCreatorNode = 'pluginCreator___NODE',
    PluginCreatorId = 'pluginCreatorId',
    ComponentPath = 'componentPath',
    Id = 'id',
    Parent = 'parent',
    InternalType = 'internal___type',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalOwner = 'internal___owner',
}

declare enum SitePageGroupEnum {
    JsonName = 'jsonName',
    InternalComponentName = 'internalComponentName',
    Path = 'path',
    Component = 'component',
    ComponentChunkName = 'componentChunkName',
    ContextSlug = 'context___slug',
    PluginCreatorNode = 'pluginCreator___NODE',
    PluginCreatorId = 'pluginCreatorId',
    ComponentPath = 'componentPath',
    Id = 'id',
    Parent = 'parent',
    InternalType = 'internal___type',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalOwner = 'internal___owner',
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
type ISO8601String = any

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
type Json = any
