#!/usr/bin/env node
const inquirer = require('inquirer')
const { writeFileSync } = require('fs')
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
    'yarn add -D eslint prettier babel-eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-babel eslint-config-node eslint-plugin-flowtype eslint-plugin-html eslint-plugin-prettier babel-eslint eslint-plugin-react-hooks eslint-plugin-node && yarn add -P eslint-config-airbnb && yarn audit'
  )
  console.log('thank you for installing eslint node modules <3!')
})()
