/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;

    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/
class Solution {
    unordered_map<Node*, Node*> map;
public:
    Node* copy(Node* inputNode) {
        if (!inputNode) return nullptr;
        if (map.count(inputNode)) return map[inputNode];

        Node* outputNode = new Node(inputNode->val);
        map[inputNode] = outputNode;
        outputNode->next = copy(inputNode->next);
        outputNode->random = copy(inputNode->random);
        return outputNode;
    }
    Node* copyRandomList(Node* head) {
        return copy(head);
    }
};