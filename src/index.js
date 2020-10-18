// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arrays = [];
    if (matrix === null || matrix === undefined) {
        return arrays;
    } 
    else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 != 0) {
                arrays = arrays.concat(matrix[i].reverse());
            } else {
                arrays = arrays.concat(matrix[i]);
            }
        }
        return arrays;
    }
};
