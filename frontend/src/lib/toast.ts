import { toast } from "sonner";

const toastStyles = {
  success: {
    // background: "#22c55e",
    color: "#22c55e",
    border: "1px solid #16a34a",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "14px",
  },
  error: {
    // background: '#ef4444',
    color: "#ef4444",
    border: "1px solid #dc2626",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "14px",
  },
  warning: {
    // background: "#eab308",
    color: "#eab308",
    border: "1px solid #ca8a04",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "14px",
  },
  info: {
    // background: "#3b82f6",
    color: "#3b82f6",
    border: "1px solid #2563eb",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "14px",
  },
};

export const showToast = {
  success: (message: string) =>
    toast.success(message, { style: toastStyles.success }),
  error: (message: string) =>
    toast.error(message, { style: toastStyles.error }),
  warning: (message: string) =>
    toast.warning(message, { style: toastStyles.warning }),
  info: (message: string) => toast.info(message, { style: toastStyles.info }),
};
