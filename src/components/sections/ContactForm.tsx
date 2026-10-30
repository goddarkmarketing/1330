"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

type FormState = {
  name: string;
  phone: string;
  serviceType: string;
  origin: string;
  destination: string;
  date: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  serviceType: "",
  origin: "",
  destination: "",
  date: "",
  details: "",
};

function isValidThaiPhone(value: string) {
  const digits = value.replace(/[\s-]/g, "");
  return /^(0[689]\d{8}|0[2-7]\d{7,8})$/.test(digits);
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "info" | "error"; text: string } | null>(
    null,
  );

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setMessage(null);
  };

  const validate = () => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "กรุณากรอกชื่อผู้ติดต่อ";
    if (!form.phone.trim()) next.phone = "กรุณากรอกเบอร์โทรศัพท์";
    else if (!isValidThaiPhone(form.phone)) {
      next.phone = "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง เช่น 08x-xxx-xxxx";
    }
    if (!form.serviceType) next.serviceType = "กรุณาเลือกประเภทบริการ";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setMessage({
          type: "info",
          text:
            data.message ??
            `ระบบรับข้อมูลออนไลน์ยังไม่ได้เชื่อมต่อ กรุณาโทร ${siteConfig.phoneDisplay} หรือติดต่อ LINE ${siteConfig.lineId}`,
        });
        return;
      }

      // สำเร็จเฉพาะเมื่อ API จริงตอบกลับสำเร็จในอนาคต
      setMessage({
        type: "info",
        text: data.message ?? "ได้รับข้อมูลแล้ว ทีมงานจะติดต่อกลับโดยเร็ว",
      });
      setForm(initialState);
    } catch {
      setMessage({
        type: "error",
        text: `ไม่สามารถส่งข้อมูลได้ในขณะนี้ กรุณาโทร ${siteConfig.phoneDisplay} หรือ LINE ${siteConfig.lineId}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3.5" noValidate>
      <div>
        <label htmlFor="name" className="label-field">
          ชื่อผู้ติดต่อ<span className="required-mark">*</span>
        </label>
        <input
          id="name"
          name="name"
          className="input-field"
          placeholder="ชื่อ-นามสกุล"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          autoComplete="name"
        />
        {errors.name && <p className="mt-1 text-sm text-[var(--primary-red)]">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="label-field">
          เบอร์โทรศัพท์<span className="required-mark">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="input-field"
          placeholder="08x-xxx-xxxx"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          autoComplete="tel"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-[var(--primary-red)]">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="serviceType" className="label-field">
          ประเภทบริการ<span className="required-mark">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          className="input-field"
          value={form.serviceType}
          onChange={(e) => update("serviceType", e.target.value)}
        >
          <option value="">เลือกประเภทบริการ</option>
          {siteConfig.serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-[var(--primary-red)]">{errors.serviceType}</p>
        )}
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="origin" className="label-field">
            จังหวัดต้นทาง
          </label>
          <input
            id="origin"
            name="origin"
            className="input-field"
            placeholder="เช่น กรุงเทพมหานคร"
            value={form.origin}
            onChange={(e) => update("origin", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="destination" className="label-field">
            จังหวัดปลายทาง
          </label>
          <input
            id="destination"
            name="destination"
            className="input-field"
            placeholder="เช่น เชียงใหม่"
            value={form.destination}
            onChange={(e) => update("destination", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="date" className="label-field">
          วันที่ต้องการขนส่ง (ไม่บังคับ)
        </label>
        <input
          id="date"
          name="date"
          type="date"
          className="input-field"
          value={form.date}
          onChange={(e) => update("date", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="details" className="label-field">
          รายละเอียดสินค้า / ขนาด / จำนวน
        </label>
        <textarea
          id="details"
          name="details"
          rows={3}
          className="input-field min-h-[96px] resize-y"
          placeholder="ระบุรายละเอียดเพื่อประเมินราคาได้แม่นยำขึ้น"
          value={form.details}
          onChange={(e) => update("details", e.target.value)}
        />
      </div>

      {message && (
        <div
          role="status"
          className={`rounded-[10px] px-4 py-3 text-sm leading-relaxed ${
            message.type === "error"
              ? "border border-red-200 bg-red-50 text-red-700"
              : "border border-amber-200 bg-amber-50 text-amber-900"
          }`}
        >
          {message.text}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary mt-1 w-full !min-h-[52px] text-[15px]"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            กำลังส่งข้อมูล...
          </>
        ) : (
          <>
            ส่งข้อมูลขอใบเสนอราคา
            <Send className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}
