
const countries = require('./countries')
const countryStatusCode = require('./countryStatusCode')
const hospitalized = require('./hospitalized')
const hospitals = require('./hospitals')
const log = require('./log')
const tests = require('./tests')
const vaccinated = require('./vaccinated')
const enteredCountry = require('./enteredCountry')
const cities = require('./cities');
const people = require('./people');
const activeCases = require('./activeCases');




module.exports={ people,cities, enteredCountry,countries, countryStatusCode, hospitalized, hospitals, log, tests, vaccinated ,activeCases}
