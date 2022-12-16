var MyQueue = function () {
    data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    data.push(x);
    return data;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    return data.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return data[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return data.length === 0;
};
