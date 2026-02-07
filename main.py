
def on_button_pressed_a():
    global mode
    mode = (mode + 1) % 5
    basic.show_number(mode)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global mode
    if mode > 0:
        mode = mode - 1
    else:
        mode = 4
    basic.show_number(mode)
input.on_button_pressed(Button.B, on_button_pressed_b)

mode = 0
PlanetX_AILens.init_module()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.CARD)
mode = 0
basic.show_number(mode)
car = 0

def on_forever():
    global car
    PlanetX_AILens.camera_image()
    if mode == 0:
        if PlanetX_AILens.traffic_card(PlanetX_AILens.trafficCards.FORWARD):
            basic.show_leds("""
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                """)
        elif PlanetX_AILens.traffic_card(PlanetX_AILens.trafficCards.BACK):
            basic.show_leds("""
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                """)
        elif PlanetX_AILens.traffic_card(PlanetX_AILens.trafficCards.STOP):
            basic.show_leds("""
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                """)
        elif PlanetX_AILens.traffic_card(PlanetX_AILens.trafficCards.TURNLEFT):
            basic.show_leds("""
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                """)
        elif PlanetX_AILens.traffic_card(PlanetX_AILens.trafficCards.TURNRIGHT):
            basic.show_leds("""
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                """)
    elif mode == 1:
        if PlanetX_AILens.other_card(PlanetX_AILens.otherCards.MOUSE):
            basic.show_string("Mouse")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.MICROBIT):
            basic.show_string("micro\"bit")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.RULER):
            basic.show_string("Ruler")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.CAT):
            basic.show_string("Cat")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.PEAR):
            basic.show_string("Pear")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.SHIP):
            basic.show_string("Ship")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.APPLE):
            basic.show_string("Apple")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.CAR):
            basic.show_string("Car")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.PEN):
            basic.show_string("Pen")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.DOG):
            basic.show_string("Dog")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.UMBRELLA):
            basic.show_string("Umbrella")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.AIRPLANE):
            basic.show_string("Airplane")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.CLOCK):
            basic.show_string("clock")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.GRAPE):
            basic.show_string("Grape")
        elif PlanetX_AILens.other_card(PlanetX_AILens.otherCards.CUP):
            basic.show_string("Cup")
    elif mode == 2:
        if PlanetX_AILens.number_card(PlanetX_AILens.numberCards.ZERO):
            basic.show_number(0)
        elif PlanetX_AILens.number_card(PlanetX_AILens.numberCards.ONE):
            basic.show_number(1)
        elif PlanetX_AILens.number_card(PlanetX_AILens.numberCards.TWO):
            basic.show_number(2)
        elif PlanetX_AILens.number_card(PlanetX_AILens.numberCards.THREE):
            basic.show_number(3)
        elif PlanetX_AILens.number_card(PlanetX_AILens.numberCards.FOUR):
            basic.show_number(4)
        elif PlanetX_AILens.number_card(PlanetX_AILens.numberCards.FIVE):
            basic.show_number(5)
        elif PlanetX_AILens.number_card(PlanetX_AILens.numberCards.SIX):
            basic.show_number(6)
        elif PlanetX_AILens.number_card(PlanetX_AILens.numberCards.SEVEN):
            basic.show_number(7)
        elif PlanetX_AILens.number_card(PlanetX_AILens.numberCards.EIGHT):
            basic.show_number(8)
        elif PlanetX_AILens.number_card(PlanetX_AILens.numberCards.NINE):
            basic.show_number(9)
    elif mode == 3:
        if PlanetX_AILens.letter_card(PlanetX_AILens.letterCards.A):
            basic.show_string("A")
        elif PlanetX_AILens.letter_card(PlanetX_AILens.letterCards.B):
            basic.show_string("B")
        elif PlanetX_AILens.letter_card(PlanetX_AILens.letterCards.C):
            basic.show_string("C")
        elif PlanetX_AILens.letter_card(PlanetX_AILens.letterCards.D):
            basic.show_string("D")
        elif PlanetX_AILens.letter_card(PlanetX_AILens.letterCards.E):
            basic.show_string("E")
    elif mode == 4:
        if PlanetX_AILens.traffic_card(PlanetX_AILens.trafficCards.FORWARD):
            car = 1
            basic.show_leds("""
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                """)
        elif PlanetX_AILens.traffic_card(PlanetX_AILens.trafficCards.BACK):
            car = 2
            basic.show_leds("""
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                """)
        elif PlanetX_AILens.traffic_card(PlanetX_AILens.trafficCards.STOP):
            car = 0
            basic.show_leds("""
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                """)
        elif PlanetX_AILens.traffic_card(PlanetX_AILens.trafficCards.TURNLEFT):
            car = 3
            basic.show_leds("""
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                """)
        elif PlanetX_AILens.traffic_card(PlanetX_AILens.trafficCards.TURNRIGHT):
            car = 4
            basic.show_leds("""
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                """)
    basic.pause(100)
basic.forever(on_forever)

def on_forever2():
    global car
    if car == 0:
        cuteBot.stopcar()
    elif car == 1:
        cuteBot.motors(30, 30)
    elif car == 2:
        cuteBot.motors(-30, -30)
    elif car == 3:
        cuteBot.motors(-30, 30)
        basic.pause(250)
        car = 0
    elif car == 4:
        cuteBot.motors(30, -30)
        basic.pause(250)
        car = 0
basic.forever(on_forever2)