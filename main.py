basic.show_icon(IconNames.HAPPY)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P1) == 0:
        basic.show_number(1)
        basic.pause(2000)
    else:
        if pins.digital_read_pin(DigitalPin.P2) == 0:
            basic.show_number(2)
            basic.pause(2000)
        else:
            if pins.digital_read_pin(DigitalPin.P8) == 0:
                basic.show_number(3)
                basic.pause(2000)
            else:
                if pins.digital_read_pin(DigitalPin.P12) == 0:
                    basic.show_number(4)
                    basic.pause(2000)
                else:
                    basic.show_icon(IconNames.YES)
basic.forever(on_forever)
