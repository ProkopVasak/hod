let y = 0
let x = 0
while (true) {
    for (let i = 0; i < 5; i++) {
        led.plot(x % 5, y)
        y += 1
    }
    x += 1
    basic.pause(300)
    basic.clearScreen()
    y = 0
}
