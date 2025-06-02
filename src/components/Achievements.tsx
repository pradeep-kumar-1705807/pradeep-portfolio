import React from "react";
import { faTrophy, faAward, faMedal, faCertificate, faCode } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Achievements.scss";
import AchievementList from "./achievements/AchievementList";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "AWS Cloud Practitioner Certified (2021)",
      description: "Certified in AWS Cloud technologies and best practices",
      icon: faCertificate,
      link: "https://drive.google.com/file/d/1zG-7c-9Rnkm3jrKfbzyAm2-igfN1BOOP/view?usp=sharing"
    },
    {
      id: 2,
      title: "ACM ICPC Participant",
      description: "Team: geek_boys, Rank: 1735",
      icon: faTrophy,
      link: "https://icpc.global/ICPCID/R85Q8YTICQS8"
    },
    {
      id: 3,
      title: "Google Hash Code 2020",
      description: "Country Rank: 236, Global Rank: 1936, Hub Rank: 3",
      icon: faMedal,
      link: "https://drive.google.com/file/d/18dKmc5kUISobv4M73WTxhJMorTKZdr0a/view"
    },
    {
      id: 4,
      title: "Google Kick-Start Round H 2019",
      description: "Global Rank: 435",
      icon: faAward,
      link: "https://drive.google.com/file/d/1_bn2KlLIQCk994Nb1Sn8DCFjb8Nz2czS/view"
    },
    {
      id: 5,
      title: "LeetCode Problem Solver",
      description: "Active problem solver on LeetCode platform",
      icon: faCode,
      link: "https://leetcode.com/user7117k/"
    },
    {
      id: 6,
      title: "Google Code Jam 2019/2020",
      description: "Qualified till Round 2 in 2019, Rank 2020: 6385th Global",
      icon: faTrophy,
      link: "https://drive.google.com/file/d/1RiYnlapBJ9Jk1mplE-Nl_yHTodoBq-w7/view"
    }
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <h1 className="section-title">Achievements</h1>
        <AchievementList achievements={achievements} />
      </div>
    </section>
  );
};

export default Achievements;
