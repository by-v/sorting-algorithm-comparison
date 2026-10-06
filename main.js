const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const readCSV = require("./utils/readCSV");
const insertionSort = require("./algorithms/insertionSort");
const mergeSort = require("./algorithms/mergeSort");

function writeCSV(filePath, arr) {
  if (!arr || arr.length === 0) {
    fs.writeFileSync(filePath, "");
    return;
  }

  const headers = Object.keys(arr[0]);
  const lines = [headers.join(",")];
  for (const row of arr) {
    const vals = headers.map(h => {
      const v = row[h];
      if (typeof v === "string") {
        return v.replace(/\n/g, " ").replace(/,/g, " ");
      }
      return v;
    });
    lines.push(vals.join(","));
  }
  fs.writeFileSync(filePath, lines.join("\n"), "utf8");
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

(function main() {
  const datasetPath = path.join(__dirname, "data", "dataset.csv");
  const dataset = readCSV(datasetPath);

  console.log("Jumlah data:", dataset.length);

  ensureDir(path.join(__dirname, "output"));

  const t0 = performance.now();
  const { result: insertionResult, stats: insertionStats } = insertionSort(dataset, "JumlahPenduduk");
  const t1 = performance.now();

  insertionStats.timeMs = t1 - t0;

  const t2 = performance.now();
  const { result: mergeResult, stats: mergeStats } = mergeSort(dataset, "JumlahPenduduk");
  const t3 = performance.now();

  mergeStats.timeMs = t3 - t2;

  writeCSV(path.join(__dirname, "output", "insertion_sorted.csv"), insertionResult);
  writeCSV(path.join(__dirname, "output", "merge_sorted.csv"), mergeResult);

  console.log("\n=== Insertion Sort ===");
  console.log(`Waktu eksekusi   : ${insertionStats.timeMs.toFixed(3)} ms`);
  console.log(`Comparisons       : ${insertionStats.comparisons}`);
  console.log(`Moves (assigns)   : ${insertionStats.moves}`);
  console.log(`Iterations (outer): ${insertionStats.iterations}`);
  console.table(insertionResult.slice(0, 10));

  console.log("\n=== Merge Sort ===");
  console.log(`Waktu eksekusi    : ${mergeStats.timeMs.toFixed(3)} ms`);
  console.log(`Comparisons        : ${mergeStats.comparisons}`);
  console.log(`Merge operations   : ${mergeStats.mergeOps}`);
  console.log(`Recursion calls    : ${mergeStats.recursionCalls}`);
  console.log(`Max recursion depth: ${mergeStats.maxRecursionDepth}`);
  console.table(mergeResult.slice(0, 10));

  console.log("\nHasil sorted disimpan di folder: output/");
})();