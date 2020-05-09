import Command from '@oclif/command'
import readme from '../readme'

export default class TypeDocHTML extends Command {
  static description = 'Creates Readme from TypeScript and README template using readmeasy and Typeoc.';

  async run() {
    await readme.apply(this)
  }
}
