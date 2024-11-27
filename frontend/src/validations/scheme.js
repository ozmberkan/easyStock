import z from "zod";

export const addScheme = z.object({
  ProductName: z.string().min(3, "Lütfen minimum 3 karakter giriniz.").max(255),
  ProductStock: z.preprocess(
    (value) => Number(value),
    z
      .number("Lütfen rakam giriniz")
      .int()
      .min(1, "Lütfen 1'den büyük bir değer giriniz.")
  ),
  ProductImage: z.string().url("Lütfen geçerli bir URL giriniz."),
});
