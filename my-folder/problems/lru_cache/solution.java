class Node {
    int key, val;
    Node prev, next;
    public Node(int key, int val) {
        this.key = key;
        this.val = val;
    }
}
class LRUCache {
    Map<Integer, Node> map;
    Node head;
    Node tail;
    int capacity;
    public LRUCache(int capacity) {
        map = new HashMap<>();
        head = new Node(-1, -1);
        tail = new Node(-1, -1);
        head.next = tail;
        tail.prev = head;
        this.capacity = capacity;
    }
    public void addToHead(Node node) { // -1  2  1  -1 
        node.next = head.next;
        node.prev = head;
        head.next = node;
        node.next.prev = node;
    }
    public void delete(Node node) { 
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    public int get(int key) { 
        if(map.containsKey(key)) {
            Node curr = map.get(key);
            delete(curr); 
            addToHead(curr);
            return curr.val;
        }
        return -1;
    }
    public void put(int key, int value) {
        if(map.containsKey(key)) {
            Node curr = map.get(key);
            curr.val = value;
            delete(curr);
            addToHead(curr);
        }
        else if(map.size()<capacity) { 
            map.put(key, new Node(key, value));
            addToHead(map.get(key));
        }  else { 
            map.put(key, new Node(key, value));
            map.remove(tail.prev.key);
            delete(tail.prev);
            addToHead(map.get(key));
        }
    }
}