/* tslint:disable */
/* An object with an id, parent, and children */
interface Node {
  id: string; /* The id of the node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
}

interface RootQueryType {
  allSitePlugin?: SitePluginConnection | null; /* Connection to all SitePlugin nodes */
  allDirectory?: DirectoryConnection | null; /* Connection to all Directory nodes */
  allFile?: FileConnection | null; /* Connection to all File nodes */
  allPortfolioJson?: PortfolioJsonConnection | null; /* Connection to all PortfolioJson nodes */
  allSkillsJson?: SkillsJsonConnection | null; /* Connection to all SkillsJson nodes */
  allCertificationJson?: CertificationJsonConnection | null; /* Connection to all CertificationJson nodes */
  allWorkJson?: WorkJsonConnection | null; /* Connection to all WorkJson nodes */
  allProjectsJson?: ProjectsJsonConnection | null; /* Connection to all ProjectsJson nodes */
  allMarkdownRemark?: MarkdownRemarkConnection | null; /* Connection to all MarkdownRemark nodes */
  allSitePage?: SitePageConnection | null; /* Connection to all SitePage nodes */
  sitePlugin?: SitePlugin | null; 
  site?: Site | null; 
  directory?: Directory | null; 
  file?: File | null; 
  portfolioJson?: PortfolioJson | null; 
  skillsJson?: SkillsJson | null; 
  certificationJson?: CertificationJson | null; 
  workJson?: WorkJson | null; 
  projectsJson?: ProjectsJson | null; 
  markdownRemark?: MarkdownRemark | null; 
  sitePage?: SitePage | null; 
}
/* A connection to a list of items. */
interface SitePluginConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: SitePluginEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: sitePluginGroupConnectionConnection[] | null; 
}
/* Information about pagination in a connection. */
interface PageInfo {
  hasNextPage: boolean; /* When paginating, are there more items? */
}
/* An edge in a connection. */
interface SitePluginEdge {
  node?: SitePlugin | null; /* The item at the end of the edge */
  next?: SitePlugin | null; /* The next edge in the connection */
  previous?: SitePlugin | null; /* The previous edge in the connection */
}
/* Node of type SitePlugin */
interface SitePlugin extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  resolve?: string | null; 
  name?: string | null; 
  version?: string | null; 
  pluginOptions?: pluginOptions_2 | null; 
  nodeAPIs?: string[] | null; 
  pluginFilepath?: string | null; 
  packageJson?: packageJson_3 | null; 
  internal?: internal_12 | null; 
}

interface pluginOptions_2 {
  name?: string | null; 
  path?: string | null; 
  color?: string | null; 
  showSpinner?: boolean | null; 
  logo?: string | null; 
  injectHTML?: boolean | null; 
  icons?: icons_2 | null; 
}

interface icons_2 {
  android?: android_2 | null; 
  appleIcon?: appleIcon_2 | null; 
  appleStartup?: appleStartup_2 | null; 
  coast?: boolean | null; 
  favicons?: boolean | null; 
  firefox?: boolean | null; 
  twitter?: boolean | null; 
  yandex?: boolean | null; 
  windows?: boolean | null; 
}

interface android_2 {
  background?: string | null; 
}

interface appleIcon_2 {
  background?: string | null; 
}

interface appleStartup_2 {
  background?: string | null; 
}

interface packageJson_3 {
  name?: string | null; 
  description?: string | null; 
  version?: string | null; 
  main?: string | null; 
  keywords?: string[] | null; 
  author?: string | null; 
  license?: string | null; 
  dependencies?: dependencies_3[] | null; 
  devDependencies?: devDependencies_3[] | null; 
  peerDependencies?: peerDependencies_2[] | null; 
}

interface dependencies_3 {
  name?: string | null; 
  version?: string | null; 
}

interface devDependencies_3 {
  name?: string | null; 
  version?: string | null; 
}

interface peerDependencies_2 {
  name?: string | null; 
  version?: string | null; 
}

interface internal_12 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* A connection to a list of items. */
interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: sitePluginGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
interface sitePluginGroupConnectionEdge {
  node?: SitePlugin | null; /* The item at the end of the edge */
  next?: SitePlugin | null; /* The next edge in the connection */
  previous?: SitePlugin | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface DirectoryConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: DirectoryEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: directoryGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
interface DirectoryEdge {
  node?: Directory | null; /* The item at the end of the edge */
  next?: Directory | null; /* The next edge in the connection */
  previous?: Directory | null; /* The previous edge in the connection */
}
/* Node of type Directory */
interface Directory extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  internal?: internal_13 | null; 
  sourceInstanceName?: string | null; 
  absolutePath?: string | null; 
  relativePath?: string | null; 
  extension?: string | null; 
  size?: number | null; 
  prettySize?: string | null; 
  modifiedTime?: string | null; 
  accessTime?: string | null; 
  changeTime?: string | null; 
  birthTime?: string | null; 
  root?: string | null; 
  dir?: string | null; 
  base?: string | null; 
  ext?: string | null; 
  name?: string | null; 
  relativeDirectory?: string | null; 
  dev?: number | null; 
  mode?: number | null; 
  nlink?: number | null; 
  uid?: number | null; 
  gid?: number | null; 
  rdev?: number | null; 
  blksize?: string | null; 
  ino?: number | null; 
  blocks?: number | null; 
  atimeMs?: number | null; 
  mtimeMs?: number | null; 
  ctimeMs?: number | null; 
  birthtimeMs?: number | null; 
  atime?: string | null; 
  mtime?: string | null; 
  ctime?: string | null; 
  birthtime?: string | null; 
}

interface internal_13 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* A connection to a list of items. */
interface directoryGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: directoryGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
interface directoryGroupConnectionEdge {
  node?: Directory | null; /* The item at the end of the edge */
  next?: Directory | null; /* The next edge in the connection */
  previous?: Directory | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface FileConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: FileEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: fileGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
interface FileEdge {
  node?: File | null; /* The item at the end of the edge */
  next?: File | null; /* The next edge in the connection */
  previous?: File | null; /* The previous edge in the connection */
}
/* Node of type File */
interface File extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  childPortfolioJson?: PortfolioJson | null; /* The child of this node of type portfolioJson */
  childrenSkillsJson?: SkillsJson[] | null; /* The children of this node of type skillsJson */
  childCertificationJson?: CertificationJson | null; /* The child of this node of type certificationJson */
  childWorkJson?: WorkJson | null; /* The child of this node of type workJson */
  childProjectsJson?: ProjectsJson | null; /* The child of this node of type projectsJson */
  childMarkdownRemark?: MarkdownRemark | null; /* The child of this node of type markdownRemark */
  internal?: internal_14 | null; 
  sourceInstanceName?: string | null; 
  absolutePath?: string | null; 
  relativePath?: string | null; 
  extension?: string | null; 
  size?: string | null; 
  prettySize?: string | null; 
  modifiedTime?: string | null; 
  accessTime?: string | null; 
  changeTime?: string | null; 
  birthTime?: string | null; 
  root?: string | null; 
  dir?: string | null; 
  base?: string | null; 
  ext?: string | null; 
  name?: string | null; 
  relativeDirectory?: string | null; 
  dev?: number | null; 
  mode?: number | null; 
  nlink?: number | null; 
  uid?: number | null; 
  gid?: number | null; 
  rdev?: number | null; 
  blksize?: string | null; 
  ino?: number | null; 
  blocks?: number | null; 
  atimeMs?: number | null; 
  mtimeMs?: number | null; 
  ctimeMs?: number | null; 
  birthtimeMs?: number | null; 
  atime?: string | null; 
  mtime?: string | null; 
  ctime?: string | null; 
  birthtime?: string | null; 
}
/* Node of type PortfolioJson */
interface PortfolioJson extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  image?: string | null; 
  school?: string | null; 
  location?: string | null; 
  degree?: string | null; 
  date?: string | null; 
  internal?: internal_15 | null; 
}

interface internal_15 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* Node of type SkillsJson */
interface SkillsJson extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  time?: string | null; 
  tool?: string | null; 
  internal?: internal_16 | null; 
}

interface internal_16 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* Node of type CertificationJson */
interface CertificationJson extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  title?: string | null; 
  image?: string | null; 
  link?: string | null; 
  start?: string | null; 
  end?: string | null; 
  ignore?: boolean | null; 
  internal?: internal_17 | null; 
}

interface internal_17 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* Node of type WorkJson */
interface WorkJson extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  employer?: string | null; 
  title?: string | null; 
  image?: string | null; 
  link?: string | null; 
  description?: string | null; 
  longDescription?: string | null; 
  start?: string | null; 
  end?: string | null; 
  languages?: string[] | null; 
  platforms?: string[] | null; 
  ignore?: boolean | null; 
  internal?: internal_18 | null; 
  location?: string | null; 
  resume?: boolean | null; 
}

interface internal_18 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* Node of type ProjectsJson */
interface ProjectsJson extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  title?: string | null; 
  image?: string | null; 
  link?: string | null; 
  type?: string | null; 
  start?: string | null; 
  end?: string | null; 
  languages?: string[] | null; 
  platforms?: string[] | null; 
  roles?: string[] | null; 
  ignore?: boolean | null; 
  internal?: internal_19 | null; 
  longDescription?: string | null; 
  resume?: boolean | null; 
}

interface internal_19 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* Node of type MarkdownRemark */
interface MarkdownRemark extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  internal?: internal_20 | null; 
  frontmatter?: frontmatter_2 | null; 
  fileAbsolutePath?: string | null; 
  fields?: fields_2 | null; 
  html?: string | null; 
  excerpt?: string | null; 
  headings?: MarkdownHeading[] | null; 
  timeToRead?: number | null; 
  tableOfContents?: string | null; 
  wordCount?: wordCount | null; 
}

interface internal_20 {
  content?: string | null; 
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
  fieldOwners?: fieldOwners_2 | null; 
}

interface fieldOwners_2 {
  slug?: string | null; 
}

interface frontmatter_2 {
  title?: string | null; 
  date?: string | null; 
  _PARENT?: string | null; 
  parent?: string | null; 
}

interface fields_2 {
  slug?: string | null; 
}

interface MarkdownHeading {
  value?: string | null; 
  depth?: number | null; 
}

interface wordCount {
  paragraphs?: number | null; 
  sentences?: number | null; 
  words?: number | null; 
}

