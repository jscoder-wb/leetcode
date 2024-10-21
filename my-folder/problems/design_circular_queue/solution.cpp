class MyCircularQueue {
public:
    vector<int> queue;
    int maxSize;
    int front;
    int rear;
    MyCircularQueue(int k) {
        queue.resize(k);
        maxSize = k;
        front = 0;
        rear = -1;
    }

    bool enQueue(int val) {
        if (isFull())
            return false;
        rear = (rear + 1) % maxSize;
        queue[rear] = val;
        return true;
    }

    bool deQueue() {
        if (isEmpty())
            return false;
        if (front == rear) {
            front = 0;
            rear = -1;
        } else {
            front = (front + 1) % maxSize;
        }
        return true;
    }

    int Front() { return isEmpty() ? -1 : queue[front]; }

    int Rear() { return isEmpty() ? -1 : queue[rear]; }

    bool isEmpty() { return rear == -1; }

    bool isFull() { return !isEmpty() && (rear + 1) % maxSize == front; }
};
