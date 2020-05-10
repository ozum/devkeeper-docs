// IMPORTANT NOTICE
// This node.js script is used instead of bash script, because referring to a file relative to bash script is not possible.
//
// See:
// https://stackoverflow.com/questions/6659689/referring-to-a-file-relative-to-executing-script
// http://mywiki.wooledge.org/BashFAQ/028

import Command from '@oclif/command'
import execa = require('execa');
import {remove} from 'fs-extra'
import c from './node-bin'

/**
 * Using `typedoc`, creates a series of MarkDown files from TypeScript files.
 *
 * @param this is @oclif/Commanf
 */
export default async function typedocMd(this: Command) {
  // rm -rf api-docs-md && typedoc --platform vuepress --plugin typedoc-plugin-example-tag,typedoc-plugin-markdown --excludeExternals --excludePrivate --excludeProtected --theme markdown --readme none --mode file --out api-docs-md && find api-docs-md -name \"index.md\" -exec sh -c 'mv \"$1\" \"${1%index.md}\"index2.md' - {} \\;
  try {
    await remove('api-docs-md')
    await execa(c('typedoc'), ['--platform', 'vuepress', '--plugin', 'typedoc-plugin-example-tag,typedoc-plugin-markdown', '--excludeExternals', '--excludePrivate', '--excludeProtected', '--excludeNotExported', '--theme', 'markdown', '--readme', 'none', '--mode', 'file', '--out', 'api-docs-md'], {stdio: 'inherit'})
    await execa('find', ['api-docs-md', '-name', '"index.md"', '-exec', 'sh', '-c', "'mv \"$1\" \"${1%index.md}\"index2.md'", '-', '{}', ';'], {stdio: 'inherit'}) // eslint-disable-line no-template-curly-in-string
  } catch (error) {
    this.error(error)
  }
}
