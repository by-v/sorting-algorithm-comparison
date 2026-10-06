function insertionSort(inputArr, key) {
  const data = inputArr.map(item => ({ ...item }));
  const n = data.length;

  const stats = {
    comparisons: 0, 
    moves: 0,     
    iterations: 0 
  };

  for (let i = 1; i < n; i++) {
    stats.iterations++;
    const current = data[i];
    let j = i - 1;
    
    while (j >= 0) {
      stats.comparisons++;
      if (data[j][key] > current[key]) {
        data[j + 1] = data[j];
        stats.moves++;
        j--;
      } else {
        break;
      }
    }

    data[j + 1] = current;
    stats.moves++;
  }

  return { result: data, stats };
}

module.exports = insertionSort;
