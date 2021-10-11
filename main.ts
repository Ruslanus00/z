let x = 0
let y = 0
let n = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    x = 0
    y = 0
    n = 4
    led.plot(x, y)
    basic.pause(100)
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index < n; index++) {
            led.unplot(x, y)
            x += 1
            led.plot(x, y)
            basic.pause(100)
        }
        for (let index = 0; index < n; index++) {
            led.unplot(x, y)
            y += 1
            led.plot(x, y)
            basic.pause(100)
        }
        for (let index = 0; index < n; index++) {
            led.unplot(x, y)
            x += -1
            led.plot(x, y)
            basic.pause(100)
        }
    }
    n = 3
    for (let index = 0; index < n; index++) {
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
        basic.pause(100)
    }
    x = 0
    y = 1
    for (let index = 0; index < n; index++) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
        basic.pause(100)
    }
    n = 2
    for (let index = 0; index < n; index++) {
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
        basic.pause(100)
    }
    x = 3
    y = 3
    for (let index = 0; index < n; index++) {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
        basic.pause(100)
    }
    n = 1
    for (let index = 0; index < n; index++) {
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
        basic.pause(100)
    }
    for (let index = 0; index < n; index++) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
