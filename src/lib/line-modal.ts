export const LINE_MODAL_EVENT = "open-line-modal";

export function openLineModal() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(LINE_MODAL_EVENT));
}
