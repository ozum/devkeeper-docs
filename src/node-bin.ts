import {join} from 'path'

/**
 * Returns absolute path of `node_modules/.bin` command from this package.
 *
 * @param cmd is the command to return path of.
 * @returns absolute path of command.
 */
export default function command(cmd: string): string {
  return join(__dirname, '..', 'node_modules', '.bin', cmd)
}
