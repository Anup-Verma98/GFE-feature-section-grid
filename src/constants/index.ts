import {
  DownloadIcon,
  BrushIcon,
  TeamIcon,
  RefundIcon,
  RefreshIcon,
  CopyrightIcon,
} from "../assets";

export type GridItemType = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export const GridItems: Array<GridItemType> = [
  {
    id: 1,
    title: "Infinite Download",
    icon: DownloadIcon,
    description:
      "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
  },
  {
    id: 2,
    title: "Purely Handcrafted",
    icon: BrushIcon,
    description:
      "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.",
  },
  {
    id: 3,
    title: "All Are Under licensed",
    icon: CopyrightIcon,
    description:
      "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).",
  },
  {
    id: 4,
    title: "Cancel Anytime",
    icon: RefundIcon,
    description:
      "Subscribe at your own pace, and cancel when you feel it's enough.",
  },
  {
    id: 5,
    title: "Empowering For Team",
    icon: TeamIcon,
    description:
      "We support multiple seats at once, requiring only a single payment.",
  },
  {
    id: 6,
    title: "No Limitations",
    icon: RefreshIcon,
    description:
      "Use as many as you want, from Dribbble presentations to PowerPoint presentations. ",
  },
];
