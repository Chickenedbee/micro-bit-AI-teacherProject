input.onButtonPressed(Button.A, function () {
    mode = (mode + 1) % 5
    basic.showNumber(mode)
})
input.onButtonPressed(Button.B, function () {
    if (mode > 0) {
        mode = mode - 1
    } else {
        mode = 4
    }
    basic.showNumber(mode)
})
let car = 0
let mode = 0
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Card)
mode = 0
basic.showNumber(mode)
basic.forever(function () {
    if (car == 0) {
        cuteBot.stopcar()
    } else if (car == 1) {
        cuteBot.motors(30, 30)
    } else if (car == 2) {
        cuteBot.motors(-30, -30)
    } else if (car == 3) {
        cuteBot.motors(-30, 30)
        basic.pause(250)
        car = 0
    } else if (car == 4) {
        cuteBot.motors(30, -30)
        basic.pause(250)
        car = 0
    }
})
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (mode == 0) {
        if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.forward)) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.back)) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.stop)) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnleft)) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnright)) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
    } else if (mode == 1) {
        if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.mouse)) {
            basic.showString("Mouse")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.microbit)) {
            basic.showString("micro\"bit")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.ruler)) {
            basic.showString("Ruler")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.cat)) {
            basic.showString("Cat")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.pear)) {
            basic.showString("Pear")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.ship)) {
            basic.showString("Ship")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.apple)) {
            basic.showString("Apple")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.car)) {
            basic.showString("Car")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.pen)) {
            basic.showString("Pen")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.dog)) {
            basic.showString("Dog")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.umbrella)) {
            basic.showString("Umbrella")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.airplane)) {
            basic.showString("Airplane")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.clock)) {
            basic.showString("clock")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.grape)) {
            basic.showString("Grape")
        } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.cup)) {
            basic.showString("Cup")
        }
    } else if (mode == 2) {
        if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.zero)) {
            basic.showNumber(0)
        } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.one)) {
            basic.showNumber(1)
        } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.two)) {
            basic.showNumber(2)
        } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.three)) {
            basic.showNumber(3)
        } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.four)) {
            basic.showNumber(4)
        } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.five)) {
            basic.showNumber(5)
        } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.six)) {
            basic.showNumber(6)
        } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.seven)) {
            basic.showNumber(7)
        } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.eight)) {
            basic.showNumber(8)
        } else if (PlanetX_AILens.numberCard(PlanetX_AILens.numberCards.nine)) {
            basic.showNumber(9)
        }
    } else if (mode == 3) {
        if (PlanetX_AILens.letterCard(PlanetX_AILens.letterCards.A)) {
            basic.showString("A")
        } else if (PlanetX_AILens.letterCard(PlanetX_AILens.letterCards.B)) {
            basic.showString("B")
        } else if (PlanetX_AILens.letterCard(PlanetX_AILens.letterCards.C)) {
            basic.showString("C")
        } else if (PlanetX_AILens.letterCard(PlanetX_AILens.letterCards.D)) {
            basic.showString("D")
        } else if (PlanetX_AILens.letterCard(PlanetX_AILens.letterCards.E)) {
            basic.showString("E")
        }
    } else if (mode == 4) {
        if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.forward)) {
            car = 1
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.back)) {
            car = 2
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.stop)) {
            car = 0
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnleft)) {
            car = 3
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnright)) {
            car = 4
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
    }
    basic.pause(100)
})
