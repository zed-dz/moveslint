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
    'yarn add -D prettier babel-eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-babel eslint-config-node eslint-plugin-flowtype eslint-plugin-html eslint-plugin-prettier babel-eslint eslint-plugin-react-hooks eslint-plugin-node eslint@5.3.0 eslint-plugin-import@2.18.0 eslint-plugin-jsx-a11y@6.2.3 eslint-plugin-react@7.14.2 eslint-config-google eslint-config-kentcdodds eslint-config-xo eslint-plugin-eslint-comments eslint-plugin-json eslint-plugin-optimize-regex eslint-plugin-promise eslint-plugin-unicorn babel-plugin-module-resolver babel-plugin-react-require jest webpack eslint-import-resolver-webpack eslint-import-resolver-babel-module && yarn audit'
  )
  console.log('thank you for installing eslint node modules <3!')
})()
