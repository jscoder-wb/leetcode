var maximumHappinessSum = function(happiness, k) {
  happiness.sort((a,b)=>b - a);
  let selected = 0;
  let happinessScore = 0;
  for (let score of happiness) {
    if (selected === k) break
    happinessScore += Math.max(0, score - selected);
    selected++;
  }
  return happinessScore;
};
// for daily challenge