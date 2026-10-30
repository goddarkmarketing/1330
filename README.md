# THAI FAST TRANSPORT — Landing Page

เว็บไซต์ Landing Page หน้าเดียวสำหรับธุรกิจขนส่งสินค้าทั่วประเทศไทย
สร้างด้วย Next.js, React, TypeScript, Tailwind CSS, Framer Motion และ Lucide React

## เริ่มต้นใช้งาน

### ความต้องการของระบบ

- Node.js 20+
- npm

### ติดตั้งและรัน

```bash
npm install
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

### คำสั่งอื่น ๆ

```bash
npm run build   # สร้าง production build
npm run start   # รัน production server
npm run lint    # ตรวจสอบ ESLint
```

## แก้ไขข้อมูลบริษัท

แก้ไขไฟล์หลักเพียงไฟล์เดียว:

`src/config/site.ts`

ข้อมูลที่แก้ได้:

- ชื่อบริษัท
- เบอร์โทรศัพท์ (`phone`, `phoneTel`, `phoneDisplay`)
- LINE ID และ URL
- Facebook / YouTube URL
- โลโก้
- ข้อความ Hero
- รายการบริการ
- เวลาทำการ / ที่อยู่
- SEO title, description, keywords
- `canonicalUrl` เมื่อมีโดเมนจริง

> ข้อมูลติดต่อในโปรเจกต์นี้เป็น **ค่าตัวอย่าง** เท่านั้น
> อย่าเปิดใช้งานจริงจนกว่าจะแก้เป็นข้อมูลบริษัทที่ถูกต้อง

## โครงสร้างโปรเจกต์

```text
src/
  app/                 # App Router, layout, page, API
  components/
    layout/            # Header, Footer, Floating buttons
    sections/          # Hero, Services, WhyUs, Steps, Coverage, Contact
    ui/                # Logo, ScrollReveal
    seo/               # JSON-LD schema
  config/site.ts       # ข้อมูลบริษัทและเนื้อหาเว็บ
public/images/         # ภาพประกอบทั้งหมด
```

## ฟอร์มขอใบเสนอราคา

- มี validation ฝั่ง client และ API
- ตรวจสอบรูปแบบเบอร์โทรศัพท์ไทย
- มี loading state
- ตอนนี้ API (`/api/quote`) ยังไม่เชื่อมระบบรับข้อมูลจริง
  จึง **ไม่แสดงข้อความว่าส่งสำเร็จ**
- เมื่อพร้อม ให้เชื่อมอีเมล / CRM / webhook ใน `src/app/api/quote/route.ts`

## ภาพประกอบ

เก็บไว้ที่ `public/images/`

| ไฟล์ | การใช้งาน |
|------|----------|
| `hero-truck.jpg` | Hero background |
| `shipping-boxes.jpg` | บริการขนส่งสินค้า |
| `house-moving.jpg` | ขนของย้ายบ้าน |
| `office-moving.jpg` | ขนย้ายสำนักงาน |
| `express-delivery.jpg` | ส่งด่วน |
| `movers-team.jpg` | รถรับจ้างพร้อมคนยก |
| `nationwide-truck.jpg` | ขนส่งทั่วประเทศ |
| `thailand-map.jpg` | แผนที่พื้นที่ให้บริการ |
| `delivery-staff.jpg` | ส่วนติดต่อ |
| `truck-convoy.jpg` | แบนเนอร์พื้นที่บริการ |
| `why-bg.jpg` | พื้นหลัง Why Choose Us |
| `logo.jpg` | โลโก้สำรอง |

## Design System

- Primary Yellow `#FFCC00`
- Primary Red `#D9000D`
- Dark Red `#B8000B`
- Dark Text `#151515`
- Light Gray `#F7F8FA`
- Fonts: Kanit, Prompt
