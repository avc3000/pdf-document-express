import PDFDocument from "pdfkit-table";

export function BuildPDFDocument(dataCallback, endCallback) {
  const doc = new PDFDocument();

  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  doc.text("Hello world");
  doc.fontSize(25).text("Some text with an embedded font!", 100, 100);
  doc.moveDown();

  const tableArray = {
    headers: ["Country", "Conversion rate", "Trend"],
    rows: [
      ["Peru", "12%", "+1.12%"],
      ["France", "67%", "+0.98%"],
      ["England", "33%", "+4.15%"],
    ],
  };

  doc.table(tableArray, { width: 300 });
  doc.end();
}
