// dfs approach 
var pathSum = function(root, targetSum) {
    let answer = 0;
    const helper = (root, sum) => {
        if(!root) return;
        sum -= root.val;
        if(sum === 0) answer++;
        helper(root.left, sum);
        helper(root.right, sum);
    }
    const main = (root, sum) => {
        if(!root) return 
        helper(root, sum);
        main(root.left, sum);
        main(root.right, sum);
        return 
    }
    main(root, targetSum);
    return answer;
};