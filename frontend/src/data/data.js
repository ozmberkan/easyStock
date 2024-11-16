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
