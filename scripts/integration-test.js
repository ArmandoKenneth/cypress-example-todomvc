// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'
process.env.PUBLIC_URL = ''

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

require('../node_modules/.bin/cypress')

// Ensure environment variables are read.
// require('../config/env')

// const fetch = require('node-fetch')

// fetch(process.env.REACT_APP_API_ROOT + '/api/cleanup', {
//   method: 'POST'
// })
//   .then(response => {
//     if (response.status !== 200) {
//       return response.json()
//     }
//     return { status: response.status }
//   })
//   .then(response => {
//     if (response.status === 200) {
// require('../node_modules/.bin/cypress')
//   } else {
//     throw new Error(
//       `${response.status} error: ${response.error} -> ${response.exception}`
//     )
//   }
// })
