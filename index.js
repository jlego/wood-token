/**
 * Wood Plugin Module.
 * token
 * by jlego on 2018-11-18
 */
const Token = require('./src/token');

module.exports = (app, config = {}) => {
  if(app){
    app.Token = Token;
  }
  return Token;
}
