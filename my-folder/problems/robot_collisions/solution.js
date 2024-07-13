var survivedRobotsHealths = function (positions, healths, directions) {
    let n = positions.length, stack = [], robots = [];
    for (let i = 0; i < n; i++) {
        robots.push({ position: positions[i], health: healths[i], direction: directions[i], roboID: i + 1 })
    }
    robots.sort((a, b) => a.position - b.position);
    for (let i = 0; i < n; i++) {
        if (robots[i].direction === 'L') {
            while (stack.length && robots[stack[stack.length - 1]].direction === 'R' &&
                robots[stack[stack.length - 1]].health < robots[i].health) {
                stack.pop();
                robots[i].health--;
            }
            if (stack.length === 0 || robots[stack[stack.length - 1]].direction === 'L') stack.push(i);
            else if (stack.length > 0 && robots[stack[stack.length - 1]].health === robots[i].health) stack.pop();
            else if (stack.length > 0 && robots[stack[stack.length - 1]].health > robots[i].health) robots[stack[stack.length - 1]].health--;
        } else stack.push(i);
    }
    return stack
        .sort((a, b) => robots[a].roboID - robots[b].roboID)
        .map((i) => robots[i].health);
};