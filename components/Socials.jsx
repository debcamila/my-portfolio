"use client";

import {
  RiMailFill,
  RiLinkedinFill,
  RiGithubFill,
  RiBehanceFill,
} from "react-icons/ri";
import { FaSpeakerDeck } from "react-icons/fa";

import Link from "next/link";

const icons = [
  {
    path: "mailto:camiladeborah72@gmail.com",
    name: <RiMailFill />,
  },
  {
    path: "https://www.linkedin.com/in/debcamila/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/debcamila",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.behance.net/debcamila",
    name: <RiBehanceFill />,
  },
  {
    path: "https://speakerdeck.com/debcamila",
    name: <FaSpeakerDeck />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
