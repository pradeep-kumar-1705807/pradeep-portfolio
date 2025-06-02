import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface AchievementCardProps {
  title: string;
  description: string;
  icon: IconDefinition;
  link: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ 
  title, 
  description, 
  icon, 
  link 
}) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="achievement-card"
    >
      <div className="achievement-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="achievement-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default AchievementCard;
