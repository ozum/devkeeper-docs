import Command from '@oclif/command'
import execa = require('execa');
import {pathExists} from 'fs-extra'
import c from './node-bin'

/**
 * Using `typedoc`, creates a series of MarkDown files from TypeScript files.
 *
 * @param this is @oclif/Commanf
 */
export default async function typedocMd(this: Command) {
  // rm -rf api-docs-md && typedoc --platform vuepress --plugin typedoc-plugin-example-tag,typedoc-plugin-markdown --excludeExternals --excludePrivate --excludeProtected --theme markdown --readme none --mode file --out api-docs-md && find api-docs-md -name \"index.md\" -exec sh -c 'mv \"$1\" \"${1%index.md}\"index2.md' - {} \\;
  try {
    await execa('npx', ['npm-add-script', '-k', 'readme', '-v', 'devkeeper-docs readme', '-f'], {stdio: 'inherit'})
    if (await pathExists('docs/.vuepress')) {
      await execa('npx', ['npm-add-script', '-k', 'docs:build', '-v', 'devkeeper-docs vuepress', '-f'], {stdio: 'inherit'})
      await execa('npx', ['npm-add-script', '-k', 'docs:dev', '-v', 'devkeeper-docs vuepress-dev', '-f'], {stdio: 'inherit'})
    }
  } catch (error) {
    this.error(error)
  }
}
