function Device(name, power){
    this.name = name
    this.voltage = 220
    this.power = power
    this.switch = false
}

Device.prototype.switchDevice = function () {
    this.switch = !this.switch
    const on_off = this.switch ? 'On' : 'Off'
    console.log(`device ${this.name} is switched ${on_off}`)
}

Device.prototype.getPower = function(){
    return this.switch ? this.power : 0
}

Device.prototype.getCurrent = function () {
    const current = this.power / this.voltage
    return this.switch ? current : 0
}

function CommonDevices (name, power, type, color) {
    this.name = name
    this.power = power
    this.type = type
    this.color = color
    console.log(`New common device ${name}`)
}
CommonDevices.prototype = new Device()

function Electronics (name, power, batteryPercent, batteryCapacity) {
    this.name = name
    this.power = power
    this.batteryPercent = batteryPercent
    this.batteryCapacity = batteryCapacity
    console.log(`New electornic device ${name}`)
}
Electronics.prototype = new Device()

// Electronics.prototype.chargeBattery = function(chargeTimeHours){
//     this.switch
//     this.batteryPercent += chargeTimeHours * this.getCurrent() * 0.001 //mAH
// }

//create instances of a Device childs
lamp = new CommonDevices('Ikea lamp', 10, 'Led_lamp', 'blue')
laptop = new Electronics("HP laptop", 100 , 50, 4500)

lamp.switchDevice()
laptop.switchDevice()

function totalPower(devices) {
    let total = 0
    for (const device of devices)
         total += device.getPower()
    return total
}
let devices = [lamp, laptop]

console.log(`Total power = ${totalPower(devices)} watt`)

lamp.switchDevice()
console.log(`Total power = ${totalPower(devices)} watt`)

laptop.switchDevice()
console.log(`Total power = ${totalPower(devices)} watt`)

console.log(lamp)
console.log(laptop)

