import type { ReactNode } from "react";

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function IconCard({
  icon,
  title,
  description,
}: IconCardProps) {
  return (
    <div className="icon-card">
      <div className="icon-card__icon">{icon}</div>
      <h3 className="icon-card__title">{title}</h3>
      <p className="icon-card__description">{description}</p>
    </div>
  );
}