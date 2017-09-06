console.log('script sourced');

const maxVoltage = 1000;

class ElectricDrill {
  constructor(brand, color, currentCharge, torque) {
    this.brand = brand;
    this.color = color;
    this.currentCharge = currentCharge;
    this.torque = torque;
  }


  charge(volts) {
    if (volts + this.currentCharge <= maxVoltage) {
      this.currentCharge += volts;
    } else {
      console.log('cannot overcharge', this.color, this.brand);

    }
  }
}

let sabrinasDrill = new ElectricDrill("Ryobi", "Green", 650, 55);
let ericsDrill = new ElectricDrill("Milwaukee", "Red", 430, 75);

console.log(sabrinasDrill);
console.log(ericsDrill);
console.log('==============================================');
console.log("Sabrina's maxVoltage", maxVoltage);
console.log("Sabrina's currentCharge", sabrinasDrill.currentCharge);
console.log("Sabrina's additional charge", 200);
sabrinasDrill.charge(200);
console.log("Sabrina's current charge", sabrinasDrill.currentCharge);
console.log('==============================================');
console.log("Eric's maxVoltage", maxVoltage);
console.log("Eric's currentCharge", ericsDrill.currentCharge);
console.log("Eric's additional charge", 600);
ericsDrill.charge(600);
console.log("Eric's current charge", ericsDrill.currentCharge);