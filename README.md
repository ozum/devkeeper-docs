# devkeeper-docs



Opinionated CLI to generate README and build VuePress. It may be used in CI/CD such as GitHub actions.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Synopsis](#synopsis)
- [Details](#details)
  - [README](#readme)
  - [VuePress](#vuepress)
- [CLI](#cli)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Synopsis

`$ npx devkeeper-docs readme`

Build opinionated VuePress

`$ npx devkeeper-docs vuepress`

# Details

## README

`$ npx devkeeper-docs readme`

* Creates `README.md` from `README.njk` nunjucks template using `readmeasy`.
* If there is no `README.njk` template, creates one.
* Adds header with `{% include &quot;module-header&quot; %}` (name, description table of contents, badges). See [`readmeasy`](https://www.npmjs.com/package/readmeasy) for details.
* Adds API documentation with `{% include &quot;api.md&quot; %}` using [`TypeDoc`](https://typedoc.org/).
* Adds [`oclif`](https://oclif.io/) CLI tool README parts if `oclif` is used in project.

## VuePress

`$ npx devkeeper-docs vuepress`

Builds VuePress. We suggest you to use [`vuepress-bar`](https://www.npmjs.com/package/vuepress-bar) to easily create VuePress sidabar and top menu.

# CLI

<!-- usage -->
```sh-session
$ npm install -g devkeeper-docs
$ devkeeper-docs COMMAND
running command...
$ devkeeper-docs (-v|--version|version)
devkeeper-docs/0.1.11 darwin-x64 node-v14.1.0
$ devkeeper-docs --help [COMMAND]
USAGE
  $ devkeeper-docs COMMAND
...
```
<!-- usagestop -->

<!-- commands -->
* [`devkeeper-docs add-scripts`](#devkeeper-docs-add-scripts)
* [`devkeeper-docs autocomplete [SHELL]`](#devkeeper-docs-autocomplete-shell)
* [`devkeeper-docs help [COMMAND]`](#devkeeper-docs-help-command)
* [`devkeeper-docs readme`](#devkeeper-docs-readme)
* [`devkeeper-docs typedoc-html`](#devkeeper-docs-typedoc-html)
* [`devkeeper-docs typedoc-md`](#devkeeper-docs-typedoc-md)
* [`devkeeper-docs typedoc-single-md`](#devkeeper-docs-typedoc-single-md)
* [`devkeeper-docs vuepress`](#devkeeper-docs-vuepress)
* [`devkeeper-docs vuepress-dev`](#devkeeper-docs-vuepress-dev)

## `devkeeper-docs add-scripts`

Creates Readme from TypeScript and README template using readmeasy and Typeoc.

```
USAGE
  $ devkeeper-docs add-scripts
```

_See code: [lib/commands/add-scripts.js](https://github.com/ozum/devkeeper-docs/blob/v0.1.11/lib/commands/add-scripts.js)_

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

_See code: [lib/commands/readme.js](https://github.com/ozum/devkeeper-docs/blob/v0.1.11/lib/commands/readme.js)_

## `devkeeper-docs typedoc-html`

Using `typedoc`, creates series of HTML files from TypeScript files

```
USAGE
  $ devkeeper-docs typedoc-html
```

_See code: [lib/commands/typedoc-html.js](https://github.com/ozum/devkeeper-docs/blob/v0.1.11/lib/commands/typedoc-html.js)_

## `devkeeper-docs typedoc-md`

Using `typedoc`, creates a series of MarkDown files from TypeScript files.

```
USAGE
  $ devkeeper-docs typedoc-md
```

_See code: [lib/commands/typedoc-md.js](https://github.com/ozum/devkeeper-docs/blob/v0.1.11/lib/commands/typedoc-md.js)_

## `devkeeper-docs typedoc-single-md`

Using `typedoc`, creates a MarkDown files from TypeScript files

```
USAGE
  $ devkeeper-docs typedoc-single-md
```

_See code: [lib/commands/typedoc-single-md.js](https://github.com/ozum/devkeeper-docs/blob/v0.1.11/lib/commands/typedoc-single-md.js)_

## `devkeeper-docs vuepress`

Builds VuePress Site

```
USAGE
  $ devkeeper-docs vuepress
```

_See code: [lib/commands/vuepress.js](https://github.com/ozum/devkeeper-docs/blob/v0.1.11/lib/commands/vuepress.js)_

## `devkeeper-docs vuepress-dev`

Starts VuePress development server.

```
USAGE
  $ devkeeper-docs vuepress-dev
```

_See code: [lib/commands/vuepress-dev.js](https://github.com/ozum/devkeeper-docs/blob/v0.1.11/lib/commands/vuepress-dev.js)_
<!-- commandsstop -->
