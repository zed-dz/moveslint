#!/usr/bin/env node
const inquirer = require('inquirer')
const { writeFileSync } = require('fs')
const shell = require('shelljs')
const eslintConfig = require('./config/.eslintrc.json')

const esConfig = {
  node: eslintConfig
}

;(async () => {
  const { reactEslint } = await inquirer.prompt([
    {
      type: 'list',
      message: 'Pick the config file you want to use',
      name: 'react-eslint',
      choices: ['eslint']
    }
  ])

  const cwd = process.cwd()

  writeFileSync(
    `${cwd}/.eslintrc.json`,
    JSON.stringify(esConfig[reactEslint], null, 2)
  )
  console.log('.eslintrc.json successfully created <3 !')
})()
;(async () => {
  shell.exec(
    'npm i -D eslint prettier babel-eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-babel eslint-config-node eslint-plugin-flowtype eslint-plugin-html eslint-plugin-prettier babel-eslint eslint-plugin-react-hooks eslint-plugin-node && npx install-peerdeps --dev eslint-config-airbnb && npm audit fix'
  )
  console.log('thank you for installing eslint node modules <3!')
})()
