module.exports = {
    sub(a,b){
        return a + b
    },
    max(a,b){
        return Math.max(a,b)
    },
    init({command,option}){
        console.log(`执行${command},参数${option}`)
    }
}