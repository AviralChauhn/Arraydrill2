function find (items,cb){
    let num
    for (let index = 0; index < items.length; index++) {
        
       if(cb(items[index],index)){
        return items[index]
       }
    }
    return undefined
}
module.exports = find ;