interface internal_14 {
  contentDigest?: string | null; 
  mediaType?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* A connection to a list of items. */
interface fileGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: fileGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
interface fileGroupConnectionEdge {
  node?: File | null; /* The item at the end of the edge */
  next?: File | null; /* The next edge in the connection */
  previous?: File | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface PortfolioJsonConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: PortfolioJsonEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: portfolioJsonGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
interface PortfolioJsonEdge {
  node?: PortfolioJson | null; /* The item at the end of the edge */
  next?: PortfolioJson | null; /* The next edge in the connection */
  previous?: PortfolioJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface portfolioJsonGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: portfolioJsonGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
interface portfolioJsonGroupConnectionEdge {
  node?: PortfolioJson | null; /* The item at the end of the edge */
  next?: PortfolioJson | null; /* The next edge in the connection */
  previous?: PortfolioJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface SkillsJsonConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: SkillsJsonEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: skillsJsonGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
interface SkillsJsonEdge {
  node?: SkillsJson | null; /* The item at the end of the edge */
  next?: SkillsJson | null; /* The next edge in the connection */
  previous?: SkillsJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface skillsJsonGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: skillsJsonGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
interface skillsJsonGroupConnectionEdge {
  node?: SkillsJson | null; /* The item at the end of the edge */
  next?: SkillsJson | null; /* The next edge in the connection */
  previous?: SkillsJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface CertificationJsonConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: CertificationJsonEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: certificationJsonGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
interface CertificationJsonEdge {
  node?: CertificationJson | null; /* The item at the end of the edge */
  next?: CertificationJson | null; /* The next edge in the connection */
  previous?: CertificationJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface certificationJsonGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: certificationJsonGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
interface certificationJsonGroupConnectionEdge {
  node?: CertificationJson | null; /* The item at the end of the edge */
  next?: CertificationJson | null; /* The next edge in the connection */
  previous?: CertificationJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface WorkJsonConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: WorkJsonEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: workJsonGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
interface WorkJsonEdge {
  node?: WorkJson | null; /* The item at the end of the edge */
  next?: WorkJson | null; /* The next edge in the connection */
  previous?: WorkJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface workJsonGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: workJsonGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
interface workJsonGroupConnectionEdge {
  node?: WorkJson | null; /* The item at the end of the edge */
  next?: WorkJson | null; /* The next edge in the connection */
  previous?: WorkJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface ProjectsJsonConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: ProjectsJsonEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: projectsJsonGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
interface ProjectsJsonEdge {
  node?: ProjectsJson | null; /* The item at the end of the edge */
  next?: ProjectsJson | null; /* The next edge in the connection */
  previous?: ProjectsJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface projectsJsonGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: projectsJsonGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
interface projectsJsonGroupConnectionEdge {
  node?: ProjectsJson | null; /* The item at the end of the edge */
  next?: ProjectsJson | null; /* The next edge in the connection */
  previous?: ProjectsJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface MarkdownRemarkConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: MarkdownRemarkEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: markdownRemarkGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
interface MarkdownRemarkEdge {
  node?: MarkdownRemark | null; /* The item at the end of the edge */
  next?: MarkdownRemark | null; /* The next edge in the connection */
  previous?: MarkdownRemark | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface markdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: markdownRemarkGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
interface markdownRemarkGroupConnectionEdge {
  node?: MarkdownRemark | null; /* The item at the end of the edge */
  next?: MarkdownRemark | null; /* The next edge in the connection */
  previous?: MarkdownRemark | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
interface SitePageConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: SitePageEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: sitePageGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
interface SitePageEdge {
  node?: SitePage | null; /* The item at the end of the edge */
  next?: SitePage | null; /* The next edge in the connection */
  previous?: SitePage | null; /* The previous edge in the connection */
}
/* Node of type SitePage */
interface SitePage extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  layout?: string | null; 
  jsonName?: string | null; 
  internalComponentName?: string | null; 
  path?: string | null; 
  component?: string | null; 
  componentChunkName?: string | null; 
  context?: context | null; 
  updatedAt?: number | null; 
  pluginCreator?: SitePlugin | null; 
  pluginCreatorId?: string | null; 
  componentPath?: string | null; 
  internal?: internal_21 | null; 
}

interface context {
  slug?: string | null; 
}

interface internal_21 {
  type?: string | null; 
  contentDigest?: string | null; 
  owner?: string | null; 
}
/* A connection to a list of items. */
interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: sitePageGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
interface sitePageGroupConnectionEdge {
  node?: SitePage | null; /* The item at the end of the edge */
  next?: SitePage | null; /* The next edge in the connection */
  previous?: SitePage | null; /* The previous edge in the connection */
}
/* Node of type Site */
interface Site extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  siteMetadata?: siteMetadata_2 | null; 
  port?: string | null; 
  host?: string | null; 
  pathPrefix?: string | null; 
  polyfill?: boolean | null; 
  buildTime?: string | null; 
  internal?: internal_22 | null; 
}

interface siteMetadata_2 {
  title?: string | null; 
  author?: string | null; 
  caption?: string | null; 
  email?: string | null; 
  site?: string | null; 
  linkedin?: string | null; 
  github?: string | null; 
  npm?: string | null; 
  packageJson?: packageJson_4 | null; 
}

interface packageJson_4 {
  name?: string | null; 
  version?: string | null; 
  description?: string | null; 
  keywords?: string[] | null; 
  scripts?: scripts_2 | null; 
  repository?: repository_2 | null; 
  author?: string | null; 
  license?: string | null; 
  main?: string | null; 
  private?: boolean | null; 
  bugs?: bugs_2 | null; 
  homepage?: string | null; 
  dependencies?: dependencies_4 | null; 
  devDependencies?: devDependencies_4 | null; 
}

interface scripts_2 {
  build?: string | null; 
  dev?: string | null; 
  graphql?: string | null; 
  lint?: string | null; 
  test?: string | null; 
  coverage?: string | null; 
}

interface repository_2 {
  type?: string | null; 
  url?: string | null; 
}

interface bugs_2 {
  url?: string | null; 
}

interface dependencies_4 {
  gatsby?: string | null; 
  gatsby_link?: string | null; 
  gatsby_plugin_favicon?: string | null; 
  gatsby_plugin_nprogress?: string | null; 
  gatsby_plugin_react_helmet?: string | null; 
  gatsby_plugin_remove_trailing_slashes?: string | null; 
  gatsby_plugin_typescript?: string | null; 
  gatsby_source_filesystem?: string | null; 
  gatsby_transformer_json?: string | null; 
  gatsby_transformer_remark?: string | null; 
  moment?: string | null; 
  react?: string | null; 
  react_dom?: string | null; 
  react_helmet?: string | null; 
  react_icons?: string | null; 
  typeface_roboto?: string | null; 
  typeface_roboto_mono?: string | null; 
}

interface devDependencies_4 {
  _types_jest?: string | null; 
  _types_node?: string | null; 
  _types_react?: string | null; 
  _types_react_dom?: string | null; 
  codecov?: string | null; 
  graphql_code_generator?: string | null; 
  html_pdf?: string | null; 
  jest?: string | null; 
  ts_jest?: string | null; 
  tslint?: string | null; 
  typescript?: string | null; 
}

interface internal_22 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}

interface sitePluginConnectionSort {
  fields: SitePluginConnectionSortByFieldsEnum[]; 
  order?: sitePluginConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
interface filterSitePlugin {
  resolve?: sitePluginConnectionResolveQueryString_2 | null; 
  id?: sitePluginConnectionIdQueryString_2 | null; 
  name?: sitePluginConnectionNameQueryString_2 | null; 
  version?: sitePluginConnectionVersionQueryString_2 | null; 
  pluginOptions?: sitePluginConnectionPluginOptionsInputObject_2 | null; 
  nodeAPIs?: sitePluginConnectionNodeApIsQueryList_2 | null; 
  pluginFilepath?: sitePluginConnectionPluginFilepathQueryString_2 | null; 
  packageJson?: sitePluginConnectionPackageJsonInputObject_2 | null; 
  internal?: sitePluginConnectionInternalInputObject_2 | null; 
}

interface sitePluginConnectionResolveQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPluginOptionsInputObject_2 {
  name?: sitePluginConnectionPluginOptionsNameQueryString_2 | null; 
  path?: sitePluginConnectionPluginOptionsPathQueryString_2 | null; 
  color?: sitePluginConnectionPluginOptionsColorQueryString_2 | null; 
  showSpinner?: sitePluginConnectionPluginOptionsShowSpinnerQueryBoolean_2 | null; 
  logo?: sitePluginConnectionPluginOptionsLogoQueryString_2 | null; 
  injectHTML?: sitePluginConnectionPluginOptionsInjectHtmlQueryBoolean_2 | null; 
  icons?: sitePluginConnectionPluginOptionsIconsInputObject_2 | null; 
}

interface sitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPluginOptionsColorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPluginOptionsShowSpinnerQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginConnectionPluginOptionsLogoQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPluginOptionsInjectHtmlQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginConnectionPluginOptionsIconsInputObject_2 {
  android?: sitePluginConnectionPluginOptionsIconsAndroidInputObject_2 | null; 
  appleIcon?: sitePluginConnectionPluginOptionsIconsAppleIconInputObject_2 | null; 
  appleStartup?: sitePluginConnectionPluginOptionsIconsAppleStartupInputObject_2 | null; 
  coast?: sitePluginConnectionPluginOptionsIconsCoastQueryBoolean_2 | null; 
  favicons?: sitePluginConnectionPluginOptionsIconsFaviconsQueryBoolean_2 | null; 
  firefox?: sitePluginConnectionPluginOptionsIconsFirefoxQueryBoolean_2 | null; 
  twitter?: sitePluginConnectionPluginOptionsIconsTwitterQueryBoolean_2 | null; 
  yandex?: sitePluginConnectionPluginOptionsIconsYandexQueryBoolean_2 | null; 
  windows?: sitePluginConnectionPluginOptionsIconsWindowsQueryBoolean_2 | null; 
}

interface sitePluginConnectionPluginOptionsIconsAndroidInputObject_2 {
  background?: sitePluginConnectionPluginOptionsIconsAndroidBackgroundQueryString_2 | null; 
}

interface sitePluginConnectionPluginOptionsIconsAndroidBackgroundQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPluginOptionsIconsAppleIconInputObject_2 {
  background?: sitePluginConnectionPluginOptionsIconsAppleIconBackgroundQueryString_2 | null; 
}

interface sitePluginConnectionPluginOptionsIconsAppleIconBackgroundQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPluginOptionsIconsAppleStartupInputObject_2 {
  background?: sitePluginConnectionPluginOptionsIconsAppleStartupBackgroundQueryString_2 | null; 
}

interface sitePluginConnectionPluginOptionsIconsAppleStartupBackgroundQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPluginOptionsIconsCoastQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginConnectionPluginOptionsIconsFaviconsQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginConnectionPluginOptionsIconsFirefoxQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginConnectionPluginOptionsIconsTwitterQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginConnectionPluginOptionsIconsYandexQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginConnectionPluginOptionsIconsWindowsQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPackageJsonInputObject_2 {
  name?: sitePluginConnectionPackageJsonNameQueryString_2 | null; 
  description?: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null; 
  version?: sitePluginConnectionPackageJsonVersionQueryString_2 | null; 
  main?: sitePluginConnectionPackageJsonMainQueryString_2 | null; 
  keywords?: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null; 
  author?: sitePluginConnectionPackageJsonAuthorQueryString_2 | null; 
  license?: sitePluginConnectionPackageJsonLicenseQueryString_2 | null; 
  dependencies?: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null; 
  devDependencies?: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null; 
  peerDependencies?: sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null; 
}

interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface sitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonDependenciesInputObject_2[] | null; 
}

interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null; 
  version?: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null; 
}

interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonDevDependenciesInputObject_2[] | null; 
}

interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null; 
  version?: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null; 
}

interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonPeerDependenciesInputObject_2[] | null; 
}

interface sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null; 
  version?: sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null; 
}

interface sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionInternalInputObject_2 {
  contentDigest?: sitePluginConnectionInternalContentDigestQueryString_2 | null; 
  type?: sitePluginConnectionInternalTypeQueryString_2 | null; 
  owner?: sitePluginConnectionInternalOwnerQueryString_2 | null; 
}

interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionSort {
  fields: DirectoryConnectionSortByFieldsEnum[]; 
  order?: directoryConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
interface filterDirectory {
  id?: directoryConnectionIdQueryString_2 | null; 
  internal?: directoryConnectionInternalInputObject_2 | null; 
  sourceInstanceName?: directoryConnectionSourceInstanceNameQueryString_2 | null; 
  absolutePath?: directoryConnectionAbsolutePathQueryString_2 | null; 
  relativePath?: directoryConnectionRelativePathQueryString_2 | null; 
  extension?: directoryConnectionExtensionQueryString_2 | null; 
  size?: directoryConnectionSizeQueryInteger_2 | null; 
  prettySize?: directoryConnectionPrettySizeQueryString_2 | null; 
  modifiedTime?: directoryConnectionModifiedTimeQueryString_2 | null; 
  accessTime?: directoryConnectionAccessTimeQueryString_2 | null; 
  changeTime?: directoryConnectionChangeTimeQueryString_2 | null; 
  birthTime?: directoryConnectionBirthTimeQueryString_2 | null; 
  root?: directoryConnectionRootQueryString_2 | null; 
  dir?: directoryConnectionDirQueryString_2 | null; 
  base?: directoryConnectionBaseQueryString_2 | null; 
  ext?: directoryConnectionExtQueryString_2 | null; 
  name?: directoryConnectionNameQueryString_2 | null; 
  relativeDirectory?: directoryConnectionRelativeDirectoryQueryString_2 | null; 
  dev?: directoryConnectionDevQueryInteger_2 | null; 
  mode?: directoryConnectionModeQueryInteger_2 | null; 
  nlink?: directoryConnectionNlinkQueryInteger_2 | null; 
  uid?: directoryConnectionUidQueryInteger_2 | null; 
  gid?: directoryConnectionGidQueryInteger_2 | null; 
  rdev?: directoryConnectionRdevQueryInteger_2 | null; 
  blksize?: directoryConnectionBlksizeQueryInteger_2 | null; 
  ino?: directoryConnectionInoQueryInteger_2 | null; 
  blocks?: directoryConnectionBlocksQueryInteger_2 | null; 
  atimeMs?: directoryConnectionAtimeMsQueryInteger_2 | null; 
  mtimeMs?: directoryConnectionMtimeMsQueryInteger_2 | null; 
  ctimeMs?: directoryConnectionCtimeMsQueryInteger_2 | null; 
  birthtimeMs?: directoryConnectionBirthtimeMsQueryInteger_2 | null; 
  atime?: directoryConnectionAtimeQueryString_2 | null; 
  mtime?: directoryConnectionMtimeQueryString_2 | null; 
  ctime?: directoryConnectionCtimeQueryString_2 | null; 
  birthtime?: directoryConnectionBirthtimeQueryString_2 | null; 
}

interface directoryConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionInternalInputObject_2 {
  contentDigest?: directoryConnectionInternalContentDigestQueryString_2 | null; 
  type?: directoryConnectionInternalTypeQueryString_2 | null; 
  owner?: directoryConnectionInternalOwnerQueryString_2 | null; 
}

interface directoryConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionRelativePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionExtensionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionSizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionPrettySizeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionModifiedTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionAccessTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionChangeTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionBirthTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionRootQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionDirQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionBaseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionExtQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionDevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionModeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionNlinkQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionUidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionGidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionRdevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionBlksizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionInoQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionBlocksQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionAtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionMtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionCtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionBirthtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryConnectionAtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionMtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionCtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryConnectionBirthtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionSort {
  fields: FileConnectionSortByFieldsEnum[]; 
  order?: fileConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
interface filterFile {
  id?: fileConnectionIdQueryString_2 | null; 
  internal?: fileConnectionInternalInputObject_2 | null; 
  sourceInstanceName?: fileConnectionSourceInstanceNameQueryString_2 | null; 
  absolutePath?: fileConnectionAbsolutePathQueryString_2 | null; 
  relativePath?: fileConnectionRelativePathQueryString_2 | null; 
  extension?: fileConnectionExtensionQueryString_2 | null; 
  size?: fileConnectionSizeQueryInteger_2 | null; 
  prettySize?: fileConnectionPrettySizeQueryString_2 | null; 
  modifiedTime?: fileConnectionModifiedTimeQueryString_2 | null; 
  accessTime?: fileConnectionAccessTimeQueryString_2 | null; 
  changeTime?: fileConnectionChangeTimeQueryString_2 | null; 
  birthTime?: fileConnectionBirthTimeQueryString_2 | null; 
  root?: fileConnectionRootQueryString_2 | null; 
  dir?: fileConnectionDirQueryString_2 | null; 
  base?: fileConnectionBaseQueryString_2 | null; 
  ext?: fileConnectionExtQueryString_2 | null; 
  name?: fileConnectionNameQueryString_2 | null; 
  relativeDirectory?: fileConnectionRelativeDirectoryQueryString_2 | null; 
  dev?: fileConnectionDevQueryInteger_2 | null; 
  mode?: fileConnectionModeQueryInteger_2 | null; 
  nlink?: fileConnectionNlinkQueryInteger_2 | null; 
  uid?: fileConnectionUidQueryInteger_2 | null; 
  gid?: fileConnectionGidQueryInteger_2 | null; 
  rdev?: fileConnectionRdevQueryInteger_2 | null; 
  blksize?: fileConnectionBlksizeQueryInteger_2 | null; 
  ino?: fileConnectionInoQueryInteger_2 | null; 
  blocks?: fileConnectionBlocksQueryInteger_2 | null; 
  atimeMs?: fileConnectionAtimeMsQueryInteger_2 | null; 
  mtimeMs?: fileConnectionMtimeMsQueryInteger_2 | null; 
  ctimeMs?: fileConnectionCtimeMsQueryInteger_2 | null; 
  birthtimeMs?: fileConnectionBirthtimeMsQueryInteger_2 | null; 
  atime?: fileConnectionAtimeQueryString_2 | null; 
  mtime?: fileConnectionMtimeQueryString_2 | null; 
  ctime?: fileConnectionCtimeQueryString_2 | null; 
  birthtime?: fileConnectionBirthtimeQueryString_2 | null; 
}

interface fileConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionInternalInputObject_2 {
  contentDigest?: fileConnectionInternalContentDigestQueryString_2 | null; 
  mediaType?: fileConnectionInternalMediaTypeQueryString_2 | null; 
  type?: fileConnectionInternalTypeQueryString_2 | null; 
  owner?: fileConnectionInternalOwnerQueryString_2 | null; 
}

interface fileConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionRelativePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionExtensionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionSizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionPrettySizeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionModifiedTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionAccessTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionChangeTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionBirthTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionRootQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionDirQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionBaseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionExtQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionDevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionModeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionNlinkQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionUidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionGidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionRdevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionBlksizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionInoQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionBlocksQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionAtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionMtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionCtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionBirthtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileConnectionAtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionMtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionCtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileConnectionBirthtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonConnectionSort {
  fields: PortfolioJsonConnectionSortByFieldsEnum[]; 
  order?: portfolioJsonConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
interface filterPortfolioJson {
  image?: portfolioJsonConnectionImageQueryString_2 | null; 
  school?: portfolioJsonConnectionSchoolQueryString_2 | null; 
  location?: portfolioJsonConnectionLocationQueryString_2 | null; 
  degree?: portfolioJsonConnectionDegreeQueryString_2 | null; 
  date?: portfolioJsonConnectionDateQueryString_2 | null; 
  id?: portfolioJsonConnectionIdQueryString_2 | null; 
  internal?: portfolioJsonConnectionInternalInputObject_2 | null; 
}

interface portfolioJsonConnectionImageQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonConnectionSchoolQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonConnectionLocationQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonConnectionDegreeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonConnectionDateQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonConnectionInternalInputObject_2 {
  contentDigest?: portfolioJsonConnectionInternalContentDigestQueryString_2 | null; 
  type?: portfolioJsonConnectionInternalTypeQueryString_2 | null; 
  owner?: portfolioJsonConnectionInternalOwnerQueryString_2 | null; 
}

interface portfolioJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface skillsJsonConnectionSort {
  fields: SkillsJsonConnectionSortByFieldsEnum[]; 
  order?: skillsJsonConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
interface filterSkillsJson {
  time?: skillsJsonConnectionTimeQueryString_2 | null; 
  tool?: skillsJsonConnectionToolQueryString_2 | null; 
  id?: skillsJsonConnectionIdQueryString_2 | null; 
  internal?: skillsJsonConnectionInternalInputObject_2 | null; 
}

interface skillsJsonConnectionTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface skillsJsonConnectionToolQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface skillsJsonConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface skillsJsonConnectionInternalInputObject_2 {
  contentDigest?: skillsJsonConnectionInternalContentDigestQueryString_2 | null; 
  type?: skillsJsonConnectionInternalTypeQueryString_2 | null; 
  owner?: skillsJsonConnectionInternalOwnerQueryString_2 | null; 
}

interface skillsJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface skillsJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface skillsJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonConnectionSort {
  fields: CertificationJsonConnectionSortByFieldsEnum[]; 
  order?: certificationJsonConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
interface filterCertificationJson {
  title?: certificationJsonConnectionTitleQueryString_2 | null; 
  image?: certificationJsonConnectionImageQueryString_2 | null; 
  link?: certificationJsonConnectionLinkQueryString_2 | null; 
  start?: certificationJsonConnectionStartQueryString_2 | null; 
  end?: certificationJsonConnectionEndQueryString_2 | null; 
  ignore?: certificationJsonConnectionIgnoreQueryBoolean_2 | null; 
  id?: certificationJsonConnectionIdQueryString_2 | null; 
  internal?: certificationJsonConnectionInternalInputObject_2 | null; 
}

interface certificationJsonConnectionTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonConnectionImageQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonConnectionLinkQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonConnectionStartQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonConnectionEndQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonConnectionIgnoreQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface certificationJsonConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonConnectionInternalInputObject_2 {
  contentDigest?: certificationJsonConnectionInternalContentDigestQueryString_2 | null; 
  type?: certificationJsonConnectionInternalTypeQueryString_2 | null; 
  owner?: certificationJsonConnectionInternalOwnerQueryString_2 | null; 
}

interface certificationJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionSort {
  fields: WorkJsonConnectionSortByFieldsEnum[]; 
  order?: workJsonConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
interface filterWorkJson {
  employer?: workJsonConnectionEmployerQueryString_2 | null; 
  title?: workJsonConnectionTitleQueryString_2 | null; 
  image?: workJsonConnectionImageQueryString_2 | null; 
  link?: workJsonConnectionLinkQueryString_2 | null; 
  description?: workJsonConnectionDescriptionQueryString_2 | null; 
  longDescription?: workJsonConnectionLongDescriptionQueryString_2 | null; 
  start?: workJsonConnectionStartQueryString_2 | null; 
  end?: workJsonConnectionEndQueryString_2 | null; 
  languages?: workJsonConnectionLanguagesQueryList_2 | null; 
  platforms?: workJsonConnectionPlatformsQueryList_2 | null; 
  ignore?: workJsonConnectionIgnoreQueryBoolean_2 | null; 
  id?: workJsonConnectionIdQueryString_2 | null; 
  internal?: workJsonConnectionInternalInputObject_2 | null; 
  location?: workJsonConnectionLocationQueryString_2 | null; 
  resume?: workJsonConnectionResumeQueryBoolean_2 | null; 
}

interface workJsonConnectionEmployerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionImageQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionLinkQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionLongDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionStartQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionEndQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionLanguagesQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface workJsonConnectionPlatformsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface workJsonConnectionIgnoreQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface workJsonConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionInternalInputObject_2 {
  contentDigest?: workJsonConnectionInternalContentDigestQueryString_2 | null; 
  type?: workJsonConnectionInternalTypeQueryString_2 | null; 
  owner?: workJsonConnectionInternalOwnerQueryString_2 | null; 
}

interface workJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionLocationQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonConnectionResumeQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface projectsJsonConnectionSort {
  fields: ProjectsJsonConnectionSortByFieldsEnum[]; 
  order?: projectsJsonConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
interface filterProjectsJson {
  title?: projectsJsonConnectionTitleQueryString_2 | null; 
  image?: projectsJsonConnectionImageQueryString_2 | null; 
  link?: projectsJsonConnectionLinkQueryString_2 | null; 
  type?: projectsJsonConnectionTypeQueryString_2 | null; 
  start?: projectsJsonConnectionStartQueryString_2 | null; 
  end?: projectsJsonConnectionEndQueryString_2 | null; 
  languages?: projectsJsonConnectionLanguagesQueryList_2 | null; 
  platforms?: projectsJsonConnectionPlatformsQueryList_2 | null; 
  roles?: projectsJsonConnectionRolesQueryList_2 | null; 
  ignore?: projectsJsonConnectionIgnoreQueryBoolean_2 | null; 
  id?: projectsJsonConnectionIdQueryString_2 | null; 
  internal?: projectsJsonConnectionInternalInputObject_2 | null; 
  longDescription?: projectsJsonConnectionLongDescriptionQueryString_2 | null; 
  resume?: projectsJsonConnectionResumeQueryBoolean_2 | null; 
}

interface projectsJsonConnectionTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonConnectionImageQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonConnectionLinkQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonConnectionTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonConnectionStartQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonConnectionEndQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonConnectionLanguagesQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface projectsJsonConnectionPlatformsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface projectsJsonConnectionRolesQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface projectsJsonConnectionIgnoreQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface projectsJsonConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonConnectionInternalInputObject_2 {
  contentDigest?: projectsJsonConnectionInternalContentDigestQueryString_2 | null; 
  type?: projectsJsonConnectionInternalTypeQueryString_2 | null; 
  owner?: projectsJsonConnectionInternalOwnerQueryString_2 | null; 
}

interface projectsJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonConnectionLongDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonConnectionResumeQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface markdownRemarkConnectionSort {
  fields: MarkdownRemarkConnectionSortByFieldsEnum[]; 
  order?: markdownRemarkConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
interface filterMarkdownRemark {
  id?: markdownRemarkConnectionIdQueryString_2 | null; 
  internal?: markdownRemarkConnectionInternalInputObject_2 | null; 
  frontmatter?: markdownRemarkConnectionFrontmatterInputObject_2 | null; 
  fileAbsolutePath?: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null; 
  fields?: markdownRemarkConnectionFieldsInputObject_2 | null; 
  html?: htmlQueryString_4 | null; 
  excerpt?: excerptQueryString_4 | null; 
  headings?: headingsQueryList_4 | null; 
  timeToRead?: timeToReadQueryInt_4 | null; 
  tableOfContents?: tableOfContentsQueryString_4 | null; 
  wordCount?: wordCountTypeName_4 | null; 
}

interface markdownRemarkConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkConnectionInternalInputObject_2 {
  content?: markdownRemarkConnectionInternalContentQueryString_2 | null; 
  contentDigest?: markdownRemarkConnectionInternalContentDigestQueryString_2 | null; 
  type?: markdownRemarkConnectionInternalTypeQueryString_2 | null; 
  owner?: markdownRemarkConnectionInternalOwnerQueryString_2 | null; 
  fieldOwners?: markdownRemarkConnectionInternalFieldOwnersInputObject_2 | null; 
}

interface markdownRemarkConnectionInternalContentQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  slug?: markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 | null; 
}

interface markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkConnectionFrontmatterInputObject_2 {
  title?: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null; 
  date?: markdownRemarkConnectionFrontmatterDateQueryString_2 | null; 
  _PARENT?: markdownRemarkConnectionFrontmatterParentQueryString_3 | null; 
  parent?: markdownRemarkConnectionFrontmatterParentQueryString_4 | null; 
}

interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkConnectionFrontmatterDateQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkConnectionFrontmatterParentQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkConnectionFrontmatterParentQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkConnectionFieldsInputObject_2 {
  slug?: markdownRemarkConnectionFieldsSlugQueryString_2 | null; 
}

interface markdownRemarkConnectionFieldsSlugQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface htmlQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface excerptQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface headingsQueryList_4 {
  value?: headingsListElemValueQueryString_4 | null; 
  depth?: headingsListElemDepthQueryInt_4 | null; 
  in?: markdownHeadingInputObject_4[] | null; 
}

interface headingsListElemValueQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface headingsListElemDepthQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

interface markdownHeadingInputObject_4 {
  value?: string | null; 
  depth?: number | null; 
}

interface timeToReadQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

interface tableOfContentsQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface wordCountTypeName_4 {
  paragraphs?: wordCountParagraphsQueryInt_4 | null; 
  sentences?: wordCountSentencesQueryInt_4 | null; 
  words?: wordCountWordsQueryInt_4 | null; 
}

interface wordCountParagraphsQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

interface wordCountSentencesQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

interface wordCountWordsQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

interface sitePageConnectionSort {
  fields: SitePageConnectionSortByFieldsEnum[]; 
  order?: sitePageConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
interface filterSitePage {
  layout?: sitePageConnectionLayoutQueryString | null; 
  jsonName?: sitePageConnectionJsonNameQueryString | null; 
  internalComponentName?: sitePageConnectionInternalComponentNameQueryString | null; 
  path?: sitePageConnectionPathQueryString_2 | null; 
  component?: sitePageConnectionComponentQueryString | null; 
  componentChunkName?: sitePageConnectionComponentChunkNameQueryString | null; 
  context?: sitePageConnectionContextInputObject | null; 
  updatedAt?: sitePageConnectionUpdatedAtQueryInteger | null; 
  pluginCreatorId?: sitePageConnectionPluginCreatorIdQueryString | null; 
  componentPath?: sitePageConnectionComponentPathQueryString | null; 
  id?: sitePageConnectionIdQueryString_2 | null; 
  internal?: sitePageConnectionInternalInputObject_2 | null; 
}

interface sitePageConnectionLayoutQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageConnectionJsonNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageConnectionInternalComponentNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageConnectionPathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageConnectionComponentQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageConnectionComponentChunkNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageConnectionContextInputObject {
  slug?: sitePageConnectionContextSlugQueryString | null; 
}

interface sitePageConnectionContextSlugQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageConnectionUpdatedAtQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

interface sitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageConnectionComponentPathQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageConnectionInternalInputObject_2 {
  type?: sitePageConnectionInternalTypeQueryString_2 | null; 
  contentDigest?: sitePageConnectionInternalContentDigestQueryString_2 | null; 
  owner?: sitePageConnectionInternalOwnerQueryString_2 | null; 
}

interface sitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginResolveQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPluginOptionsInputObject_2 {
  name?: sitePluginPluginOptionsNameQueryString_2 | null; 
  path?: sitePluginPluginOptionsPathQueryString_2 | null; 
  color?: sitePluginPluginOptionsColorQueryString_2 | null; 
  showSpinner?: sitePluginPluginOptionsShowSpinnerQueryBoolean_2 | null; 
  logo?: sitePluginPluginOptionsLogoQueryString_2 | null; 
  injectHTML?: sitePluginPluginOptionsInjectHtmlQueryBoolean_2 | null; 
  icons?: sitePluginPluginOptionsIconsInputObject_2 | null; 
}

interface sitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPluginOptionsColorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPluginOptionsShowSpinnerQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginPluginOptionsLogoQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPluginOptionsInjectHtmlQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginPluginOptionsIconsInputObject_2 {
  android?: sitePluginPluginOptionsIconsAndroidInputObject_2 | null; 
  appleIcon?: sitePluginPluginOptionsIconsAppleIconInputObject_2 | null; 
  appleStartup?: sitePluginPluginOptionsIconsAppleStartupInputObject_2 | null; 
  coast?: sitePluginPluginOptionsIconsCoastQueryBoolean_2 | null; 
  favicons?: sitePluginPluginOptionsIconsFaviconsQueryBoolean_2 | null; 
  firefox?: sitePluginPluginOptionsIconsFirefoxQueryBoolean_2 | null; 
  twitter?: sitePluginPluginOptionsIconsTwitterQueryBoolean_2 | null; 
  yandex?: sitePluginPluginOptionsIconsYandexQueryBoolean_2 | null; 
  windows?: sitePluginPluginOptionsIconsWindowsQueryBoolean_2 | null; 
}

interface sitePluginPluginOptionsIconsAndroidInputObject_2 {
  background?: sitePluginPluginOptionsIconsAndroidBackgroundQueryString_2 | null; 
}

interface sitePluginPluginOptionsIconsAndroidBackgroundQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPluginOptionsIconsAppleIconInputObject_2 {
  background?: sitePluginPluginOptionsIconsAppleIconBackgroundQueryString_2 | null; 
}

interface sitePluginPluginOptionsIconsAppleIconBackgroundQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPluginOptionsIconsAppleStartupInputObject_2 {
  background?: sitePluginPluginOptionsIconsAppleStartupBackgroundQueryString_2 | null; 
}

interface sitePluginPluginOptionsIconsAppleStartupBackgroundQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPluginOptionsIconsCoastQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginPluginOptionsIconsFaviconsQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginPluginOptionsIconsFirefoxQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginPluginOptionsIconsTwitterQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginPluginOptionsIconsYandexQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginPluginOptionsIconsWindowsQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface sitePluginNodeApIsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface sitePluginPluginFilepathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPackageJsonInputObject_2 {
  name?: sitePluginPackageJsonNameQueryString_2 | null; 
  description?: sitePluginPackageJsonDescriptionQueryString_2 | null; 
  version?: sitePluginPackageJsonVersionQueryString_2 | null; 
  main?: sitePluginPackageJsonMainQueryString_2 | null; 
  keywords?: sitePluginPackageJsonKeywordsQueryList_2 | null; 
  author?: sitePluginPackageJsonAuthorQueryString_2 | null; 
  license?: sitePluginPackageJsonLicenseQueryString_2 | null; 
  dependencies?: sitePluginPackageJsonDependenciesQueryList_2 | null; 
  devDependencies?: sitePluginPackageJsonDevDependenciesQueryList_2 | null; 
  peerDependencies?: sitePluginPackageJsonPeerDependenciesQueryList_2 | null; 
}

interface sitePluginPackageJsonNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPackageJsonMainQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface sitePluginPackageJsonAuthorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPackageJsonDependenciesQueryList_2 {
  in?: sitePluginPackageJsonDependenciesInputObject_2[] | null; 
}

interface sitePluginPackageJsonDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDependenciesNameQueryString_2 | null; 
  version?: sitePluginPackageJsonDependenciesVersionQueryString_2 | null; 
}

interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  in?: sitePluginPackageJsonDevDependenciesInputObject_2[] | null; 
}

interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null; 
  version?: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null; 
}

interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPackageJsonPeerDependenciesQueryList_2 {
  in?: sitePluginPackageJsonPeerDependenciesInputObject_2[] | null; 
}

interface sitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginPackageJsonPeerDependenciesNameQueryString_2 | null; 
  version?: sitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null; 
}

interface sitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginInternalInputObject_2 {
  contentDigest?: sitePluginInternalContentDigestQueryString_2 | null; 
  type?: sitePluginInternalTypeQueryString_2 | null; 
  owner?: sitePluginInternalOwnerQueryString_2 | null; 
}

interface sitePluginInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePluginInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataInputObject_2 {
  title?: siteSiteMetadataTitleQueryString_2 | null; 
  author?: siteSiteMetadataAuthorQueryString_2 | null; 
  caption?: siteSiteMetadataCaptionQueryString_2 | null; 
  email?: siteSiteMetadataEmailQueryString_2 | null; 
  site?: siteSiteMetadataSiteQueryString_2 | null; 
  linkedin?: siteSiteMetadataLinkedinQueryString_2 | null; 
  github?: siteSiteMetadataGithubQueryString_2 | null; 
  npm?: siteSiteMetadataNpmQueryString_2 | null; 
  packageJson?: siteSiteMetadataPackageJsonInputObject_2 | null; 
}

interface siteSiteMetadataTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataAuthorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataCaptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataEmailQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataSiteQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataLinkedinQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataGithubQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataNpmQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonInputObject_2 {
  name?: siteSiteMetadataPackageJsonNameQueryString_2 | null; 
  version?: siteSiteMetadataPackageJsonVersionQueryString_2 | null; 
  description?: siteSiteMetadataPackageJsonDescriptionQueryString_2 | null; 
  keywords?: siteSiteMetadataPackageJsonKeywordsQueryList_2 | null; 
  scripts?: siteSiteMetadataPackageJsonScriptsInputObject_2 | null; 
  repository?: siteSiteMetadataPackageJsonRepositoryInputObject_2 | null; 
  author?: siteSiteMetadataPackageJsonAuthorQueryString_2 | null; 
  license?: siteSiteMetadataPackageJsonLicenseQueryString_2 | null; 
  main?: siteSiteMetadataPackageJsonMainQueryString_2 | null; 
  private?: siteSiteMetadataPackageJsonPrivateQueryBoolean_2 | null; 
  bugs?: siteSiteMetadataPackageJsonBugsInputObject_2 | null; 
  homepage?: siteSiteMetadataPackageJsonHomepageQueryString_2 | null; 
  dependencies?: siteSiteMetadataPackageJsonDependenciesInputObject_2 | null; 
  devDependencies?: siteSiteMetadataPackageJsonDevDependenciesInputObject_2 | null; 
}

interface siteSiteMetadataPackageJsonNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonKeywordsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface siteSiteMetadataPackageJsonScriptsInputObject_2 {
  build?: siteSiteMetadataPackageJsonScriptsBuildQueryString_2 | null; 
  dev?: siteSiteMetadataPackageJsonScriptsDevQueryString_2 | null; 
  graphql?: siteSiteMetadataPackageJsonScriptsGraphqlQueryString_2 | null; 
  lint?: siteSiteMetadataPackageJsonScriptsLintQueryString_2 | null; 
  test?: siteSiteMetadataPackageJsonScriptsTestQueryString_2 | null; 
  coverage?: siteSiteMetadataPackageJsonScriptsCoverageQueryString_2 | null; 
}

interface siteSiteMetadataPackageJsonScriptsBuildQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonScriptsDevQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonScriptsGraphqlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonScriptsLintQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonScriptsTestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonScriptsCoverageQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonRepositoryInputObject_2 {
  type?: siteSiteMetadataPackageJsonRepositoryTypeQueryString_2 | null; 
  url?: siteSiteMetadataPackageJsonRepositoryUrlQueryString_2 | null; 
}

interface siteSiteMetadataPackageJsonRepositoryTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonRepositoryUrlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonAuthorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonLicenseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonMainQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonPrivateQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface siteSiteMetadataPackageJsonBugsInputObject_2 {
  url?: siteSiteMetadataPackageJsonBugsUrlQueryString_2 | null; 
}

interface siteSiteMetadataPackageJsonBugsUrlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonHomepageQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesInputObject_2 {
  gatsby?: siteSiteMetadataPackageJsonDependenciesGatsbyQueryString_2 | null; 
  gatsby_link?: siteSiteMetadataPackageJsonDependenciesGatsbyLinkQueryString_2 | null; 
  gatsby_plugin_favicon?: siteSiteMetadataPackageJsonDependenciesGatsbyPluginFaviconQueryString_2 | null; 
  gatsby_plugin_nprogress?: siteSiteMetadataPackageJsonDependenciesGatsbyPluginNprogressQueryString_2 | null; 
  gatsby_plugin_react_helmet?: siteSiteMetadataPackageJsonDependenciesGatsbyPluginReactHelmetQueryString_2 | null; 
  gatsby_plugin_remove_trailing_slashes?: siteSiteMetadataPackageJsonDependenciesGatsbyPluginRemoveTrailingSlashesQueryString_2 | null; 
  gatsby_plugin_typescript?: siteSiteMetadataPackageJsonDependenciesGatsbyPluginTypescriptQueryString_2 | null; 
  gatsby_source_filesystem?: siteSiteMetadataPackageJsonDependenciesGatsbySourceFilesystemQueryString_2 | null; 
  gatsby_transformer_json?: siteSiteMetadataPackageJsonDependenciesGatsbyTransformerJsonQueryString_2 | null; 
  gatsby_transformer_remark?: siteSiteMetadataPackageJsonDependenciesGatsbyTransformerRemarkQueryString_2 | null; 
  moment?: siteSiteMetadataPackageJsonDependenciesMomentQueryString_2 | null; 
  react?: siteSiteMetadataPackageJsonDependenciesReactQueryString_2 | null; 
  react_dom?: siteSiteMetadataPackageJsonDependenciesReactDomQueryString_2 | null; 
  react_helmet?: siteSiteMetadataPackageJsonDependenciesReactHelmetQueryString_2 | null; 
  react_icons?: siteSiteMetadataPackageJsonDependenciesReactIconsQueryString_2 | null; 
  typeface_roboto?: siteSiteMetadataPackageJsonDependenciesTypefaceRobotoQueryString_2 | null; 
  typeface_roboto_mono?: siteSiteMetadataPackageJsonDependenciesTypefaceRobotoMonoQueryString_2 | null; 
}

interface siteSiteMetadataPackageJsonDependenciesGatsbyQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesGatsbyLinkQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesGatsbyPluginFaviconQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesGatsbyPluginNprogressQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesGatsbyPluginReactHelmetQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesGatsbyPluginRemoveTrailingSlashesQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesGatsbyPluginTypescriptQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesGatsbySourceFilesystemQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesGatsbyTransformerJsonQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesGatsbyTransformerRemarkQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesMomentQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesReactQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesReactDomQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesReactHelmetQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesReactIconsQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesTypefaceRobotoQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDependenciesTypefaceRobotoMonoQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDevDependenciesInputObject_2 {
  _types_jest?: siteSiteMetadataPackageJsonDevDependenciesTypesJestQueryString_2 | null; 
  _types_node?: siteSiteMetadataPackageJsonDevDependenciesTypesNodeQueryString_2 | null; 
  _types_react?: siteSiteMetadataPackageJsonDevDependenciesTypesReactQueryString_2 | null; 
  _types_react_dom?: siteSiteMetadataPackageJsonDevDependenciesTypesReactDomQueryString_2 | null; 
  codecov?: siteSiteMetadataPackageJsonDevDependenciesCodecovQueryString_2 | null; 
  graphql_code_generator?: siteSiteMetadataPackageJsonDevDependenciesGraphqlCodeGeneratorQueryString_2 | null; 
  html_pdf?: siteSiteMetadataPackageJsonDevDependenciesHtmlPdfQueryString_2 | null; 
  jest?: siteSiteMetadataPackageJsonDevDependenciesJestQueryString_2 | null; 
  ts_jest?: siteSiteMetadataPackageJsonDevDependenciesTsJestQueryString_2 | null; 
  tslint?: siteSiteMetadataPackageJsonDevDependenciesTslintQueryString_2 | null; 
  typescript?: siteSiteMetadataPackageJsonDevDependenciesTypescriptQueryString_2 | null; 
}

interface siteSiteMetadataPackageJsonDevDependenciesTypesJestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDevDependenciesTypesNodeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDevDependenciesTypesReactQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDevDependenciesTypesReactDomQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDevDependenciesCodecovQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDevDependenciesGraphqlCodeGeneratorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDevDependenciesHtmlPdfQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDevDependenciesJestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDevDependenciesTsJestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDevDependenciesTslintQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteSiteMetadataPackageJsonDevDependenciesTypescriptQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePortQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteHostQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePathPrefixQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePolyfillQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface siteBuildTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteInternalInputObject_2 {
  contentDigest?: siteInternalContentDigestQueryString_2 | null; 
  type?: siteInternalTypeQueryString_2 | null; 
  owner?: siteInternalOwnerQueryString_2 | null; 
}

interface siteInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface siteInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryInternalInputObject_2 {
  contentDigest?: directoryInternalContentDigestQueryString_2 | null; 
  type?: directoryInternalTypeQueryString_2 | null; 
  owner?: directoryInternalOwnerQueryString_2 | null; 
}

interface directoryInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directorySourceInstanceNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryRelativePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryExtensionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directorySizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryPrettySizeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryModifiedTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryAccessTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryChangeTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryBirthTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryRootQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryDirQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryBaseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryExtQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryRelativeDirectoryQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryDevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryModeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryNlinkQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryUidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryGidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryRdevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryBlksizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryInoQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryBlocksQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryAtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryMtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryCtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryBirthtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface directoryAtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryMtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryCtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface directoryBirthtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileInternalInputObject_2 {
  contentDigest?: fileInternalContentDigestQueryString_2 | null; 
  mediaType?: fileInternalMediaTypeQueryString_2 | null; 
  type?: fileInternalTypeQueryString_2 | null; 
  owner?: fileInternalOwnerQueryString_2 | null; 
}

interface fileInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileInternalMediaTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileSourceInstanceNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileRelativePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileExtensionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileSizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface filePrettySizeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileModifiedTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileAccessTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileChangeTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileBirthTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileRootQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileDirQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileBaseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileExtQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileRelativeDirectoryQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileDevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileModeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileNlinkQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileUidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileGidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileRdevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileBlksizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileInoQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileBlocksQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileAtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileMtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileCtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileBirthtimeMsQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

interface fileAtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileMtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileCtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface fileBirthtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonImageQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonSchoolQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonLocationQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonDegreeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonDateQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonInternalInputObject_2 {
  contentDigest?: portfolioJsonInternalContentDigestQueryString_2 | null; 
  type?: portfolioJsonInternalTypeQueryString_2 | null; 
  owner?: portfolioJsonInternalOwnerQueryString_2 | null; 
}

interface portfolioJsonInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface portfolioJsonInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface skillsJsonTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface skillsJsonToolQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface skillsJsonIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface skillsJsonInternalInputObject_2 {
  contentDigest?: skillsJsonInternalContentDigestQueryString_2 | null; 
  type?: skillsJsonInternalTypeQueryString_2 | null; 
  owner?: skillsJsonInternalOwnerQueryString_2 | null; 
}

interface skillsJsonInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface skillsJsonInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface skillsJsonInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonImageQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonLinkQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonStartQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonEndQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonIgnoreQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface certificationJsonIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonInternalInputObject_2 {
  contentDigest?: certificationJsonInternalContentDigestQueryString_2 | null; 
  type?: certificationJsonInternalTypeQueryString_2 | null; 
  owner?: certificationJsonInternalOwnerQueryString_2 | null; 
}

interface certificationJsonInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface certificationJsonInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonEmployerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonImageQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonLinkQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonLongDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonStartQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonEndQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonLanguagesQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface workJsonPlatformsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface workJsonIgnoreQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface workJsonIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonInternalInputObject_2 {
  contentDigest?: workJsonInternalContentDigestQueryString_2 | null; 
  type?: workJsonInternalTypeQueryString_2 | null; 
  owner?: workJsonInternalOwnerQueryString_2 | null; 
}

interface workJsonInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonLocationQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface workJsonResumeQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface projectsJsonTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonImageQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonLinkQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonStartQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonEndQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonLanguagesQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface projectsJsonPlatformsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface projectsJsonRolesQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

interface projectsJsonIgnoreQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface projectsJsonIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonInternalInputObject_2 {
  contentDigest?: projectsJsonInternalContentDigestQueryString_2 | null; 
  type?: projectsJsonInternalTypeQueryString_2 | null; 
  owner?: projectsJsonInternalOwnerQueryString_2 | null; 
}

interface projectsJsonInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonLongDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface projectsJsonResumeQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

interface markdownRemarkIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkInternalInputObject_2 {
  content?: markdownRemarkInternalContentQueryString_2 | null; 
  contentDigest?: markdownRemarkInternalContentDigestQueryString_2 | null; 
  type?: markdownRemarkInternalTypeQueryString_2 | null; 
  owner?: markdownRemarkInternalOwnerQueryString_2 | null; 
  fieldOwners?: markdownRemarkInternalFieldOwnersInputObject_2 | null; 
}

interface markdownRemarkInternalContentQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkInternalFieldOwnersInputObject_2 {
  slug?: markdownRemarkInternalFieldOwnersSlugQueryString_2 | null; 
}

interface markdownRemarkInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkFrontmatterInputObject_2 {
  title?: markdownRemarkFrontmatterTitleQueryString_2 | null; 
  date?: markdownRemarkFrontmatterDateQueryString_2 | null; 
  _PARENT?: markdownRemarkFrontmatterParentQueryString_3 | null; 
  parent?: markdownRemarkFrontmatterParentQueryString_4 | null; 
}

interface markdownRemarkFrontmatterTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkFrontmatterDateQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkFrontmatterParentQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkFrontmatterParentQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkFileAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface markdownRemarkFieldsInputObject_2 {
  slug?: markdownRemarkFieldsSlugQueryString_2 | null; 
}

interface markdownRemarkFieldsSlugQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface htmlQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface excerptQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface headingsQueryList_3 {
  value?: headingsListElemValueQueryString_3 | null; 
  depth?: headingsListElemDepthQueryInt_3 | null; 
  in?: markdownHeadingInputObject_3[] | null; 
}

interface headingsListElemValueQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface headingsListElemDepthQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

interface markdownHeadingInputObject_3 {
  value?: string | null; 
  depth?: number | null; 
}

interface timeToReadQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

interface tableOfContentsQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface wordCountTypeName_3 {
  paragraphs?: wordCountParagraphsQueryInt_3 | null; 
  sentences?: wordCountSentencesQueryInt_3 | null; 
  words?: wordCountWordsQueryInt_3 | null; 
}

interface wordCountParagraphsQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

interface wordCountSentencesQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

interface wordCountWordsQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

interface sitePageLayoutQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageJsonNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageInternalComponentNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePagePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageComponentQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageComponentChunkNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageContextInputObject {
  slug?: sitePageContextSlugQueryString | null; 
}

interface sitePageContextSlugQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageUpdatedAtQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

interface sitePagePluginCreatorIdQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageComponentPathQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageInternalInputObject_2 {
  type?: sitePageInternalTypeQueryString_2 | null; 
  contentDigest?: sitePageInternalContentDigestQueryString_2 | null; 
  owner?: sitePageInternalOwnerQueryString_2 | null; 
}

interface sitePageInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

interface sitePageInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}
interface AllSitePluginRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: sitePluginConnectionSort | null; 
  filter?: filterSitePlugin | null; 
}
interface AllDirectoryRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: directoryConnectionSort | null; 
  filter?: filterDirectory | null; 
}
interface AllFileRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: fileConnectionSort | null; 
  filter?: filterFile | null; 
}
interface AllPortfolioJsonRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: portfolioJsonConnectionSort | null; 
  filter?: filterPortfolioJson | null; 
}
interface AllSkillsJsonRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: skillsJsonConnectionSort | null; 
  filter?: filterSkillsJson | null; 
}
interface AllCertificationJsonRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: certificationJsonConnectionSort | null; 
  filter?: filterCertificationJson | null; 
}
interface AllWorkJsonRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: workJsonConnectionSort | null; 
  filter?: filterWorkJson | null; 
}
interface AllProjectsJsonRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: projectsJsonConnectionSort | null; 
  filter?: filterProjectsJson | null; 
}
interface AllMarkdownRemarkRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: markdownRemarkConnectionSort | null; 
  filter?: filterMarkdownRemark | null; 
}
interface AllSitePageRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: sitePageConnectionSort | null; 
  filter?: filterSitePage | null; 
}
interface SitePluginRootQueryTypeArgs {
  resolve?: sitePluginResolveQueryString_2 | null; 
  id?: sitePluginIdQueryString_2 | null; 
  name?: sitePluginNameQueryString_2 | null; 
  version?: sitePluginVersionQueryString_2 | null; 
  pluginOptions?: sitePluginPluginOptionsInputObject_2 | null; 
  nodeAPIs?: sitePluginNodeApIsQueryList_2 | null; 
  pluginFilepath?: sitePluginPluginFilepathQueryString_2 | null; 
  packageJson?: sitePluginPackageJsonInputObject_2 | null; 
  internal?: sitePluginInternalInputObject_2 | null; 
}
interface SiteRootQueryTypeArgs {
  siteMetadata?: siteSiteMetadataInputObject_2 | null; 
  port?: sitePortQueryString_2 | null; 
  host?: siteHostQueryString_2 | null; 
  pathPrefix?: sitePathPrefixQueryString_2 | null; 
  polyfill?: sitePolyfillQueryBoolean_2 | null; 
  buildTime?: siteBuildTimeQueryString_2 | null; 
  id?: siteIdQueryString_2 | null; 
  internal?: siteInternalInputObject_2 | null; 
}
interface DirectoryRootQueryTypeArgs {
  id?: directoryIdQueryString_2 | null; 
  internal?: directoryInternalInputObject_2 | null; 
  sourceInstanceName?: directorySourceInstanceNameQueryString_2 | null; 
  absolutePath?: directoryAbsolutePathQueryString_2 | null; 
  relativePath?: directoryRelativePathQueryString_2 | null; 
  extension?: directoryExtensionQueryString_2 | null; 
  size?: directorySizeQueryInteger_2 | null; 
  prettySize?: directoryPrettySizeQueryString_2 | null; 
  modifiedTime?: directoryModifiedTimeQueryString_2 | null; 
  accessTime?: directoryAccessTimeQueryString_2 | null; 
  changeTime?: directoryChangeTimeQueryString_2 | null; 
  birthTime?: directoryBirthTimeQueryString_2 | null; 
  root?: directoryRootQueryString_2 | null; 
  dir?: directoryDirQueryString_2 | null; 
  base?: directoryBaseQueryString_2 | null; 
  ext?: directoryExtQueryString_2 | null; 
  name?: directoryNameQueryString_2 | null; 
  relativeDirectory?: directoryRelativeDirectoryQueryString_2 | null; 
  dev?: directoryDevQueryInteger_2 | null; 
  mode?: directoryModeQueryInteger_2 | null; 
  nlink?: directoryNlinkQueryInteger_2 | null; 
  uid?: directoryUidQueryInteger_2 | null; 
  gid?: directoryGidQueryInteger_2 | null; 
  rdev?: directoryRdevQueryInteger_2 | null; 
  blksize?: directoryBlksizeQueryInteger_2 | null; 
  ino?: directoryInoQueryInteger_2 | null; 
  blocks?: directoryBlocksQueryInteger_2 | null; 
  atimeMs?: directoryAtimeMsQueryInteger_2 | null; 
  mtimeMs?: directoryMtimeMsQueryInteger_2 | null; 
  ctimeMs?: directoryCtimeMsQueryInteger_2 | null; 
  birthtimeMs?: directoryBirthtimeMsQueryInteger_2 | null; 
  atime?: directoryAtimeQueryString_2 | null; 
  mtime?: directoryMtimeQueryString_2 | null; 
  ctime?: directoryCtimeQueryString_2 | null; 
  birthtime?: directoryBirthtimeQueryString_2 | null; 
}
interface FileRootQueryTypeArgs {
  id?: fileIdQueryString_2 | null; 
  internal?: fileInternalInputObject_2 | null; 
  sourceInstanceName?: fileSourceInstanceNameQueryString_2 | null; 
  absolutePath?: fileAbsolutePathQueryString_2 | null; 
  relativePath?: fileRelativePathQueryString_2 | null; 
  extension?: fileExtensionQueryString_2 | null; 
  size?: fileSizeQueryInteger_2 | null; 
  prettySize?: filePrettySizeQueryString_2 | null; 
  modifiedTime?: fileModifiedTimeQueryString_2 | null; 
  accessTime?: fileAccessTimeQueryString_2 | null; 
  changeTime?: fileChangeTimeQueryString_2 | null; 
  birthTime?: fileBirthTimeQueryString_2 | null; 
  root?: fileRootQueryString_2 | null; 
  dir?: fileDirQueryString_2 | null; 
  base?: fileBaseQueryString_2 | null; 
  ext?: fileExtQueryString_2 | null; 
  name?: fileNameQueryString_2 | null; 
  relativeDirectory?: fileRelativeDirectoryQueryString_2 | null; 
  dev?: fileDevQueryInteger_2 | null; 
  mode?: fileModeQueryInteger_2 | null; 
  nlink?: fileNlinkQueryInteger_2 | null; 
  uid?: fileUidQueryInteger_2 | null; 
  gid?: fileGidQueryInteger_2 | null; 
  rdev?: fileRdevQueryInteger_2 | null; 
  blksize?: fileBlksizeQueryInteger_2 | null; 
  ino?: fileInoQueryInteger_2 | null; 
  blocks?: fileBlocksQueryInteger_2 | null; 
  atimeMs?: fileAtimeMsQueryInteger_2 | null; 
  mtimeMs?: fileMtimeMsQueryInteger_2 | null; 
  ctimeMs?: fileCtimeMsQueryInteger_2 | null; 
  birthtimeMs?: fileBirthtimeMsQueryInteger_2 | null; 
  atime?: fileAtimeQueryString_2 | null; 
  mtime?: fileMtimeQueryString_2 | null; 
  ctime?: fileCtimeQueryString_2 | null; 
  birthtime?: fileBirthtimeQueryString_2 | null; 
}
interface PortfolioJsonRootQueryTypeArgs {
  image?: portfolioJsonImageQueryString_2 | null; 
  school?: portfolioJsonSchoolQueryString_2 | null; 
  location?: portfolioJsonLocationQueryString_2 | null; 
  degree?: portfolioJsonDegreeQueryString_2 | null; 
  date?: portfolioJsonDateQueryString_2 | null; 
  id?: portfolioJsonIdQueryString_2 | null; 
  internal?: portfolioJsonInternalInputObject_2 | null; 
}
interface SkillsJsonRootQueryTypeArgs {
  time?: skillsJsonTimeQueryString_2 | null; 
  tool?: skillsJsonToolQueryString_2 | null; 
  id?: skillsJsonIdQueryString_2 | null; 
  internal?: skillsJsonInternalInputObject_2 | null; 
}
interface CertificationJsonRootQueryTypeArgs {
  title?: certificationJsonTitleQueryString_2 | null; 
  image?: certificationJsonImageQueryString_2 | null; 
  link?: certificationJsonLinkQueryString_2 | null; 
  start?: certificationJsonStartQueryString_2 | null; 
  end?: certificationJsonEndQueryString_2 | null; 
  ignore?: certificationJsonIgnoreQueryBoolean_2 | null; 
  id?: certificationJsonIdQueryString_2 | null; 
  internal?: certificationJsonInternalInputObject_2 | null; 
}
interface WorkJsonRootQueryTypeArgs {
  employer?: workJsonEmployerQueryString_2 | null; 
  title?: workJsonTitleQueryString_2 | null; 
  image?: workJsonImageQueryString_2 | null; 
  link?: workJsonLinkQueryString_2 | null; 
  description?: workJsonDescriptionQueryString_2 | null; 
  longDescription?: workJsonLongDescriptionQueryString_2 | null; 
  start?: workJsonStartQueryString_2 | null; 
  end?: workJsonEndQueryString_2 | null; 
  languages?: workJsonLanguagesQueryList_2 | null; 
  platforms?: workJsonPlatformsQueryList_2 | null; 
  ignore?: workJsonIgnoreQueryBoolean_2 | null; 
  id?: workJsonIdQueryString_2 | null; 
  internal?: workJsonInternalInputObject_2 | null; 
  location?: workJsonLocationQueryString_2 | null; 
  resume?: workJsonResumeQueryBoolean_2 | null; 
}
interface ProjectsJsonRootQueryTypeArgs {
  title?: projectsJsonTitleQueryString_2 | null; 
  image?: projectsJsonImageQueryString_2 | null; 
  link?: projectsJsonLinkQueryString_2 | null; 
  type?: projectsJsonTypeQueryString_2 | null; 
  start?: projectsJsonStartQueryString_2 | null; 
  end?: projectsJsonEndQueryString_2 | null; 
  languages?: projectsJsonLanguagesQueryList_2 | null; 
  platforms?: projectsJsonPlatformsQueryList_2 | null; 
  roles?: projectsJsonRolesQueryList_2 | null; 
  ignore?: projectsJsonIgnoreQueryBoolean_2 | null; 
  id?: projectsJsonIdQueryString_2 | null; 
  internal?: projectsJsonInternalInputObject_2 | null; 
  longDescription?: projectsJsonLongDescriptionQueryString_2 | null; 
  resume?: projectsJsonResumeQueryBoolean_2 | null; 
}
interface MarkdownRemarkRootQueryTypeArgs {
  id?: markdownRemarkIdQueryString_2 | null; 
  internal?: markdownRemarkInternalInputObject_2 | null; 
  frontmatter?: markdownRemarkFrontmatterInputObject_2 | null; 
  fileAbsolutePath?: markdownRemarkFileAbsolutePathQueryString_2 | null; 
  fields?: markdownRemarkFieldsInputObject_2 | null; 
  html?: htmlQueryString_3 | null; 
  excerpt?: excerptQueryString_3 | null; 
  headings?: headingsQueryList_3 | null; 
  timeToRead?: timeToReadQueryInt_3 | null; 
  tableOfContents?: tableOfContentsQueryString_3 | null; 
  wordCount?: wordCountTypeName_3 | null; 
}
interface SitePageRootQueryTypeArgs {
  layout?: sitePageLayoutQueryString | null; 
  jsonName?: sitePageJsonNameQueryString | null; 
  internalComponentName?: sitePageInternalComponentNameQueryString | null; 
  path?: sitePagePathQueryString_2 | null; 
  component?: sitePageComponentQueryString | null; 
  componentChunkName?: sitePageComponentChunkNameQueryString | null; 
  context?: sitePageContextInputObject | null; 
  updatedAt?: sitePageUpdatedAtQueryInteger | null; 
  pluginCreatorId?: sitePagePluginCreatorIdQueryString | null; 
  componentPath?: sitePageComponentPathQueryString | null; 
  id?: sitePageIdQueryString_2 | null; 
  internal?: sitePageInternalInputObject_2 | null; 
}
interface DistinctSitePluginConnectionArgs {
  field?: sitePluginDistinctEnum | null; 
}
interface GroupSitePluginConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: sitePluginGroupEnum | null; 
}
interface DistinctDirectoryConnectionArgs {
  field?: directoryDistinctEnum | null; 
}
interface GroupDirectoryConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: directoryGroupEnum | null; 
}
interface ModifiedTimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface AccessTimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface ChangeTimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface BirthTimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface BlksizeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface AtimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface MtimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface CtimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface BirthtimeDirectoryArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface DistinctFileConnectionArgs {
  field?: fileDistinctEnum | null; 
}
interface GroupFileConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: fileGroupEnum | null; 
}
interface SizeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface ModifiedTimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface AccessTimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface ChangeTimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface BirthTimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface BlksizeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface AtimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface MtimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface CtimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface BirthtimeFileArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface StartCertificationJsonArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface EndCertificationJsonArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface StartWorkJsonArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface EndWorkJsonArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface StartProjectsJsonArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface EndProjectsJsonArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number | null; 
}
interface HeadingsMarkdownRemarkArgs {
  depth?: HeadingLevels | null; 
}
interface DateFrontmatter_2Args {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface DistinctPortfolioJsonConnectionArgs {
  field?: portfolioJsonDistinctEnum | null; 
}
interface GroupPortfolioJsonConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: portfolioJsonGroupEnum | null; 
}
interface DistinctSkillsJsonConnectionArgs {
  field?: skillsJsonDistinctEnum | null; 
}
interface GroupSkillsJsonConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: skillsJsonGroupEnum | null; 
}
interface DistinctCertificationJsonConnectionArgs {
  field?: certificationJsonDistinctEnum | null; 
}
interface GroupCertificationJsonConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: certificationJsonGroupEnum | null; 
}
interface DistinctWorkJsonConnectionArgs {
  field?: workJsonDistinctEnum | null; 
}
interface GroupWorkJsonConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: workJsonGroupEnum | null; 
}
interface DistinctProjectsJsonConnectionArgs {
  field?: projectsJsonDistinctEnum | null; 
}
interface GroupProjectsJsonConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: projectsJsonGroupEnum | null; 
}
interface DistinctMarkdownRemarkConnectionArgs {
  field?: markdownRemarkDistinctEnum | null; 
}
interface GroupMarkdownRemarkConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: markdownRemarkGroupEnum | null; 
}
interface DistinctSitePageConnectionArgs {
  field?: sitePageDistinctEnum | null; 
}
interface GroupSitePageConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: sitePageGroupEnum | null; 
}
interface PortSiteArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
interface BuildTimeSiteArgs {
  formatString?: string | null; /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}

type SitePluginConnectionSortByFieldsEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___color" | "pluginOptions___showSpinner" | "pluginOptions___logo" | "pluginOptions___injectHTML" | "pluginOptions___icons___android" | "pluginOptions___icons___appleIcon" | "pluginOptions___icons___appleStartup" | "pluginOptions___icons___coast" | "pluginOptions___icons___favicons" | "pluginOptions___icons___firefox" | "pluginOptions___icons___twitter" | "pluginOptions___icons___yandex" | "pluginOptions___icons___windows" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "packageJson___optionalDependecies" | "packageJson___bundledDependecies" | "parent" | "children" | "internal___contentDigest" | "internal___type" | "internal___owner";


type sitePluginConnectionSortOrderValues = "ASC" | "DESC";


type sitePluginDistinctEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___color" | "pluginOptions___showSpinner" | "pluginOptions___logo" | "pluginOptions___injectHTML" | "pluginOptions___icons___android" | "pluginOptions___icons___appleIcon" | "pluginOptions___icons___appleStartup" | "pluginOptions___icons___coast" | "pluginOptions___icons___favicons" | "pluginOptions___icons___firefox" | "pluginOptions___icons___twitter" | "pluginOptions___icons___yandex" | "pluginOptions___icons___windows" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


type sitePluginGroupEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___color" | "pluginOptions___showSpinner" | "pluginOptions___logo" | "pluginOptions___injectHTML" | "pluginOptions___icons___android" | "pluginOptions___icons___appleIcon" | "pluginOptions___icons___appleStartup" | "pluginOptions___icons___coast" | "pluginOptions___icons___favicons" | "pluginOptions___icons___firefox" | "pluginOptions___icons___twitter" | "pluginOptions___icons___yandex" | "pluginOptions___icons___windows" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


type DirectoryConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";


type directoryConnectionSortOrderValues = "ASC" | "DESC";


type directoryDistinctEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";


type directoryGroupEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";


type FileConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";


type fileConnectionSortOrderValues = "ASC" | "DESC";


type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";


type fileDistinctEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";


type fileGroupEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";


type PortfolioJsonConnectionSortByFieldsEnum = "image" | "school" | "location" | "degree" | "date" | "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


type portfolioJsonConnectionSortOrderValues = "ASC" | "DESC";


type portfolioJsonDistinctEnum = "image" | "school" | "location" | "degree" | "date" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


type portfolioJsonGroupEnum = "image" | "school" | "location" | "degree" | "date" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


type SkillsJsonConnectionSortByFieldsEnum = "time" | "tool" | "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


type skillsJsonConnectionSortOrderValues = "ASC" | "DESC";


type skillsJsonDistinctEnum = "time" | "tool" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


type skillsJsonGroupEnum = "time" | "tool" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


type CertificationJsonConnectionSortByFieldsEnum = "title" | "image" | "link" | "start" | "end" | "ignore" | "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


type certificationJsonConnectionSortOrderValues = "ASC" | "DESC";


type certificationJsonDistinctEnum = "title" | "image" | "link" | "start" | "end" | "ignore" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


