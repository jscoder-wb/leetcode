# deadlock free solution
from threading import Lock

class DiningPhilosophers:
    
    forks = [Lock() for _ in range(5)]
    lock = Lock()
    def wantsToEat(self,
                   philosopher: int,
                   pickLeftFork: 'Callable[[], None]',
                   pickRightFork: 'Callable[[], None]',
                   eat: 'Callable[[], None]',
                   putLeftFork: 'Callable[[], None]',
                   putRightFork: 'Callable[[], None]') -> None:
        
        left_fork = philosopher
        right_fork = (philosopher + 1) % 5

        # a philosopher picks a fork only when the other fork is available
        self.lock.acquire()
        self.forks[left_fork].acquire()
        self.forks[right_fork].acquire()
        self.lock.release()
        
        pickRightFork()
        pickLeftFork()
        eat()
        putLeftFork()
        putRightFork()
        
        self.forks[left_fork].release()
        self.forks[right_fork].release()
