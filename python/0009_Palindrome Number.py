# Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

# Example 1:
# Input: 121
# Output: true

# Example 2:
# Input: -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

# Example 3:
# Input: 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

class Solution:
    def isPalindrome(self, x: int) -> bool:
        s = str(x)
        length = len(s)
        half = (length - 1) / 2
        pos = 0
        while pos <= half and s[pos] == s[length - pos - 1]:
            pos += 1
        
        return True if pos > half else False


if __name__ == "__main__":
    s = Solution()
    print(s.isPalindrome(-11))