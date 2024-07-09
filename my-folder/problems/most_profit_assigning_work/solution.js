var maxProfitAssignment = function(difficulty, profit, worker) {
    let jobs = [];
    for (let i = 0; i < difficulty.length; i++) {
        jobs.push([difficulty[i], profit[i]]);
    }
    jobs.sort((a, b) => a[0] - b[0]);
    let res = 0, i = 0, best = 0;
    worker.sort((a, b) => a - b);
    for (let ability of worker) {
        while (i < jobs.length && ability >= jobs[i][0]) {
            best = Math.max(jobs[i][1], best);
            i++;
        }
        res += best;
    }
    return res;
};