var numRescueBoats = function(people, limit) {
  people.sort((a,b) => a-b); // sort lightest to heaviest 
  
  let boatCount = 0;
  while (people.length) {
    const currentHeaviest = people.pop();
    const currentLightest = people[0];  
    if (currentHeaviest + currentLightest <= limit) people.shift();
    // it is guaranteed that 1 person wieghs <= limit
    boatCount++;
  }
  return boatCount;
};