import {
  innerBundlesIcon,
  bigBundleIcon,
  reactIcon,
  tailwindCSSIcon,
  vuejsIcon,
  angularIcon,
  laravelIcon,
  bootstrapIcon,
  reactNativeIcon,
} from "@/assets/images";
import randomNumber from "./functions/randomNumber.js";

export default [
  {
    id: 41,
    label: "Bundles",
    iconUrl: innerBundlesIcon,
    links: [
      {
        id: 411,
        links: [
          {
            id: 4111,
            label: "Big Bundle",
            iconUrl: bigBundleIcon,
            content: {
              title: "Big Bundle Templates",
              description: `Download the best Big Bundle developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
            },
            url: "/",
          },
          {
            id: 4112,
            label: "React Bundle",
            iconUrl: reactIcon,
            content: {
              title: "React Bundle Templates",
              description: `Download the best React Bundle developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
            },
            url: "/",
          },
          {
            id: 4113,
            label: "Tailwind Bundle",
            iconUrl: tailwindCSSIcon,
            content: {
              title: "Tailwind Bundle Templates",
              description: `Download the best Tailwind Bundle developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
            },
            url: "/",
          },
          {
            id: 4114,
            label: "Vuejs Bundle",
            iconUrl: vuejsIcon,
            content: {
              title: "Vuejs Bundle Templates",
              description: `Download the best Vuejs Bundle developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
            },
            url: "/",
          },
          {
            id: 4115,
            label: "Angular Bundle",
            iconUrl: angularIcon,
            content: {
              title: "Angular Bundle Templates",
              description: `Download the best Angular Bundle developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
            },
            url: "/",
          },
          {
            id: 4116,
            label: "Laravel Bundle",
            iconUrl: laravelIcon,
            content: {
              title: "Laravel Bundle Templates",
              description: `Download the best Laravel Bundle developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
            },
            url: "/",
          },
          {
            id: 4117,
            label: "Bootstrap Bundle",
            iconUrl: bootstrapIcon,
            content: {
              title: "Bootstrap Bundle Templates",
              description: `Download the best Bootstrap Bundle developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
            },
            url: "/",
          },
          {
            id: 4118,
            label: "Mobile Bundle",
            iconUrl: reactNativeIcon,
            content: {
              title: "Mobile Bundle Templates",
              description: `Download the best Mobile Bundle developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
            },
            url: "/",
          },
        ],
      },
    ],
  },
];
