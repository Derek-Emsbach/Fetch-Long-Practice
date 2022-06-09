/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
const fetch('/products', {
  method : "POST",
  header : {
      "Content-Type" : "application/x-www-form-urlencoded"
  },
  body : new URLSearchParams({
      "name" : 'Plumbus',
      "description" : 'Rick & Morty',
      "price" : 21.09,
      "categories" : "grocery"
  })

})


/* ============================== Phase 2 ============================== */

// Your code here
fetch('/products', {
  method : "POST",
  header : {
      "Content-Type" : "application/x-www-form-urlencoded"
  },
  body : new URLSearchParams({
      "name" : 'Caribbean Delight Coffee',
      "description" : 'Made by Manatee Coffee',
      "price" : 11.09,
      "categories" : "grocery"
  })

}).then((resObj) => {
  console.log(resObj.status)
  return resObj
})
.then(res => console.log(res))



fetch('/products', {
  method : "POST",
  header : {
      "Content-Type" : "application/x-www-form-urlencoded"
  },
  body : new URLSearchParams({
      "name" : 'Caribbean Delight Coffee',
      "description" : 'Made by Manatee Coffee',
      "price" : 11.09,
      "categories" : "grocery"
  })

}).then((resObj) => {
  return resObj.text()
}).then((resObj) => console.log(resObj))


/* ============================== Phase 3 ============================== */

// Your code here
