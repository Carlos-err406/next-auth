// @ts-check

/**
 * @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions}
 */
module.exports = {
  // typedoc options
  entryPoints: [
    "../packages/next-auth",
    "../packages/core",
    "../packages/frameworks-sveltekit",
    "../packages/frameworks-express",
    "../packages/frameworks-solid-start",
    "../packages/adapter-prisma",
    "../packages/adapter-azure-tables",
    "../packages/adapter-d1",
    "../packages/adapter-dgraph",
    "../packages/adapter-drizzle",
    "../packages/adapter-dynamodb",
    "../packages/adapter-edgedb",
    "../packages/adapter-fauna",
    "../packages/adapter-firebase",
    "../packages/adapter-hasura",
    "../packages/adapter-kysely",
    "../packages/adapter-mikro-orm",
    "../packages/adapter-mongodb",
    "../packages/adapter-neo4j",
    "../packages/adapter-pg",
    "../packages/adapter-pouchdb",
    "../packages/adapter-sequelize",
    "../packages/adapter-supabase",
    "../packages/adapter-surrealdb",
    "../packages/adapter-typeorm",
    "../packages/adapter-unstorage",
    "../packages/adapter-upstash-redis",
    "../packages/adapter-xata",
  ],
  entryPointStrategy: "packages",
  out: "pages/reference",
  tsconfig: "./tsconfig.json",
  plugin: [
    "typedoc-plugin-markdown",
    require.resolve("./typedoc-nextauth.cjs"),
    require.resolve("./typedoc-mdn-links.cjs"),
  ],
  disableSources: true,
  excludeNotDocumented: true,
  excludeExternals: true,
  excludeInternal: true,
  excludePrivate: true,
  excludeProtected: true,
  cleanOutputDir: false,
  gitRevision: "main",
  githubPages: false,
  hideGenerator: true,
  readme: "none",
  sort: ["kind", "static-first", "required-first", "alphabetical"],
  kindSortOrder: [
    "Function",
    "TypeAlias",
    "Interface",
    "Reference",
    "Project",
    "Module",
    "Namespace",
    "Class",
    "Constructor",
    "Property",
    "Variable",
    "Accessor",
    "Method",
    "Parameter",
    "TypeParameter",
    "TypeLiteral",
    "CallSignature",
    "ConstructorSignature",
    "IndexSignature",
    "GetSignature",
    "SetSignature",
  ],
  name: "API Reference",

  // typedoc-plugin-markdown options
  outputFileStrategy: "modules",
  entryFileName: "overview.mdx",
  fileExtension: ".mdx",
  excludeScopesInPaths: true,
  hidePageHeader: true,
  hideBreadcrumbs: true,
  excludeGroups: true,
  expandObjects: true,
  parametersFormat: "table",
  indexFormat: "table",
  textContentMappings: {
    "label.packages": "Integrations",
  },
  useCodeBlocks: true,
}
