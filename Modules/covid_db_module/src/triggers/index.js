const logInsert = require('./addLogTrigger_INSERT');
const logUpdate = require('./addLogTrigger_UPDATE');
const positiveCaseInsert = require('./addPositivePersonToActiveCases');
const recoveryTrigger = require('./recoveryTrigger');



module.exports = { logInsert, logUpdate, positiveCaseInsert ,recoveryTrigger}