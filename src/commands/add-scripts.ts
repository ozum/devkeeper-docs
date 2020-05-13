import Command from '@oclif/command'
import addScripts from '../add-scripts'

export default class TypeDocHTML extends Command {
  static description = 'Creates Readme from TypeScript and README template using readmeasy and Typeoc.';

  async run() {
    await addScripts.apply(this)
  }
}
