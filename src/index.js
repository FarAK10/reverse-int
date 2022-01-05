module.exports = function reverse(n) {
    n = Math.abs(n);
    var str = n.toString();
    var end = 0;
    for (let i = 0; i < str.length; i++) {
        var cur = n % 10;
        n = Math.floor(n / 10);
        end = end * 10 + cur;
    }
    return end;
};
