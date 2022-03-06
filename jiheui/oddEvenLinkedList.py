class Solution:
    def oddEvenList(self, head):
        lst, p = [], head
        while p:
            lst.append(p.val)
            p=p.next

        resultLst = lst[0::2]+lst[1::2]

        p=head
        for i in range(len(resultLst)):
            p.val = resultLst[i]
            p=p.next
        return head


class Solution:
    def oddEvenList(self, head):
        if not head:
            return
        
        odd, even = head, head.next
        evenHead = even
        
        while even and even.next:
            odd.next = even.next
            odd = odd.next
            even.next = odd.next
            even = even.next
        
        odd.next = evenHead
        return head
