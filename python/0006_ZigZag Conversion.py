# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"

# Write the code that will take a string and make this conversion given a number of rows:

# string convert(string s, int numRows);

# Example 1:
# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"

# Example 2:
# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:

# P     I    N
# A   L S  I G
# Y A   H R
# P     I

class Solution:
    def convert(self, s: str, numRows: int) -> str:
        length = len(s)
        if length <= numRows or numRows == 1:
            return s

        result = ''

        for row in range(numRows):
            step = [2 * (numRows - row - 1), 2 * row]
            current_step = 0
            start_pos = row
            result += s[start_pos]
            while start_pos + step[current_step % 2] < length:
                result += ('' 
                    if step[current_step % 2] == 0 else 
                    s[start_pos + step[current_step % 2]]
                )
                start_pos += step[current_step % 2]
                current_step += 1
        
        return result


if __name__ == "__main__":
    s = Solution()
    print(s.convert('PAYPALISHIRING', 10))