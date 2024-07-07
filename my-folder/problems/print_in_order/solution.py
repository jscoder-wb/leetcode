from threading import Lock
class Foo:
    def __init__(self):
        self.lockFirst = Lock()
        self.lockSecond = Lock()
        self.lockThird = Lock()
        self.lockSecond.acquire()
        self.lockThird.acquire()

    def first(self, printFirst: 'Callable[[], None]') -> None:
        self.lockFirst.acquire()
        printFirst()
        self.lockSecond.release()

    def second(self, printSecond: 'Callable[[], None]') -> None:
        self.lockSecond.acquire()
        printSecond()
        self.lockThird.release()
        
    def third(self, printThird: 'Callable[[], None]') -> None:
        self.lockThird.acquire()
        printThird()
        self.lockFirst.release()