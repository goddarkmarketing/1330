import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

type QuotePayload = {
  name?: string;
  phone?: string;
  serviceType?: string;
  origin?: string;
  destination?: string;
  date?: string;
  details?: string;
};

function isValidThaiPhone(value: string) {
  const digits = value.replace(/[\s-]/g, "");
  return /^(0[689]\d{8}|0[2-7]\d{7,8})$/.test(digits);
}

export async function POST(request: Request) {
  let body: QuotePayload;

  try {
    body = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ message: "ข้อมูลที่ส่งมาไม่ถูกต้อง" }, { status: 400 });
  }

  if (!body.name?.trim() || !body.phone?.trim() || !body.serviceType?.trim()) {
    return NextResponse.json(
      { message: "กรุณากรอกชื่อ เบอร์โทร และประเภทบริการให้ครบ" },
      { status: 400 },
    );
  }

  if (!isValidThaiPhone(body.phone)) {
    return NextResponse.json(
      { message: "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง" },
      { status: 400 },
    );
  }

  // ยังไม่เชื่อมระบบรับข้อมูลจริง — ไม่ส่งสถานะสำเร็จ
  // เมื่อพร้อม ให้เชื่อม email / CRM / webhook แล้วเปลี่ยนเป็น status 200 พร้อมข้อความสำเร็จ
  console.info("[quote-request-preview]", {
    name: body.name,
    phone: body.phone,
    serviceType: body.serviceType,
    origin: body.origin,
    destination: body.destination,
    date: body.date,
    details: body.details,
  });

  return NextResponse.json(
    {
      message: `ระบบรับข้อมูลออนไลน์ยังไม่ได้เชื่อมต่อ กรุณาโทร ${siteConfig.phoneDisplay} หรือติดต่อ LINE ${siteConfig.lineId} เพื่อขอใบเสนอราคา`,
    },
    { status: 503 },
  );
}
