from threading import Lock

class FizzBuzz:
    def __init__(self, n: int):
        self.n = n
        self.fizzLock = Lock(); self.fizzLock.acquire()
        self.buzzLock = Lock(); self.buzzLock.acquire()
        self.fzbzLock = Lock(); self.fzbzLock.acquire()
        self.numberLock = Lock()

    def fizz(self, printFizz: 'Callable[[], None]') -> None:
    	while True: 
            self.fizzLock.acquire()
            if self.n == 0: break 
            printFizz()
            self.numberLock.release()

    def buzz(self, printBuzz: 'Callable[[], None]') -> None:
    	while True: 
            self.buzzLock.acquire()
            if self.n == 0: break 
            printBuzz()
            self.numberLock.release()

    def fizzbuzz(self, printFizzBuzz: 'Callable[[], None]') -> None:
        while True: 
            self.fzbzLock.acquire()
            if self.n == 0: break  
            printFizzBuzz()
            self.numberLock.release()

    def number(self, printNumber: 'Callable[[int], None]') -> None:
        for x in range(1, self.n + 1):
            self.numberLock.acquire() 
            if x % 15 == 0: 
                self.fzbzLock.release()
            elif x % 3 == 0: 
                self.fizzLock.release()
            elif x % 5 == 0: 
                self.buzzLock.release()
            else: 
                printNumber(x)
                self.numberLock.release()
        self.numberLock.acquire() 
        self.n = 0 
        self.fizzLock.release()
        self.buzzLock.release()
        self.fzbzLock.release()
