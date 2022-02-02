class Solution:
    def increasingTriplet(self, nums):
        triplet = False
        if len(set(nums))<3:
            return False
        else:
            for i in range(1, len(nums)-1):
                before = list(filter((nums[i]).__gt__, nums[:i]))
                after = list(filter((nums[i]).__lt__, nums[i:]))
        
                if len(before)>0 and len(after)>0:
                    triplet = True

        return triplet
