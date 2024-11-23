import type { Project } from "types/Sections";

const projectsList: Project[] = [
  {
    id: 1,
    image: "/images/projects/tp.jpg",
    name: "Tiny Painters",
    summary:
      "Tiny Painters is a simple, fun drawing app that lets you create colorful artwork on your Android device.",
    tags: ["Java", "Android Studio", "Google Play Store", "XML"],
    link: {
      web: "https://play.google.com/store/apps/details?id=rit.tyit.paint2&pcampaignid=web_share&pli=1",
      github: "https://github.com/saurabhsensai/TinyPainters",
    },
  },
  {
    id: 2,
    image: "/images/projects/ECGAI.gif",
    name: "Time Enna",
    summary:
      "A fun experiement to understand the ache that is handling Dates and Time Zones on the frontend. Allows you to check the current time of multiple timezones at once, with a unique UI experience.",
    tags: ["opensource", "react", "dayjs", "tailwindcss"],
    link: {
      web: "https://timeenna.com",
      github: "https://github.com/AmruthPillai/Time-Enna",
    },
  },
  
];

export default projectsList;
