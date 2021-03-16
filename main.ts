input.onButtonPressed(Button.A, function () {
    if (onoff == true) {
        onoff = false
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (onoff == false) {
        onoff = true
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
let moistness = 0
let onoff = false
servos.P0.setAngle(90)
basic.showIcon(IconNames.SmallHeart)
basic.clearScreen()
basic.forever(function () {
    while (onoff == true) {
        moistness = pins.analogReadPin(AnalogPin.P0)
        if (Math.map(moistness, 0, 1023, 0, 180) >= 70) {
            servos.P0.setAngle(120)
            basic.pause(3000)
            servos.P0.setAngle(30)
        }
        basic.pause(5000)
    }
    basic.pause(50)
})
