import Command from '@oclif/command'
import execa = require('execa')
import {readFile, ensureDir, move, remove} from 'fs-extra'
import readmeasy from 'readmeasy'
import typeDocSingleMd from './typedoc-single-md'
import c from './node-bin'

/**
 * Creates Readme from TypeScript and README template using readmeasy and Typeoc.
 *
 * @param this is @oclif/Commanf
 */
export default async function readme(this: Command) {
  // if grep -q '{% include \"api.md\" %}' 'README.njk'; then npm run typedoc:single-md; mkdir -p temp && mv api.md temp/; fi && readmeasy --partial-dirs temp,/module-files/template-partials && rm -rf temp
  try {
    const fileContent = await readFile('README.njk', {encoding: 'utf8'})
    if (fileContent.includes('{% include "api.md" %}')) {
      await typeDocSingleMd.apply(this)
      await ensureDir('temp')
      await move('api.md', 'temp/api.md')
    }
    await readmeasy({partialDirs: ['temp', '/module-files/template-partials']})
    await remove('temp')
    await execa(c('oclif-dev'), ['readme'], {stdio: 'inherit'})
  } catch (error) {
    this.error(error)
  }
}
