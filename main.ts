basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showNumber(1)
        basic.pause(2000)
    } else {
        if (pins.digitalReadPin(DigitalPin.P2) == 0) {
            basic.showNumber(2)
            basic.pause(2000)
        } else {
            if (pins.digitalReadPin(DigitalPin.P8) == 0) {
                basic.showNumber(3)
                basic.pause(2000)
            } else {
                if (pins.digitalReadPin(DigitalPin.P12) == 0) {
                    basic.showNumber(4)
                    basic.pause(2000)
                } else {
                    basic.showIcon(IconNames.Yes)
                }
            }
        }
    }
})
