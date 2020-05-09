import Command from '@oclif/command'
import typeDocHTML from '../typedoc-html'

export default class VuePress extends Command {
  static description = 'Builds VuePress Site';

  async run() {
    await typeDocHTML.apply(this)
  }
}
