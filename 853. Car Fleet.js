var carFleet = function (target, position, speed) {
    let ourMap = [];
    let solution = [];
    
    for (let i = 0; i < position.length; i++) {
      ourMap.push([position[i], speed[i]]);
    }
    ourMap = ourMap.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < ourMap.length; i++) {
      solution.push((target - ourMap[i][0]) / ourMap[i][1]);
      if (
        solution.length >= 2 &&
        solution[solution.length - 2] >= solution[solution.length - 1]
      ) {
        solution.pop();
        
      }
    }
    return solution.length
  };