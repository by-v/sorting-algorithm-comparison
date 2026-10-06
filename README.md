# Sorting Algorithm Comparison: Insertion Sort vs Merge Sort

A Node.js project that benchmarks and compares the performance of two classic sorting algorithms — **Insertion Sort** and **Merge Sort** — on a real-world population dataset.

## Overview

The program reads a CSV dataset of population figures per province/regency in Indonesia, sorts it ascending by the `JumlahPenduduk` (population) column using both algorithms, and reports detailed performance statistics for each:

| Metric | Insertion Sort | Merge Sort |
|---|---|---|
| Execution time (ms) | ✓ | ✓ |
| Comparisons | ✓ | ✓ |
| Moves / assignments | ✓ | — |
| Outer-loop iterations | ✓ | — |
| Merge operations | — | ✓ |
| Recursion calls | — | ✓ |
| Max recursion depth | — | ✓ |

The sorted results are written to the `output/` directory for further inspection.

## Project Structure

```
project_sorting2/
├── algorithms/
│   ├── insertionSort.js   # Insertion Sort implementation with statistics
│   └── mergeSort.js       # Merge Sort implementation with statistics
├── data/
│   └── dataset.csv        # Input dataset (province, regency, population)
├── utils/
│   └── readCSV.js         # CSV parsing utility
├── output/                # Generated sorted CSV files
├── main.js                # Entry point
└── README.md
```

## Dataset

`data/dataset.csv` contains columns:

```
Tahun,Semester,Provinsi,Kabupaten/Kota,JumlahPenduduk
```

- `Tahun` — year
- `Semester` — semester (1 or 2)
- `Provinsi` — province
- `Kabupaten/Kota` — regency/city
- `JumlahPenduduk` — total population

## Requirements

- [Node.js](https://nodejs.org/) v14 or later
- No external dependencies — only Node.js built-in modules (`fs`, `path`, `perf_hooks`)

## Usage

```bash
node main.js
```

Sample output:

```
Jumlah data: <N>

=== Insertion Sort ===
Waktu eksekusi   : XX.XXX ms
Comparisons      : XXXXX
Moves (assigns)  : XXXXX
Iterations       : XXXXX

=== Merge Sort ===
Waktu eksekusi   : XX.XXX ms
Comparisons      : XXXXX
Merge operations : XXXXX
...
```

Sorted CSV files are saved to:

- `output/insertion_sorted.csv`
- `output/merge_sorted.csv`

## Complexity Analysis

| Algorithm | Best | Average | Worst | Space |
|---|---|---|---|---|
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |

## License

This project was created for educati        onal purposes (Data Structures course).