import Command from '@oclif/command'
import execa = require('execa')
import {readFile, ensureDir, move, remove, pathExists, readJSON} from 'fs-extra'
import readmeasy from 'readmeasy'
import typeDocSingleMd from './typedoc-single-md'
import c from './node-bin'

const DEFAULT_TEMPLATE_CONTENT = '{% include "module-header" %}\n\n# Synopsis\n\n# Details\n\n<!-- usage -->\n\n<!-- commands -->\n\n# API\n\n{% include "api.md" %}\n\n# Contribution\n\n'

/**
 * Creates Readme from TypeScript and README template using readmeasy and Typeoc.
 *
 * @param this is @oclif/Commanf
 */
export default async function readme(this: Command) {
  // if grep -q '{% include \"api.md\" %}' 'README.njk'; then npm run typedoc:single-md; mkdir -p temp && mv api.md temp/; fi && readmeasy --partial-dirs temp,/module-files/template-partials && rm -rf temp
  try {
    const templateExists = await pathExists('README.njk')
    const fileContent = templateExists ? await readFile('README.njk', {encoding: 'utf8'}) : ''

    if (!templateExists || fileContent.includes('{% include "api.md" %}')) {
      await typeDocSingleMd.apply(this)
      await ensureDir('temp')
      await move('api.md', 'temp/api.md', {overwrite: true})
    }

    await readmeasy({partialDirs: ['temp', '/module-files/template-partials'], defaultContent: DEFAULT_TEMPLATE_CONTENT})
    await remove('temp')

    // If oclif installed execute `oclif-dev readme`;
    const oclifInstalled = Object.keys((await readJSON('package.json')).dependencies).includes('@oclif/command')
    if (oclifInstalled) {
      await execa(c('oclif-dev'), ['readme'], {stdio: 'inherit'})
    }
  } catch (error) {
    this.error(error)
  }
}
