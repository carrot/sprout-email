path    = require 'path'
Promise = require 'bluebird'
ncp     = Promise.promisify(require('ncp'))

module.exports = (utils, name = 'base') ->
  base = path.join(__dirname, '../', 'root', 'src')
  t = if name == 'base' then base else path.join(__dirname, '..', 'stubs', name)

  ncp(base, './src')
    .then -> ncp(t, './src')
    .catch (err) ->
      throw new Error("the template '#{name}' doesn't exist")
