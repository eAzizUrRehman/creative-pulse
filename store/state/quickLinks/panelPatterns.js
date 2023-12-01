const generateUrls = (patterns) =>
  patterns.map((pattern) => ({
    ...pattern,
    url: `/${pattern.name.toLowerCase().replace(/ /g, "-")}`,
  }));

export const pattern1 = generateUrls([
  {
    id: 1,
    name: "Admin & Dashboards",
  },
  {
    id: 2,
    name: "UI Kits",
  },
  {
    id: 3,
    name: "Free Themes",
  },
  {
    id: 4,
    name: "Premium Themes",
  },
  {
    id: 5,
    name: "Material UI",
  },
  {
    id: 6,
    name: "Reactstrap",
  },
  {
    id: 7,
    name: "Next.js",
  },
  {
    id: 8,
    name: "Chakra UI",
  },
  {
    id: 9,
    name: "React Bootstrap",
  },
  {
    id: 10,
    name: "Shopify",
  },
]);

export const pattern2 = generateUrls([
  {
    id: 1,
    name: "Admin & Dashboard",
  },
  {
    id: 2,
    name: "UI Kits",
  },
  {
    id: 3,
    name: "Free Themes",
  },
  {
    id: 4,
    name: "Premium Themes",
  },
  {
    id: 5,
    name: "VuetifyJS",
  },
  {
    id: 6,
    name: "Nuxt.js",
  },
  {
    id: 7,
    name: "Vue Material",
  },
  {
    id: 8,
    name: "Ant Design",
  },
  {
    id: 9,
    name: "Vue Bootstrap",
  },
  {
    id: 10,
    name: "Vuejs API",
  },
  {
    id: 11,
    name: "Vite",
  },
  {
    id: 12,
    name: "Shopify",
  },
]);

export const pattern3 = generateUrls([
  {
    id: 1,
    name: "Admin & Dashboard",
  },
  {
    id: 2,
    name: "UI Kits",
  },
  {
    id: 3,
    name: "Free Themes",
  },
  {
    id: 4,
    name: "Premium Themes",
  },
  {
    id: 5,
    name: "React",
  },
  {
    id: 6,
    name: "Vue",
  },
  {
    id: 7,
    name: "Angular",
  },
  {
    id: 8,
    name: "Svelte",
  },
  {
    id: 9,
    name: "JavaScript",
  },
  {
    id: 10,
    name: "NextJS",
  },
  {
    id: 11,
    name: "Shopify",
  },
]);
export const pattern4 = generateUrls([
  {
    id: 1,
    name: "Admin & Dashboards",
  },
  {
    id: 2,
    name: "UI Kits",
  },
  {
    id: 3,
    name: "Free Themes",
  },
  {
    id: 4,
    name: "Premium Themes",
  },
  {
    id: 5,
    name: "Landing Pages",
  },
  {
    id: 6,
    name: "E-commerce",
  },
  {
    id: 7,
    name: "Calendar",
  },
  {
    id: 8,
    name: "Wizards",
  },
  {
    id: 9,
    name: "One Page Templates",
  },
  {
    id: 10,
    name: "Login Forms",
  },
  {
    id: 11,
    name: "Snippets",
  },
  {
    id: 12,
    name: "Shopify",
  },
]);
export const pattern5 = generateUrls([
  {
    id: 1,
    name: "Free Themes",
  },
  {
    id: 2,
    name: "Premium Themes",
  },
]);
export const pattern6 = generateUrls([
  {
    id: 1,
    name: "Admin & Dashboard",
  },
  {
    id: 2,
    name: "Free Themes",
  },
  {
    id: 3,
    name: "Premium Themes",
  },
  {
    id: 4,
    name: "Vuejs + Laravel API",
  },
  {
    id: 5,
    name: "Headless CMS",
  },
]);
export const pattern7 = generateUrls([
  {
    id: 1,
    name: "Admin & Dashboards",
  },
  {
    id: 2,
    name: "Free Themes",
  },
  {
    id: 3,
    name: "Premium Themes",
  },
]);

export const pattern8 = generateUrls([
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Soft Design",
  },
  {
    id: 3,
    name: "Argon Design",
  },
  {
    id: 4,
    name: "Black Design",
  },
  {
    id: 5,
    name: "Material Design",
  },
  {
    id: 6,
    name: "Now UI Design",
  },
  {
    id: 7,
    name: "Paper Design",
  },
  {
    id: 8,
    name: "Light Design",
  },
]);
