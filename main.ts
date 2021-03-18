input.onButtonPressed(Button.A, function () {
    if (onoff == false) {
        onoff = true
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (onoff == true) {
        onoff = false
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (flippy_boi == false) {
        flippy_boi = true
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            # . # # .
            # # . . .
            `)
        basic.pause(100)
        basic.clearScreen()
        servos.P0.setAngle(120)
    } else if (flippy_boi == true) {
        flippy_boi = false
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.pause(100)
        basic.clearScreen()
        servos.P0.setAngle(30)
    }
})
let moistness = 0
let flippy_boi = false
let onoff = false
servos.P0.setAngle(20)
basic.showIcon(IconNames.SmallHeart)
basic.clearScreen()
onoff = false
flippy_boi = false
basic.forever(function () {
    while (onoff == true) {
        moistness = pins.analogReadPin(AnalogPin.P1)
        if (Math.map(moistness, 0, 1023, 0, 180) <= 70) {
            servos.P0.setAngle(120)
            basic.pause(3000)
            servos.P0.setAngle(30)
        }
        basic.pause(5000)
    }
    basic.pause(50)
})
