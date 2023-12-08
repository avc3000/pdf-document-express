import { Router } from "express";
import { BuildPDFDocument } from "../libs/pdfkit.js";

const router = Router();

router.get("/invoice", (req, res) => {
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename=invoice.pdf",
  });

  BuildPDFDocument(
    (data) => stream.write(data),
    () => stream.end()
  );
});

export default router;
