import Command from '@oclif/command'
import typeDocSingleMd from '../typedoc-single-md'

export default class TypeDocSingleMd extends Command {
  static description = 'Using `typedoc`, creates a MarkDown files from TypeScript files';

  async run() {
    await typeDocSingleMd.apply(this)
  }
}

