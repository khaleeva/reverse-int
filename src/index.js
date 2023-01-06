module.exports = function reverse (n) {
    let num = Math.abs(n)
    let str = num.toString().split('').reverse().join('')
    return Number(str)

}
