function filter(items,cb){
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        cb(element)
    }
}
module.exports = filter;