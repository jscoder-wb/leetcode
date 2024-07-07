var findTarget = function(root, k) {
    let result = []
    const inorder = function (node) {
        if(!node) return 
        inorder(node.left)
        result.push(node.val)
        inorder(node.right)
    }   
    inorder(root)
    let left = 0, right = result.length - 1
    while(left < right){
        if(result[left] + result[right] == k) return true
        if(result[left] + result[right] < k) left++
        else right--
    }
    return false
};