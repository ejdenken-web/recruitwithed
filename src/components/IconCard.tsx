interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

function IconCard({ icon, title, description }: Props) {
  return (
    <div className="icon-card">
      <div className="icon-circle">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default IconCard;