class Trie {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.isWord = true;
  }
  searchNode(word) {
    let node = this.root;
    for (let char of word) {
      if (node[char]) node = node[char];
      else return null;
    }
    return node;
  }
  search(word) {
    const endNode = this.searchNode(word);
    return endNode != null && endNode.isWord === true;
  }
  startsWith(prefix) {
    return this.searchNode(prefix) != null;
  }
}