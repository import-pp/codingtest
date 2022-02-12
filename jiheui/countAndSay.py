class Solution:
    def countAndSay(self, n: int) -> str:
        result=''
        while n>0:
            if not result:
                result = "1"
            else:
                elements=[]
                for i in result:
                    if not elements:
                        elements.append((i,1))
                    else:
                        key,value=elements[-1]
                        if key == i:
                            elements.pop(-1)
                            elements.append((i,value+1))
                        else:
                            elements.append((i,1))
                result=''
                for j in elements:
                    key,value=j
                    result+=str(value)+key
            n-=1
        return result


            







solution = Solution()
print(solution.countAndSay(8))
