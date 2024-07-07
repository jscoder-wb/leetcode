// Trie solution 
class TrieNode {
  constructor() {
    this.children = {}
  }
  insert(word) {
    let cur = this;
    for (const w of word) {
      if (!cur.children[w]) cur.children[w] = new TrieNode();
      cur = cur.children[w];
    }
    cur.endWord = true;
    cur.wordStr = word;
  }
  search(prefix) {
    let cur = this;
    for (const c of prefix) {
      if (cur.children[c]) cur = cur.children[c];
      else return [];
    }
    const list = [];
    const dfs = (node) => {
      if (node.endWord) list.push(node.wordStr);
      for (const child in node.children) dfs(node.children[child]);
    };
    dfs(cur);
    list.sort();
    return list.splice(0, 3); // deletes 3 elements from 0 index and returns them
  }
}
var suggestedProducts = function (products, searchWord) {
  const root = new TrieNode();
  for (const word of products) root.insert(word);
  let prefix = '', res = [];
  for (const c of searchWord) {
    const suggestions = root.search((prefix += c));
    res.push(suggestions);
  }
  return res;
};