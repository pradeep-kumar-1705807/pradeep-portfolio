import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import AchievementCard from "./AchievementCard";

interface AchievementItem {
  id: number;
  title: string;
  description: string;
  icon: IconDefinition;
  link: string;
}

interface AchievementListProps {
  achievements: AchievementItem[];
}

const AchievementList: React.FC<AchievementListProps> = ({ achievements }) => {
  return (
    <div className="achievements-grid">
      {achievements.map((achievement) => (
        <AchievementCard
          key={achievement.id}
          title={achievement.title}
          description={achievement.description}
          icon={achievement.icon}
          link={achievement.link}
        />
      ))}
    </div>
  );
};

export default AchievementList;
