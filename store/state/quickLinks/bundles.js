import {
  bigBundleIcon,
  reactIcon,
  tailwindCSSIcon,
  vuejsIcon,
  angularIcon,
  laravelIcon,
  bootstrapIcon,
  reactNativeIcon,
} from "@/assets/images";

export default [
  {
    id: 1,
    label: "Bundles",
    links: [
      {
        id: 1,
        links: [
          {
            id: 1,
            label: "Big Bundle",
            iconUrl: bigBundleIcon,
            url: "/",
          },
          {
            id: 2,
            label: "React Bundle",
            iconUrl: reactIcon,
            url: "/",
          },
          {
            id: 3,
            label: "Tailwind Bundle",
            iconUrl: tailwindCSSIcon,
            url: "/",
          },
          {
            id: 4,
            label: "Vuejs Bundle",
            iconUrl: vuejsIcon,
            url: "/",
          },
          {
            id: 5,
            label: "Angular Bundle",
            iconUrl: angularIcon,
            url: "/",
          },
          {
            id: 6,
            label: "Laravel Bundle",
            iconUrl: laravelIcon,
            url: "/",
          },
          {
            id: 7,
            label: "Bootstrap Bundle",
            iconUrl: bootstrapIcon,
            url: "/",
          },
          {
            id: 8,
            label: "Mobile Bundle",
            iconUrl: reactNativeIcon,
            url: "/",
          },
        ],
      },
    ],
  },
];
