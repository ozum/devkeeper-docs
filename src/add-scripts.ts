
import Command from '@oclif/command'
import {pathExists, readJSON, writeJSON} from 'fs-extra'
import pkgUp from 'pkg-up'
import {dirname, join} from 'path'

/**
 * Using `typedoc`, creates a series of MarkDown files from TypeScript files.
 *
 * @param this is @oclif/Commanf
 */
export default async function typedocMd(this: Command) {
  // rm -rf api-docs-md && typedoc --platform vuepress --plugin typedoc-plugin-example-tag,typedoc-plugin-markdown --excludeExternals --excludePrivate --excludeProtected --theme markdown --readme none --mode file --out api-docs-md && find api-docs-md -name \"index.md\" -exec sh -c 'mv \"$1\" \"${1%index.md}\"index2.md' - {} \\;
  try {
    const packagePath = await pkgUp({cwd: process.env.INIT_CWD})
    if (!packagePath) throw new Error(`Cannot find package.json file in ${process.env.INIT_CWD}`)

    const vuePressPath = join(dirname(packagePath), 'docs/.vuepress')
    const packageJson = await readJSON(packagePath)

    if (!packageJson.scripts) packageJson.scripts = {}
    packageJson.scripts.readme = 'devkeeper-docs readme'

    if (await pathExists(vuePressPath)) {
      packageJson.scripts['docs:dev'] = 'devkeeper-docs vuepress-dev'
      packageJson.scripts['docs:build'] = 'devkeeper-docs vuepress'
    }

    await writeJSON(packagePath, packageJson, {spaces: 2})
  } catch (error) {
    this.error(error)
  }
}
