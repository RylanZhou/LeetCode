# Given a 32-bit signed integer, reverse digits of an integer.

# Example 1:
# Input: 123
# Output: 321

# Example 2:
# Input: -123
# Output: -321

# Example 3:
# Input: 120
# Output: 21

# Note:
# Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

class Solution:
    def reverse(self, x: int) -> int:
        BORDER = pow(2, 31)
        
        result, x_abs = 0, abs(x)
        while x_abs:
            result = result * 10 + x_abs % 10
            x_abs = int(x_abs / 10)

        # Read carefully: Returns 0 when the REVERSED INTEGER overflows.
        if result > BORDER - 1 or result < -BORDER:
            return 0

        return result if x >= 0 else -result


if __name__ == "__main__":
    s = Solution()
    print(s.reverse(340000))