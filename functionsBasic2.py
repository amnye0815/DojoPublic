#1 - Countdown
def countdown(num):
    list1 = []
    for x in range(num, -1, -1):
        list1.append(x)
    return list1
print(countdown(16))

#OP: [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

#2 - Print and Return
def printAndReturn(list2):
    print(list2[0])
    return(list2[1])
print(printAndReturn([15,20]))

#OP: 15, 20

#3 - First Plus Length
def first_plus_length(list3):
    return(list3[0] + len(list3))
print(first_plus_length([3, 5, 6, 10, 15, 2]))

#OP: 9

#4 - Values Greater than Second
def values_greater(list4):
    new_list = []
    second_val = list4[1]
    for x in range(len(list4)):
        if list4[x] > second_val:
            new_list.append(list4[x])
    print(len(new_list))
    return new_list
print(values_greater([2,3,5,8,1,10,17]))

#OP: 4, [5, 8, 10, 17]

#5 This Length, That Value
def this_len_that_val(size, value):
    list5 = []
    for num in range(size):
        list5.append(value)
    return list5
print(this_len_that_val(7,3))

#OP: [3, 3, 3, 3, 3, 3, 3]