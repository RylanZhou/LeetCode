# Given a string, find the length of the longest substring without repeating characters.

# Example 1:
# Input: "abcabcbb"
# Output: 3 
# Explanation: The answer is "abc", with the length of 3. 

# Example 2:
# Input: "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.

# Example 3:
# Input: "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3. 
#              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        length = len(s)
        if length == 0 or length == 1:
            return length

        max_count = 0
        front, rear = 0, 0
        char_map = {}

        while rear < length:
            if s[rear] not in char_map or char_map[s[rear]] < front:
                # The length of [0:4] is 5
                max_count = max([rear - front + 1, max_count]) 
            else:
                front = char_map[s[rear]] + 1

            char_map[s[rear]] = rear
            rear += 1
        
        return max_count


if __name__ == "__main__":
    s = Solution()
    print(s.lengthOfLongestSubstring('aaaaa'))
