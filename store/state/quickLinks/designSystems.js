import { bigBundleIcon } from "@/assets/images";

export default {
  id: "technologies",
  title: "Tailwind Templates",
  description:
    "Download the best Tailwind CSS Themes & Templates developed by Creative Tim. Join over 2,366,301 creatives that already love our bootstrap resources!",
  dropdowns: [
    {
      id: 1,
      label: "Design Systems",
      links: [
        {
          id: 1,
          iconUrl: bigBundleIcon,
          links: [
            { id: 1, label: "Soft Design", url: "/" },
            { id: 2, label: "Argon Design", url: "/" },
            { id: 3, label: "Black Design", url: "/" },
            { id: 4, label: "Light Design", url: "/" },
            { id: 5, label: "Material Design", url: "/" },
            { id: 6, label: "Now UI Design", url: "/" },
            { id: 7, label: "Paper Design", url: "/" },
          ],
        },
      ],
    },
  ],
};
