import java.util.List;

/*****************************************
 [Description]
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 [Input]
 (2 -> 4 -> 3) + (5 -> 6 -> 4)
 [Output]
 7 -> 0 -> 8
 [0, 1]
 ******************************************/
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

public class P0002_Add_Two_Numbers {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode l1Iter = l1;
        ListNode l2Iter = l2;

        ListNode result = new ListNode(0);
        ListNode resultIter = result;

        int carrier = 0;

        while (l1Iter != null || l2Iter != null) {
            int digitSum = (l1Iter == null ? 0 : l1Iter.val) + (l2Iter == null ? 0 : l2Iter.val) + carrier;
            carrier = digitSum >= 10 ? 1 : 0;
            resultIter.val += digitSum % 10;

            l1Iter = l1Iter == null ? null : l1Iter.next;
            l2Iter = l2Iter == null ? null : l2Iter.next;
            if (l1Iter != null || l2Iter != null) {
                resultIter.next = new ListNode(0);
                resultIter = resultIter.next;
            }
        }

        if (carrier != 0) {
            resultIter.next = new ListNode(carrier);
        }

        return result;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);
        ListNode l2 = new ListNode(0);

        P0002_Add_Two_Numbers solution = new P0002_Add_Two_Numbers();
        ListNode result = solution.addTwoNumbers(l1, l2);
        ListNode temp = result;
        while (temp != null) {
            System.out.println(temp.val);
            temp = temp.next;
        }
    }
}
