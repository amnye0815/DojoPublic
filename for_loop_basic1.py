#1
for x in range (151):
    print(x)

#2
for x in range(5, 1001, 1):
    if x % 5 == 0:
        print(x)

#3
for x in range(1, 101, 1):
    if x % 5 == 0:
        print("Coding")
    elif x % 10 ==0:
        print("Coding Dojo")
    else:
        print(x)

#4
sum = 0
for x in range(500001):
    if x % 2 == 1:
        sum = x + sum
print(sum)

#5
for x in range(2018, 0, -4):
    if x % 2 == 0:
        print(x)

#6
lowNum = 2
highNum = 15
mult = 5
for x in range(lowNum, highNum, 1):
    if x % mult == 0:
        print(x)