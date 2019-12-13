const firebase = require('firebase/app')
// Required for side-effects
require('firebase/firestore')

firebase.initializeApp({
  apiKey: 'AIzaSyASf9fqX51K6-PGpaU1QG4thSLq55o2Uns',
  authDomain: 'teakoes-goat.firebaseapp.com',
  projectId: 'teakoes-goat'
})

module.exports = firebase
