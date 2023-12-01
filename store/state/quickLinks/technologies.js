import {
  tailwindCSSIcon,
  bootstrapIcon,
  angularIcon,
  reactIcon,
  vuejsIcon,
  reactNativeIcon,
  svelteIcon,
  materialUIIcon,
  vuetifyIcon,
  flutterIcon,
  vueMaterialIcon,
  reactstrapIcon,
  reactBootstrapIcon,
  vueBootstrapIcon,
  laravelIcon,
  djangoIcon,
  flaskIcon,
  nextIcon,
  nuxtIcon,
  nodejsIcon,
  aspnetIcon,
} from "@/assets/images";
import randomNumber from "./functions/randomNumber.js";
import {
  pattern1,
  pattern2,
  pattern3,
  pattern4,
  pattern5,
  pattern6,
} from "./panelPatterns.js";

export default [
  {
    id: 21,
    label: "Front-End",
    links: [
      {
        id: 211,
        links: [
          {
            id: 2111,
            label: "Tailwind CSS",
            iconUrl: tailwindCSSIcon,
            content: {
              title: "Tailwind Templates",
              description: `Download the best Tailwind CSS Themes & Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,

              panel: pattern3,
            },
            url: "/",
          },
          {
            id: 2112,
            label: "Bootstrap",
            iconUrl: bootstrapIcon,
            content: {
              title: "Bootstrap Themes",
              description: `Download the best Bootstrap Themes and Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern3,
            },
            url: "/",
          },
          {
            id: 2113,
            label: "Angular",
            iconUrl: angularIcon,
            content: {
              title: "Angular Templates",
              description: `Download the best Angular themes & templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern4,
            },
            url: "/",
          },
          {
            id: 2114,
            label: "React",
            iconUrl: reactIcon,
            content: {
              title: "React Templates",
              description: `Download the best React Themes & templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern1,
            },
            url: "/",
          },
          {
            id: 2115,
            label: "Vue.js",
            iconUrl: vuejsIcon,
            content: {
              title: "Vue Templates",
              description: `Download the best Vuejs Themes & Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
            },
            url: "/",
          },
          {
            id: 2116,
            label: "React Native",
            iconUrl: reactNativeIcon,
            content: {
              title: "React Native Templates for iOS and Android",
              description: `Download the best React Native Themes & Templates developed by Creative Pulse Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern5,
            },
            url: "/",
          },
          {
            id: 2117,
            label: "Svelte",
            iconUrl: svelteIcon,
            content: {
              title: "Svelte Themes",
              description: `Download the best Svelte Themes and Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern5,
            },
            url: "/",
          },
        ],
      },

      {
        id: 212,
        links: [
          {
            id: 2121,
            label: "Material UI",
            iconUrl: materialUIIcon,
            content: {
              title: "Material UI Templates",
              description: `Download the best Material UI React Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern1,
            },
            url: "/",
          },
          {
            id: 2122,
            label: "Vuetify",
            iconUrl: vuetifyIcon,
            content: {
              title: "Vuetifyjs Templates",
              description: `Download the best Vuetifyjs Themes & Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern2,
            },
            url: "/",
          },
          {
            id: 2123,
            label: "Flutter",
            iconUrl: flutterIcon,
            content: {
              title: "Flutter Templates for iOS and Android",
              description: `Download the best Flutter Themes & Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern5,
            },
            url: "/",
          },
          {
            id: 2124,
            label: "Vue Material",
            iconUrl: vueMaterialIcon,
            content: {
              title: "Vue Material Templates",
              description: `Download the best Vue Material Themes & Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern2,
            },
            url: "/",
          },
          {
            id: 2125,
            label: "Reactstrap",
            iconUrl: reactstrapIcon,
            content: {
              title: "Reactstrap Templates",
              description: `Download the best Reactstrap Themes & Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern1,
            },
            url: "/",
          },
          {
            id: 2126,
            label: "React Bootstrap",
            iconUrl: reactBootstrapIcon,
            content: {
              title: "Bootstrap React Templates",
              description: `Download the best Bootstrap React Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern1,
            },
            url: "/",
          },
          {
            id: 2127,
            label: "Vue Bootstrap",
            iconUrl: vueBootstrapIcon,
            content: {
              title: "Bootstrap Vue Templates",
              description: `Download the best Bootstrap Vuejs templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern2,
            },
            url: "/",
          },
        ],
      },
    ],
  },
  {
    id: 22,
    label: "Back-End",
    links: [
      {
        id: 221,
        links: [
          {
            id: 2211,
            label: "Laravel",
            iconUrl: laravelIcon,
            content: {
              title: "Laravel Templates",
              description: `Download the best Laravel Themes & Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern6,
            },
            url: "/",
          },
          {
            id: 2212,
            label: "Django",
            iconUrl: djangoIcon,
            content: {
              title: "Django Themes",
              description: `Download the best Django Themes and Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern5,
            },
            url: "/",
          },
          {
            id: 2213,
            label: "Flask",
            iconUrl: flaskIcon,
            content: {
              title: "Flask Themes",
              description: `Download the best Flask Themes and Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern6,
            },
            url: "/",
          },
          {
            id: 2214,
            label: "Next",
            iconUrl: nextIcon,
            content: {
              title: "Nextjs Templates",
              description: `Download the best Next.js Themes & templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern2,
            },
            url: "/",
          },
          {
            id: 2215,
            label: "Nuxt",
            iconUrl: nuxtIcon,
            content: {
              title: "Nuxtjs Templates",
              description: `Download the best Nuxt.js Themes & templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern4,
            },
            url: "/",
          },
          {
            id: 2216,
            label: "Node.js",
            iconUrl: nodejsIcon,
            content: {
              title: "Nodejs Templates",
              description: `Download the best Nodejs Themes & Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern6,
            },
            url: "/",
          },
          {
            id: 2217,
            label: "Aspnet",
            iconUrl: aspnetIcon,
            content: {
              title: "Asp.NET Templates",
              description: `Download the best Asp.NET Themes & Templates developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern5,
            },
            url: "/",
          },
        ],
      },
    ],
  },
];
