from itertools import combinations, product, permutations

def combination (lst):
    everyPossible=[]
    for size in range(1,len(lst)+1):
        for x in (combinations(lst,size)):
            everyPossible.append(','.join(x))

    uniqueResult = []
    for i in everyPossible:
        if i.count('head')<2 and i.count('top')<2 and i.count('bottom')<2 and i.count('jacket')<2:
            uniqueResult.append(i)

    return len(uniqueResult)

def maxClothes():
    number = eval(input("What is the maximum number of clothes overall?  "))
    print()
    
    clothes = []
    for headNum, topNum, bottomNum, jacketNum in product(range(1,number),range(1,number),range(1,number),range(1,number)):
        if headNum+topNum+bottomNum+jacketNum == number:
            clothes.append([headNum, topNum, bottomNum,jacketNum])

    count = 1
    total = 0
    possibleCases = {}
    for i in range(len(clothes)):
        possibleClothes = []
        [possibleClothes.append('head'+str(i+1)) for i in range(clothes[i][0])]
        [possibleClothes.append('top'+str(i+1)) for i in range(clothes[i][1])]
        [possibleClothes.append('bottom'+str(i+1)) for i in range(clothes[i][2])]
        [possibleClothes.append('jacket'+str(i+1)) for i in range(clothes[i][3])]
        possibleCases['case'+str(count)] = combination(possibleClothes)
        count+=1
        total+=combination(possibleClothes)

    print("Result for each cases are:")
    for i in possibleCases:
        print(i, possibleCases[i])

    print()
    print("Total number of the possibilities are: " + str(total))

   
##Run
maxClothes()
