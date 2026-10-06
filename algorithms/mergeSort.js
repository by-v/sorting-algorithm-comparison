function mergeSortWrapper(arr, key) {
  const data = arr.map(item => ({ ...item }));
  const stats = {
    comparisons: 0,
    mergeOps: 0,
    recursionCalls: 0,
    maxRecursionDepth: 0
  };

  function mergeSortRecursive(a, depth) {
    stats.recursionCalls++;
    if (depth > stats.maxRecursionDepth) stats.maxRecursionDepth = depth;

    if (a.length <= 1) return a;

    const mid = Math.floor(a.length / 2);
    const left = mergeSortRecursive(a.slice(0, mid), depth + 1);
    const right = mergeSortRecursive(a.slice(mid), depth + 1);
    return merge(left, right);
  }

  function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
      stats.comparisons++;
      if (left[i][key] <= right[j][key]) {
        result.push(left[i]);
        stats.mergeOps++;
        i++;
      } else {
        result.push(right[j]);
        stats.mergeOps++;
        j++;
      }
    }

    while (i < left.length) {
      result.push(left[i]);
      stats.mergeOps++;
      i++;
    }
    while (j < right.length) {
      result.push(right[j]);
      stats.mergeOps++;
      j++;
    }
    return result;
  }

  const sorted = mergeSortRecursive(data, 1);
  return { result: sorted, stats };
}

module.exports = mergeSortWrapper;
