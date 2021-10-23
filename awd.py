from turtle import *
color('blue', 'yellow')
begin_fill()

x=1
z=99
while True:
    x=x+1
    z=z-1
    speed(99)
    forward(x)
    right(z)

    if abs(pos()) < 1:
        break
end_fill()
done()
