import Command from '@oclif/command'
import typeDocMd from '../typedoc-md'

/**
 * Using `typedoc`, creates a series of MarkDown files from TypeScript files.
 */
export class TypeDocMd extends Command {
  static description = 'Using `typedoc`, creates a series of MarkDown files from TypeScript files.'

  async run() {
    await typeDocMd.apply(this)
  }
}

