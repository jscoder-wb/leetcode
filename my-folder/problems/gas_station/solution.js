var canCompleteCircuit = function (gas, cost) {
  let start = 0, deficit = 0, capacity = 0;
  for (let i = 0; i < gas.length; i++) {
    capacity += gas[i] - cost[i];
    if (capacity < 0) {
      start = i + 1;
      deficit += capacity;
      capacity = 0;
    }
  }
  return capacity + deficit >= 0 ? start : -1;
};