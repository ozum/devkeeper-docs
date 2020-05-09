import Command from '@oclif/command'
import {outputFile, remove} from 'fs-extra'
import typeDocMd from './typedoc-md'
import concatMd from 'concat-md'

/**
 * Using `typedoc`, creates a MarkDown files from TypeScript files
 *
 * @param this is @oclif/Commanf
 */
export default async function typedocSingleMd(this: Command) {
  // "npm run typedoc:md && concat-md --dir-name-as-title api-docs-md > api.md && rm -rf api-docs-md",
  try {
    await typeDocMd.apply(this)
    const apiDoc = await concatMd('api-docs-md', {dirNameAsTitle: true})
    await outputFile('api.md', apiDoc)
    await remove('api-docs-md')
  } catch (error) {
    this.error(error)
  }
}

