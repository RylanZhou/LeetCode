# Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

# Example 1:
# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.

# Example 2:
# Input: "cbbd"
# Output: "bb"

class Solution:
    def longestPalindrome(self, s: str) -> str:
        length = len(s)
        if length < 2:
            return s

        current_pos, result = 0, s[0]

        while current_pos < length and len(result) + current_pos < length:
            temp = s[current_pos]
            offset_front, offset_rear = 1, 1
            
            # To deal with subsequences like 'aa' or 'aaa'
            while current_pos + 1 < length and s[current_pos] == s[current_pos + 1]:
                temp += s[current_pos + 1]
                current_pos += 1
                offset_front += 1

            # If 'bab' is palindrome, is 'xabay' palindrome?
            while (current_pos - offset_front >= 0 and 
                current_pos + offset_rear < length and 
                s[current_pos - offset_front] == s[current_pos + offset_rear]
            ):
                temp = s[current_pos - offset_front : current_pos + offset_rear + 1]
                offset_front += 1
                offset_rear += 1

            if len(temp) > len(result):
                result = temp
            current_pos += 1
        
        return result


if __name__ == "__main__":
    s = Solution()
    print(s.longestPalindrome('bacccccba'))