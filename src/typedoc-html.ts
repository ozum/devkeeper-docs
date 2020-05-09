// IMPORTANT NOTICE
// This node.js script is used instead of bash script, because referring to a file relative to bash script is not possible.
//
// See:
// https://stackoverflow.com/questions/6659689/referring-to-a-file-relative-to-executing-script
// http://mywiki.wooledge.org/BashFAQ/028

import Command from '@oclif/command'
import execa = require('execa')
import c from './node-bin'
import {remove} from 'fs-extra'

/**
 * Using `typedoc`, creates a series of MarkDown files from TypeScript files.
 *
 * @param this is @oclif/Commanf
 */
export default async function typedocHTML(this: Command) {
  // rm -rf api-docs-html && typedoc --plugin typedoc-plugin-example-tag --mode file --out api-docs-html
  try {
    await remove('api-docs-html')
    await execa(c('typedoc'), ['--plugin', 'typedoc-plugin-example-tag', '--mode', 'file', '--out', 'api-docs-html'], {stdio: 'inherit'})
  } catch (error) {
    this.log(error)
  }
}
