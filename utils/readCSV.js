// utils/readCSV.js
const fs = require("fs");
const path = require("path");

function readCSV(filePath) {
  const abs = path.resolve(filePath);
  const file = fs.readFileSync(abs, "utf8");
  const lines = file.trim().split(/\r?\n/);
  const headers = lines[0].split(",").map(h => h.trim());

  const result = lines.slice(1).map(line => {

    const cols = line.split(",").map(c => c.trim());
    return {
      Tahun: Number(cols[0]),
      Semester: Number(cols[1]),
      Provinsi: cols[2],
      KabupatenKota: cols[3],
      JumlahPenduduk: Number(cols[4])
    };
  });

  return result;
}

module.exports = readCSV;