# There are two sorted arrays nums1 and nums2 of size m and n respectively.

# Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

# You may assume nums1 and nums2 cannot be both empty.

# Example 1:
# nums1 = [1, 3]
# nums2 = [2]
# The median is 2.0

# Example 2:
# nums1 = [1, 2]
# nums2 = [3, 4]
# The median is (2 + 3)/2 = 2.5

class Solution:
    def findMedianSortedArrays(self, nums1: [int], nums2: [int]) -> float:
        len1, len2 = len(nums1), len(nums2)
        half_length = (len1 + len2) / 2
        index1, index2 = 0, 0
        current, last = None, None
        while index1 + index2 <= half_length:
            last = current
            if index2 >= len2:
                current = nums1[index1]
                index1 += 1
            elif index1 >= len1:
                current = nums2[index2]
                index2 += 1
            elif nums1[index1] < nums2[index2]:
                current = nums1[index1]
                index1 += 1
            else:
                current = nums2[index2]
                index2 += 1

        if (len1 + len2) % 2:  # Odd
            return float(current)
        else:  # Even
            return (current + last) / 2


if __name__ == "__main__":
    s = Solution()
    print(s.findMedianSortedArrays([1], [2, 2, 2, 2]))