import { renderToBuffer } from "@react-pdf/renderer";
import { ResumePDF } from "@/components/ResumePDF";
import React from "react";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const buffer = await renderToBuffer(React.createElement(ResumePDF));

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="JM-Reyes-Resume.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
