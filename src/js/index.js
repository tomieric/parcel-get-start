const Math = require('./math.js')
const Async = import('./async.js')
console.log('parcel', Math.add(1, 2))
Async.then(data => {
  console.log(data.msg)
})