var Grub = require('./Grub');

var Bee = function () {
    Grub.call(this, this.food);
    this.age= 5;
    this.color = 'yellow';
    this.job = 'keep on growing';

};

Bee.prototype = new Grub();
Bee.prototype.constructor = Bee 

module.exports = Bee;
