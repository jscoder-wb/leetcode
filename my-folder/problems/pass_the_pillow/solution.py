class Solution:
    def passThePillow(self, n: int, k: int) -> int:
        ball_position = 0  # Start with child 0 holding the ball
        direction = 1  # Initially, the ball moves towards the right

        for _ in range(k):
            if direction == 1:
                if ball_position == n - 1:
                    direction = -1
                ball_position += direction
            else:
                if ball_position == 0:
                    direction = 1
                ball_position += direction

        return ball_position + 1