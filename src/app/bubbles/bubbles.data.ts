export interface CircleData {
  size: number;
  left: number | string;
  top: number | string;
  color?: string;
  opacity?: number;
  blur?: number;
  image?: string;
  glow?: boolean;
  pulse?: boolean;
  twinkle?: boolean;
}

export interface VariantData {
  title: string;
  bg: CircleData[];
  images: CircleData[];
}

export const VARIANTS: VariantData[] = [
  {
    title: "Property 1=Default",
    bg: [
      { size: 60, left: "calc(50% - 30px - 107px)", top: "64.54%", color: "#A049D4", opacity: 0.2, blur: 0 },
      { size: 70, left: "63.26%", top: "13.22%", color: "rgba(130, 30, 190, 0.7)", opacity: 0.5, blur: 10 },
      { size: 60, left: "5.8%", top: "12.33%", color: "#A049D4", opacity: 0.4, blur: 0 },
      { size: 60, left: "42.27%", top: "0%", color: "#A049D4", opacity: 0.1, blur: 0 },
      { size: 100, left: "69.61%", top: "46.26%", color: "#A049D4", opacity: 0.3, blur: 20 },
      { size: 50, left: "37.57%", top: "47.8%", color: "#A049D4", opacity: 0.6, blur: 0 },
      { size: 35, left: "10.5%", top: "42.29%", color: "#A049D4", opacity: 0.2, blur: 0 },
    ],
    images: [
      { size: 107, left: 46, top: 69, image: "https://picsum.photos/seed/t1/200/200" },
      { size: 134, left: 162, top: 165, image: "https://picsum.photos/seed/t2/200/200" },
      { size: 71, left: 278, top: 105, image: "https://picsum.photos/seed/t3/200/200" },
      { size: 97, left: 63, top: 299, image: "https://picsum.photos/seed/t4/200/200" },
    ]
  },
  {
    title: "Property 1=Variant2",
    bg: [
      { size: 60, left: "calc(50% - 30px - 107px)", top: "84.8%", color: "#A049D4", opacity: 0.2, blur: 0 },
      { size: 70, left: "63.26%", top: "22.03%", color: "rgba(160, 73, 212, 0.7)", opacity: 0.5, blur: 10 },
      { size: 60, left: "0%", top: "7.05%", color: "#A049D4", opacity: 0.4, blur: 0 },
      { size: 60, left: "42.27%", top: "7.05%", color: "#A049D4", opacity: 0.1, blur: 0 },
      { size: 100, left: "70.72%", top: "53.3%", color: "#A049D4", opacity: 0.3, blur: 10 },
      { size: 50, left: "37.57%", top: "63.22%", color: "#A049D4", opacity: 0.6, blur: 0 },
      { size: 35, left: "10.5%", top: "52.2%", color: "#A049D4", opacity: 0.2, blur: 0 },
    ],
    images: [
      { size: 183, left: 46, top: 69, image: "https://picsum.photos/seed/t5/300/300" },
      { size: 99, left: 200, top: 237, image: "https://picsum.photos/seed/t6/200/200" },
      { size: 54, left: 295, top: 156, image: "https://picsum.photos/seed/t7/200/200" },
      { size: 73, left: 63, top: 348, image: "https://picsum.photos/seed/t8/200/200" },
    ]
  },
  {
    title: "Property 1=Variant3",
    bg: [
      { size: 60, left: "calc(50% - 30px - 119px)", top: "84.8%", color: "#A049D4", opacity: 0.2, blur: 0 },
      { size: 70, left: "92.82%", top: "2.64%", color: "rgba(160, 73, 212, 0.7)", opacity: 0.5, blur: 10 },
      { size: 60, left: "0%", top: "0%", color: "#A049D4", opacity: 0.4, blur: 0 },
      { size: 60, left: "50%", top: "-4.41%", color: "#A049D4", opacity: 0.1, blur: 0 },
      { size: 100, left: "67.96%", top: "74.67%", color: "#A049D4", opacity: 0.3, blur: 20 },
      { size: 60, left: "-1.66%", top: "56.61%", color: "#A049D4", opacity: 0.4, blur: 0 },
      { size: 35, left: "3.87%", top: "35.46%", color: "#A049D4", opacity: 0.2, blur: 0 },
    ],
    images: [
      { size: 114, left: -14, top: 65, image: "https://picsum.photos/seed/t9/200/200" },
      { size: 71, left: 199, top: 321, image: "https://picsum.photos/seed/t10/200/200" },
      { size: 200, left: 156, top: 85, image: "https://picsum.photos/seed/t11/300/300" },
      { size: 104, left: 35, top: 311, image: "https://picsum.photos/seed/t12/200/200" },
    ]
  },
  {
    title: "Property 1=Variant4",
    bg: [
      { size: 60, left: "calc(50% - 30px - 49px)", top: "84.8%", color: "#A049D4", opacity: 1, blur: 0 },
      { size: 70, left: "92.82%", top: "2.64%", color: "rgba(160, 73, 212, 0.7)", opacity: 0.5, blur: 10 },
      { size: 60, left: "-11.05%", top: "8.81%", color: "#A049D4", opacity: 0.4, blur: 0 },
      { size: 60, left: "50%", top: "-11.01%", color: "#A049D4", opacity: 0.1, blur: 0 },
      { size: 100, left: "84.53%", top: "61.45%", color: "#A049D4", opacity: 0.3, blur: 20 },
      { size: 60, left: "-9.94%", top: "45.81%", color: "#A049D4", opacity: 0.2, blur: 0 },
      { size: 35, left: "3.87%", top: "14.1%", color: "#A049D4", opacity: 0.2, blur: 0 },
    ],
    images: [
      { size: 103, left: 95, top: 0, image: "https://picsum.photos/seed/t13/200/200" },
      { size: 71, left: 219, top: 341, image: "https://picsum.photos/seed/t14/200/200" },
      { size: 132, left: 224, top: 85, image: "https://picsum.photos/seed/t15/200/200" },
      { size: 180, left: 20, top: 181, image: "https://picsum.photos/seed/t16/300/300" },
    ]
  },
  {
    title: "Property 1=Heart",
    bg: [
      { size: 340, left: 181 - 170, top: 200 - 170, color: "#A049D4", opacity: 0.03, blur: 80, pulse: true },
      { size: 250, left: 181 - 125, top: 200 - 125, color: "#8A38F5", opacity: 0.04, blur: 60, pulse: true },
      { size: 36, left: 160 - 18, top: 115 - 18, color: "#A049D4", opacity: 0.6, blur: 0 },
      { size: 36, left: 202 - 18, top: 115 - 18, color: "#A049D4", opacity: 0.6, blur: 0 },
      { size: 45, left: 100 - 22.5, top: 80 - 22.5, color: "#8A38F5", opacity: 0.5, blur: 0 },
      { size: 40, left: 60 - 20, top: 105 - 20, color: "#A049D4", opacity: 0.4, blur: 0 },
      { size: 40, left: 40 - 20, top: 155 - 20, color: "#8A38F5", opacity: 0.4, blur: 0 },
      { size: 36, left: 35 - 18, top: 215 - 18, color: "#A049D4", opacity: 0.3, blur: 0 },
      { size: 45, left: 262 - 22.5, top: 80 - 22.5, color: "#8A38F5", opacity: 0.5, blur: 0 },
      { size: 40, left: 302 - 20, top: 105 - 20, color: "#A049D4", opacity: 0.4, blur: 0 },
      { size: 40, left: 322 - 20, top: 155 - 20, color: "#8A38F5", opacity: 0.4, blur: 0 },
      { size: 36, left: 327 - 18, top: 215 - 18, color: "#A049D4", opacity: 0.3, blur: 0 },
      { size: 40, left: 70 - 20, top: 275 - 20, color: "#8A38F5", opacity: 0.4, blur: 0 },
      { size: 40, left: 292 - 20, top: 275 - 20, color: "#8A38F5", opacity: 0.4, blur: 0 },
      { size: 45, left: 120 - 22.5, top: 345 - 22.5, color: "#A049D4", opacity: 0.5, blur: 0 },
      { size: 45, left: 242 - 22.5, top: 345 - 22.5, color: "#A049D4", opacity: 0.5, blur: 0 },
      { size: 65, left: 181 - 32.5, top: 405 - 32.5, color: "#8A38F5", opacity: 0.8, blur: 20, pulse: true },
      { size: 10, left: 181, top: 55, color: "#FFFFFF", opacity: 0.8, blur: 1, twinkle: true },
      { size: 7, left: 40, top: 75, color: "#FFFFFF", opacity: 0.6, blur: 1, twinkle: true },
      { size: 7, left: 322, top: 75, color: "#FFFFFF", opacity: 0.6, blur: 1, twinkle: true },
    ],
    images: [
      { size: 54, left: 181 - 27, top: 165 - 27, image: "https://picsum.photos/seed/h1/200/200", glow: true, pulse: true },
      { size: 50, left: 100 - 25, top: 115 - 25, image: "https://picsum.photos/seed/h2/200/200", glow: true },
      { size: 50, left: 262 - 25, top: 115 - 25, image: "https://picsum.photos/seed/h3/200/200", glow: true },
      { size: 54, left: 181 - 27, top: 295 - 27, image: "https://picsum.photos/seed/h4/200/200", glow: true },
    ]
  }
];
