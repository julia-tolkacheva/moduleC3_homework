class Device {
    constructor(name, power) {
        this.name = name
        this.voltage = 220
        this.power = power
        this.switch = false
    }
    switchDevice() {
        this.switch = !this.switch
        const on_off = this.switch ? 'On' : 'Off'
        console.log(`device ${this.name} is switched ${on_off}`)
    }
    switchDeviceOff() {
        this.switch = false
        console.log(`device ${this.name} is switched Off`)
    }
    switchDeviceOn() {
        this.switch = true
        console.log(`device ${this.name} is switched On`)
    }
    getPower(){
        return this.switch ? this.power : 0
    }

    getCurrent() {
        const current = this.power / this.voltage
        return this.switch ? current : 0
    }

}
class CommonDevice extends Device {
    constructor(name, power, type, color) {
        super(name, power);
        this.type = type
        this.color = color
        console.log(`New common device ${name}`)
    }
}
class Electronics extends Device {
    constructor(name, power, batteryPercent, batteryCapacity) {
        super(name, power);
        this.batteryPercent = batteryPercent
        this.batteryCapacity = batteryCapacity
        console.log(`New electornic device ${name}`)
    }
    chargeBattery (chargeTimeHours){
        this.switchDeviceOn()
        this.batteryPercent += chargeTimeHours * this.getCurrent() * 0.001 //mAH
        this.switchDeviceOff()
    }
    workBattery (workTimeHours){
        this.switchDeviceOn()
        this.batteryPercent -= workTimeHours * this.getCurrent() * 0.001 //mAH
        this.switchDeviceOff()
    }
}



//create instances of a Device childs
lamp = new CommonDevice('Ikea lamp', 10, 'Led_lamp', 'blue')
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

