# Reverse bits of a given 32 bits unsigned integer.

# Example 1:
# Input: 00000010100101000001111010011100
# Output: 00111001011110000010100101000000
# Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

# Example 2:
# Input: 11111111111111111111111111111101
# Output: 10111111111111111111111111111111
# Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

class Solution:
    # @param n, an integer
    # @return an integer
    def reverseBits(self, n):
        return int('{:032b}'.format(n)[::-1], 2)
    

if __name__ == "__main__":
    s = Solution()
    print(s.reverseBits(4294967293))
