basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showNumber(1)
        basic.pause(2000)
    } else {
    	
    }
})
