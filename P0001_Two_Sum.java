import java.util.Arrays;

/*****************************************
 [Description]
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 [Input]
 nums = [2, 7, 11, 15]
 target = 9
 [Output]
 [0, 1]
 ******************************************/
public class P0001_Two_Sum {
    /**
     * @param {int[]} nums
     * @param {number} target
     * @return {int[]}
     */
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length - 1; i++) {
            if (i > 1 && nums[i] == nums[i - 1]) {
                continue;
            }
            int j = i + 1;
            while (j < nums.length) {
                if (nums[i] + nums[j] == target) {
                    int[] result = {i, j};
                    return result;
                }
                j++;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        P0001_Two_Sum solution = new P0001_Two_Sum();
        int[] testCase = {2, 13, 11, 7};
        int[] result = solution.twoSum(testCase, 9);
        System.out.println(result[0] + " " + result[1]);
    }
}
