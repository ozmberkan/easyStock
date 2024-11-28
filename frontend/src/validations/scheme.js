import z from "zod";

export const addSchema = z.object({
  ProductName: z.string().min(3, "Lütfen minimum 3 karakter giriniz.").max(255),
  ProductStock: z.preprocess(
    (value) => Number(value),
    z
      .number("Lütfen rakam giriniz")
      .int()
      .min(1, "Lütfen 1'den büyük bir değer giriniz.")
  ),
});

export const contactSchema = z.object({
  Name: z.string().min(3, "Lütfen minimum 3 karakter giriniz.").max(255),
  Title: z.string().min(5, "Lütfen minimum 5 karakter giriniz.").max(255),
  Message: z.string().min(10, "Lütfen minimum 10 karakter giriniz."),
});
