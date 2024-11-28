import { MdOutlineSubtitles } from "react-icons/md";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbLocation,
  TbMail,
  TbPhone,
  TbUser,
} from "react-icons/tb";

export const contactInputs = [
  {
    label: "Adınız Soyadınız",
    name: "Name",
    Icon: TbUser,
    placeholder: "Adınızı ve soyadınızı giriniz..",
    type: "text",
  },
  {
    label: "Konu Başlığı",
    name: "Title",
    Icon: MdOutlineSubtitles,
    placeholder: "Konu başlığı giriniz..",
    type: "text",
  },
  {
    label: "Konu İçeriği",
    name: "Message",
    placeholder: "İçeriği giriniz..",
    type: "textarea",
  },
];

export const contactAddress = [
  { id: 1, label: "+90 554 *** ** **", icon: TbPhone },
  { id: 2, label: "info@example.com", icon: TbMail },
  { id: 3, label: "123 Example Street, İzmir, Türkiye", icon: TbLocation },
];

export const contactSocial = [
  { id: 1, icon: TbBrandFacebook, link: "https://www.facebook.com" },
  { id: 2, icon: TbBrandTwitter, link: "https://www.twitter.com" },
  { id: 3, icon: TbBrandInstagram, link: "https://www.instagram.com" },
  { id: 4, icon: TbBrandLinkedin, link: "https://www.linkedin.com" },
];

export const productsTableTitle = [
  { id: 1, title: "Ürün ID", key: "id", sortable: false },
  { id: 2, title: "Ürün Görseli", key: "image", sortable: false },
  { id: 3, title: "Ürün Adı", key: "name", sortable: true },
  { id: 4, title: "Stok", key: "stock", sortable: true },
  { id: 5, title: "İşlem", key: "action", sortable: false },
];

export const addProductInputs = [
  {
    id: 1,
    label: "Ürün Adı",
    type: "text",
    name: "ProductName",
    placeholder: "Ürün adı giriniz..",
  },
  {
    id: 2,
    label: "Ürün Stoğu",
    type: "number",
    name: "ProductStock",
    placeholder: "Ürün stoğu giriniz..",
  },
  {
    id: 3,
    label: "Ürün Görseli",
    type: "file",
    name: "ProductImage",
  },
];
