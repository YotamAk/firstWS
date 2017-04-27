'use strice';
var Emitter = require('events');

class Achievements extends Emitter {

    constructor(amountMedals, name) {
        super();
        this.name = name;
        this.medals= amountMedals;
        this.on("medalsAmountChange", this.medalsAmountChange);
    }

    plusMedals() {
        this.medals++;
        this.emit('medalsAmountChange');
    }

    minusMedals() {
        if(this.medals==0){
        console.log(`Error: The number of medals is less than zero`);
        }
        else{
        this.medals--;
        this.emit('medalsAmountChange');
        }
    }

   getAllData() {
        var data = {Name: `${this.name}`,                                 
                    Medals: `${this.medals}`};
        return data;
    }

   medalsAmountChange(){
    console.log(`The Achievement in ${this.name} change to ${this.medals} medals`);
   }


};

module.exports = function(amountMedals, name) {
    var a = new Achievements(amountMedals, name);
    return a;
}
