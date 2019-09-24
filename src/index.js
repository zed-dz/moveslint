#!/usr/bin/env node

const { writeFileSync } = require('fs')
const inquirer = require('inquirer')
const shell = require('shelljs')

const jsonEslint = require('./config/eslint.zed.json')

const configs = {
  eslint: jsonEslint
}

;(async () => {
  const { eslintConfig } = await inquirer.prompt([
    {
      type: 'list',
      message: 'Pick the config file you want',
      name: 'eslintConfig',
      choices: ['eslint']
    }
  ])

  const cwd = process.cwd()

  writeFileSync(
    `${cwd}/.eslintrc.json`,
    JSON.stringify(configs[eslintConfig], null, 2)
  )

  console.log('.eslintrc.json successfully created <3 !')
  shell.exec(
    'yarn add -D webpack prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-babel eslint-plugin-flowtype eslint-plugin-html eslint-plugin-prettier eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-google eslint-config-kentcdodds eslint-config-xo eslint-plugin-eslint-comments eslint-plugin-json eslint-plugin-optimize-regex eslint-plugin-promise babel-plugin-module-resolver babel-plugin-react-require eslint-import-resolver-webpack eslint-import-resolver-babel-module eslint@latest babel-eslint@latest eslint-plugin-react-hooks@^1.7.0 && yarn audit'
  )
  console.log('thank you for installing eslint node modules <3!')
})()
