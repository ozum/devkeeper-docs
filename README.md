# devkeeper-docs



README and VuePress generator

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Synopsis](#synopsis)
- [Details](#details)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Synopsis

`$ npx devkeeper-docs readme`

`$ npx devkeeper-docs vuepress`

# Details

CLI to generate README and VuePress. It may be used in CI/CD such as GitHub actions.

<!-- usage -->
```sh-session
$ npm install -g devkeeper-docs
$ devkeeper-docs COMMAND
running command...
$ devkeeper-docs (-v|--version|version)
devkeeper-docs/0.1.2 darwin-x64 node-v14.1.0
$ devkeeper-docs --help [COMMAND]
USAGE
  $ devkeeper-docs COMMAND
...
```
<!-- usagestop -->

<!-- commands -->
* [`devkeeper-docs autocomplete [SHELL]`](#devkeeper-docs-autocomplete-shell)
* [`devkeeper-docs help [COMMAND]`](#devkeeper-docs-help-command)
* [`devkeeper-docs readme`](#devkeeper-docs-readme)
* [`devkeeper-docs typedoc-html`](#devkeeper-docs-typedoc-html)
* [`devkeeper-docs typedoc-md`](#devkeeper-docs-typedoc-md)
* [`devkeeper-docs typedoc-single-md`](#devkeeper-docs-typedoc-single-md)
* [`devkeeper-docs vuepress`](#devkeeper-docs-vuepress)
* [`devkeeper-docs vuepress-dev`](#devkeeper-docs-vuepress-dev)

## `devkeeper-docs autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ devkeeper-docs autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ devkeeper-docs autocomplete
  $ devkeeper-docs autocomplete bash
  $ devkeeper-docs autocomplete zsh
  $ devkeeper-docs autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.2.0/src/commands/autocomplete/index.ts)_

## `devkeeper-docs help [COMMAND]`

display help for devkeeper-docs

```
USAGE
  $ devkeeper-docs help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.0/src/commands/help.ts)_

## `devkeeper-docs readme`

Creates Readme from TypeScript and README template using readmeasy and Typeoc.

```
USAGE
  $ devkeeper-docs readme
```

## `devkeeper-docs typedoc-html`

Using `typedoc`, creates series of HTML files from TypeScript files

```
USAGE
  $ devkeeper-docs typedoc-html
```

## `devkeeper-docs typedoc-md`

Using `typedoc`, creates a series of MarkDown files from TypeScript files.

```
USAGE
  $ devkeeper-docs typedoc-md
```

## `devkeeper-docs typedoc-single-md`

Using `typedoc`, creates a MarkDown files from TypeScript files

```
USAGE
  $ devkeeper-docs typedoc-single-md
```

## `devkeeper-docs vuepress`

Builds VuePress Site

```
USAGE
  $ devkeeper-docs vuepress
```

## `devkeeper-docs vuepress-dev`

Starts VuePress development server.

```
USAGE
  $ devkeeper-docs vuepress-dev
```
<!-- commandsstop -->
