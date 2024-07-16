var getDirections = function (root, startValue, destValue) {
  const lca = findLCA(root, startValue, destValue)
  const depth = findDepth(lca, startValue)
  const path = findPath(lca, destValue)
  return 'U'.repeat(depth).concat(path) // we reapeat the depth, and concat the path
};

// Find Least Common Ancestor
function findLCA(root, s, d) {
  if (!root) return null
  if (root.val === s || root.val === d) return root
  const left = findLCA(root.left, s, d)
  const right = findLCA(root.right, s, d)
  if (left && right)
    return root
  return left || right
}

// Find depth to target, i.e UU...
function findDepth(root, val, count = 0) {
  if (!root) return 0
  if (root.val === val) return count
  return findDepth(root.left, val, count + 1) ||
    findDepth(root.right, val, count + 1)
}

// Find path to target, i.e LR...
function findPath(root, val, str = '') {
  if (!root) return ''
  if (root.val === val) return str
  return findPath(root.left, val, str + 'L') ||
    findPath(root.right, val, str + 'R')
}
// let root = {val: 5}
// root.left = {val: 1}
// root.right = {val: 2}
// root.left.left = {val: 3}
// root.right.left = {val: 6}
// root.right.right = {val: 4}
// getDirections(root, 3, 6)