import {
  BusinessIcon,
  EducationIcon,
  ScienceIcon,
  TechIcon,
} from "@/components/Icons/Icons";

export const categories = ["tech", "science", "education", "business"];

export const categoriesList = [
  {
    name: "tech",
    icon: (color?: string, width?: number, height?: number) => (
      <TechIcon color={color} width={width} height={height} />
    ),
  },
  {
    name: "science",
    icon: (color?: string, width?: number, height?: number) => (
      <ScienceIcon color={color} width={width} height={height} />
    ),
  },
  {
    name: "education",
    icon: (color?: string, width?: number, height?: number) => (
      <EducationIcon color={color} width={width} height={height} />
    ),
  },
  {
    name: "business",
    icon: (color?: string, width?: number, height?: number) => (
      <BusinessIcon color={color} width={width} height={height} />
    ),
  },
];

export const typesList = ["feed", "explore"];
