/** Discriminated union for all API responses */
export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string; details?: unknown };

/** Contact form submission state */
export type SubmitStatus = "idle" | "loading" | "success" | "error";

/** Product color accent keys */
export type ProductCategory = "caisses" | "logiciels" | "tpe" | "balances";

/** Reusable component size scale */
export type Size = "xs" | "sm" | "md" | "lg" | "xl";

/** Reusable component variant */
export type Variant = "primary" | "secondary" | "ghost" | "outline";