type certificationJsonGroupEnum = "title" | "image" | "link" | "start" | "end" | "ignore" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


type WorkJsonConnectionSortByFieldsEnum = "employer" | "title" | "image" | "link" | "description" | "longDescription" | "start" | "end" | "languages" | "platforms" | "ignore" | "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "location" | "resume";


type workJsonConnectionSortOrderValues = "ASC" | "DESC";


type workJsonDistinctEnum = "employer" | "title" | "image" | "link" | "description" | "longDescription" | "start" | "end" | "languages" | "platforms" | "ignore" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "location" | "resume";


type workJsonGroupEnum = "employer" | "title" | "image" | "link" | "description" | "longDescription" | "start" | "end" | "languages" | "platforms" | "ignore" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "location" | "resume";


type ProjectsJsonConnectionSortByFieldsEnum = "title" | "image" | "link" | "type" | "start" | "end" | "languages" | "platforms" | "roles" | "ignore" | "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "longDescription" | "resume";


type projectsJsonConnectionSortOrderValues = "ASC" | "DESC";


type projectsJsonDistinctEnum = "title" | "image" | "link" | "type" | "start" | "end" | "languages" | "platforms" | "roles" | "ignore" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "longDescription" | "resume";


type projectsJsonGroupEnum = "title" | "image" | "link" | "type" | "start" | "end" | "languages" | "platforms" | "roles" | "ignore" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "longDescription" | "resume";


type MarkdownRemarkConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___date" | "frontmatter____PARENT" | "frontmatter___parent" | "fileAbsolutePath" | "fields___slug" | "html" | "excerpt" | "headings" | "timeToRead" | "tableOfContents" | "wordCount___paragraphs" | "wordCount___sentences" | "wordCount___words";


type markdownRemarkConnectionSortOrderValues = "ASC" | "DESC";


type markdownRemarkDistinctEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___date" | "frontmatter____PARENT" | "frontmatter___parent" | "fileAbsolutePath" | "fields___slug";


type markdownRemarkGroupEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___date" | "frontmatter____PARENT" | "frontmatter___parent" | "fileAbsolutePath" | "fields___slug";


type SitePageConnectionSortByFieldsEnum = "layout" | "jsonName" | "internalComponentName" | "path" | "matchPath" | "component" | "componentChunkName" | "context___slug" | "updatedAt" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "children" | "internal___type" | "internal___contentDigest" | "internal___owner";


type sitePageConnectionSortOrderValues = "ASC" | "DESC";


type sitePageDistinctEnum = "layout" | "jsonName" | "internalComponentName" | "path" | "component" | "componentChunkName" | "context___slug" | "updatedAt" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


type sitePageGroupEnum = "layout" | "jsonName" | "internalComponentName" | "path" | "component" | "componentChunkName" | "context___slug" | "updatedAt" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";

