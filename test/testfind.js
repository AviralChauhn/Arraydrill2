const items = require("../data")
const find = require("../find")

const ispresent=find(items, function cb(item,index){
 return item==8;
})
console.log(ispresent)