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
    Icon: TbUser,
    placeholder: "Adınızı ve soyadınızı giriniz..",
    type: "text",
  },
  {
    label: "Konu Başlığı",
    Icon: MdOutlineSubtitles,
    placeholder: "Konu başlığı giriniz..",
    type: "text",
  },
  {
    label: "Konu Başlığı",
    Icon: TbPhone,
    placeholder: "Konu başlığı giriniz..",
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
  { id: 2, title: "Ürün Görseli", key: "price", sortable: false },
  { id: 3, title: "Ürün Adı", key: "name", sortable: true },
  { id: 4, title: "Stok", key: "stock", sortable: true },
  { id: 5, title: "İşlem", key: "action", sortable: false },
];

export const chartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
