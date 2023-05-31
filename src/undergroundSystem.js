var UndergroundSystem = function () {
    this.customers = {};
    this.stations = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    this.customers[id] = { station: stationName, time: t };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    if (this.customers.hasOwnProperty(id)) {
        let { station, time: startTime } = this.customers[id];
        if (!this.stations[[station, stationName]]) {
            this.stations[[station, stationName]] = { diffTime: t - startTime, cnt: 1 };
        } else {
            this.stations[[station, stationName]].diffTime += t - startTime;
            this.stations[[station, stationName]].cnt++;
            delete this.customers[id];
        }
    }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    let { diffTime, cnt } = this.stations[[startStation, endStation]];
    return diffTime / cnt;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
