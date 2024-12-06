"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
    }
}
const sorter = new Sorter([9, 5, 13, -4]);
sorter.sort();
console.log(sorter.collection);
