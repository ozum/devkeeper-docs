import Command from '@oclif/command'
import typeDocHTML from '../typedoc-html'

export default class TypeDocHTML extends Command {
  static description = 'Using `typedoc`, creates series of HTML files from TypeScript files';

  async run() {
    await typeDocHTML.apply(this)
  }
}
