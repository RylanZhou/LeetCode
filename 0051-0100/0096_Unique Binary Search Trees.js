/* ***********************************************************
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
************************************************************ */
/**
 * @param {number} n
 * @return {number}
 */
function numTrees(n) {
  // How many trees are there when there are (end - start + 1) nodes
  const recordMap = [1, 1, 2]

  const dfs = (start, end) => {
    if (start >= end) {
      return 1
    }

    if (recordMap[end - start + 1]) {
      return recordMap[end - start + 1]
    }

    let result = 0

    // i is the root
    for (let i = start; i <= end; i++) {
      // How many kinds of left trees
      const leftTrees = dfs(start, i - 1)
      // How many kinds of right trees
      const rightTrees = dfs(i + 1, end)

      result += leftTrees * rightTrees // NOTE: Multiply, not add
    }

    return (recordMap[end - start + 1] = result)
  }

  return dfs(1, n)
}

console.log(numTrees(0))

/* ***********************************************************
n = 0;     null   

count[0] = 1

n = 1;      1       

count[1] = 1 

n = 2;    1__       			 __2     
              \					/                 
        count[1]	   	count[1]	

count[2] = 1 + 1 = 2


n = 3;    1__				      __2__	               __3
              \		      /       \			       /		
         count[2]		 count[1]  count[1]		count[2]

count[3] = 2 + 1 + 2  = 5



n = 4;    1__  					__2__					   ___3___                  
             \				/       \					/		    \			
      count[3]		 count[1] count[2]  count[2]  count[1]

              __4				
            /
        count[3]   

count[4] = 5 + 2 + 2 + 5 = 14   
************************************************************ */
