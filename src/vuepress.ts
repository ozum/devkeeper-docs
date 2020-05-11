import Command from '@oclif/command'
import execa = require('execa');
import {copy, move} from 'fs-extra'
import typeDocMd from './typedoc-md'
import typeDocHtml from './typedoc-html'

/**
 * Using `typedoc`, creates a MarkDown files from TypeScript files
 *
 * @param this is @oclif/Commanf
 */
export default async function vuepress(this: Command) {
  // npm-run-all -p typedoc:md typedoc:html && rm -rf docs/nav.02.api docs/.vuepress/public/api-site && mv api-docs-md docs/nav.02.api && mv api-docs-html docs/.vuepress/public/api-site && cp assets/typedoc/01.typedoc-iframe.md docs/nav.02.api/ && NODE_ENV=production vuepress build docs
  try {
    await Promise.all([typeDocMd, typeDocHtml])
    await Promise.all([move('api-docs-md', 'docs/nav.02.api', {overwrite: true}), move('api-docs-html', 'docs/.vuepress/public/api-site', {overwrite: true})])
    await copy('assets/typedoc/01.typedoc-iframe.md', 'docs/nav.02.api/01.typedoc-iframe.md')
    await execa('npx', ['vuepress', 'build', 'docs'], {env: {NODE_ENV: 'production'}})
  } catch (error) {
    this.error(error)
  }
}

