y = 0
x = 0

while True:
    for i in range(5):
        led.plot(x%5, y)
        y += 1 
    x += 1
    basic.pause(300)
    basic.clear_screen()
    y = 0

        
             

    

