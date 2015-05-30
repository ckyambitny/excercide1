var Calculator = function (a) {
    var operationList = {
        add: function (y) {
            a += y;
            return operationList;
        },
        multiply: function (z){
            a *= z;
            return this;
        },
        value: function () {
            return a;
        }
    };
    return operationList; 
};

module.exports = Calculator;
