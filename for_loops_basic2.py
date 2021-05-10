#1 Biggie Size 
def biggie_size(list):
    for i in range(len(list)):
        if list[i] > 0:
            list[i] = "big"
    return list
print(biggie_size([4,-1,5,-9,4,3,-16]))
#OP: ['big', -1, 'big', -9, 'big', 'big', -16]

#2 Count Positives 
def count_positives(list2):
    count = 0
    for i in range(len(list2)):
        if list2[i] > 0:
            count = count + 1
    list2[i] = count
    return list2
print(count_positives([4,5,7,-1,-12,3,0,-5]))
#OP:[4, 5, 7, -1, -12, 3, 0, 4]

#3 Sum Total 
def sum_total(list3):
    sum = 0
    for i in range(len(list3)):
        sum = list3[i] + sum
    return sum
print(sum_total([1,2,3,4,7]))
#OP: 17

#4 Average
def average(list4):
    sum = 0
    for i in range(len(list4)):
        sum = list4[i] + sum
    return sum/len(list4)
print(average([2,4,6,8,10]))
#OP: 6.0

#5 Length 
def length(list5):
    count = 0
    for i in range(len(list5)):
        count = count + 1
    return count
print(length([5,4,2,7]))
#OP: 4

#6 Minimum
def minimum(list6):
    min = 0
    for i in range(len(list6)):
        if list6[i] < list6[i-1]:
            min = list6[i]
    return min
print(minimum([4,5,2,3,3]))
#OP: 2

#7 Maximum  
def maximum(list7):
    max = 0
    for i in range(len(list7)):
        if list7[i] > list7[i-1]:
            max = list7[i]
    return max 
print(maximum([3,4,5,2,6,6,10]))
#OP: 10

#8 Ultimate Analysis
def ultimate_analysis(list8):
    sum = 0
    min = list8[0]
    max = list8[0]
    for i in range(len(list8)):
        sum = list8[i] + sum
        if list8[i] < min:
            min = list8[i]
        if list8[i] > max:
            max = list8[i]
    return {
        'sumTotal': sum,
        'average': sum/len(list8),
        'minimum': min,
        'maximum': max,
        'length': len(list8),
    }
print(ultimate_analysis([4,5,9,1,3]))
#OP: {'sumTotal': 22, 'average': 4.4, 'minimum': 1, 'maximum': 9, 'length': 5}

#9 Reverse List 
def reverse_list(list9):
    list9.reverse()
    return list9
print(reverse_list([5,6,7,8,9]))
#OP:[9, 8, 7, 6, 5]
