const API_URL = '/db.json'
const response = await fetch(API_URL)
const data = await response.json()

console.log(data.products)