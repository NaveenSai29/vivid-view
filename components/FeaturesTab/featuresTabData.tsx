import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Streamlined & Intuitive User Interface",
    desc1: `Designed for efficiency and ease, our interface ensures seamless navigation and an enhanced user experience.`,
    desc2: `Every element is crafted to optimize workflow, allowing users to access features effortlessly.`,
    image: "/images/features/speed.png",
    imageDark: "/images/features/speed.svg",
  },
  {
    id: "tabTwo",
    title: "Comprehensive SaaS Business Solutions",
    desc1: `Includes essential, pre-built pages tailored to meet the demands of SaaS platforms for rapid deployment.`,
    desc2: `From onboarding to advanced analytics, every component is structured to boost productivity and user engagement.`,
    image: "/images/features/web.png",
    imageDark: "/images/features/web.svg",
  },
  {
    id: "tabThree",
    title: "Integrated Blog, Database, Authentication & More",
    desc1: `Built-in authentication, database management, and content systems provide a complete solution for dynamic applications.`,
    desc2: `Seamlessly handle user data, manage content, and ensure security with our robust built-in integrations.`,
    image: "/images/features/data.png",
    imageDark: "/images/features/data.svg",
  },
];

export default featuresTabData;
