// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!arguments.length) return [];
    let res = [];
    matrix.forEach((el, index) => {
        if ((index + 1) % 2) {
            for (let i = 0; i < el.length; i++) {
                res.push(el[i]);
            }
        } else {
            for (let i = el.length; i > 0; i = i - 1) {
                res.push(el[i - 1]);
            }
        }
    });
    return res;
};
