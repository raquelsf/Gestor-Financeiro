const express = require('express')

module.exports = function(server) {
  // Routes
  const router = express.Router()
  server.use('/api', router)

  // billingCycle
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')
  // console.log(billingCycleService)

  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)
}
