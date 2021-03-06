const BillingCycle = require('./billingCycle')
const _ = require('lodash')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)
// Pega mensagem de erros do mongo em no formato string

function sendErrorsOrNext(res, res, next) {
  const bundle = res.locals.bundle
  if(bundle.errors){
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else{
    next()
  }
}
function parseErrors(nodeRestfulErrors) {
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.messages))
  return errors
}
BillingCycle.route('count', function(req, res, next){
  BillingCycle.count(function(error, value){
    if(error){
      res.status(500).json({errors: [error]})
    } else{
      res.json({value})
    }
  })
})
module.exports = BillingCycle
