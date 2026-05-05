import fs from "fs";
import path from "path";
import csvParser from "csv-parser";
import * as XLSX from "xlsx";

export interface ParsedRow {
  [column: string]: string | number | boolean | null;
}

// ── Sheet inspection (XLSX only) ──────────────────────────
// Returns all sheet names in the workbook.
// Used at upload time so the frontend can present a sheet picker
// when more than one sheet exists.
export function getSheetNames(filePath: string): string[] {
  const workbook = XLSX.readFile(filePath, { bookSheets: true });
  return workbook.SheetNames;
}

// ── Main entrypoint ────────────────────────────────────────
// sheetName is optional:
//   - CSV files ignore it entirely
//   - XLSX files default to the first sheet when omitted
// (lazy sheet parsing happens in the service layer, so we can extract sheet names at upload time without parsing all sheets)
export async function parseFile(
  filePath: string,
  sheetName?: string,
): Promise<ParsedRow[]> {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === ".csv") {
    return parseCsv(filePath);
  } else if (ext === ".xlsx" || ext === ".xls") {
    return parseXlsx(filePath, sheetName);
  } else {
    throw new Error(`Unsupported file type: ${ext}`);
  }
}

// ── CSV parser ─────────────────────────────────────────────
function parseCsv(filePath: string): Promise<ParsedRow[]> {
  return new Promise((resolve, reject) => {
    const rows: ParsedRow[] = [];

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (row: ParsedRow) => rows.push(row))
      .on("end", () => resolve(rows))
      .on("error", reject);
  });
}

// ── XLSX parser ────────────────────────────────────────────
function parseXlsx(filePath: string, sheetName?: string): Promise<ParsedRow[]> {
  return new Promise((resolve, reject) => {
    try {
      const workbook = XLSX.readFile(filePath);

      // Use the requested sheet, fall back to the first one
      const targetSheet = sheetName ?? workbook.SheetNames[0];

      if (!workbook.SheetNames.includes(targetSheet)) {
        return reject(
          new Error(
            `Sheet "${targetSheet}" not found. Available sheets: ${workbook.SheetNames.join(", ")}`,
          ),
        );
      }

      const sheet = workbook.Sheets[targetSheet];
      const rows = XLSX.utils.sheet_to_json<ParsedRow>(sheet, { defval: null });
      resolve(rows);
    } catch (err) {
      reject(err);
    }
  });
}

// ── Extract column names ───────────────────────────────────
export async function extractColumns(
  filePath: string,
  sheetName?: string,
): Promise<string[]> {
  const rows = await parseFile(filePath, sheetName);
  if (rows.length === 0) return [];
  return Object.keys(rows[0]);
}
