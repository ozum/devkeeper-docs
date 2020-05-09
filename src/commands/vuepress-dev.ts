import Command from '@oclif/command'
import execa = require('execa')

export default class VuePress extends Command {
  static description = 'Starts VuePress development server.';

  async run() {
    try {
      await execa('npx', ['vuepress', 'dev', 'docs'], {stdio: 'inherit'})
    } catch (error) {
      this.error(error)
    }
  }
}
