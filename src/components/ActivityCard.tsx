interface ActivityCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  cardClassName?: string;
  iconBgClassName?: string;
  valueClassName?: string;
  subtitleClassName?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  cardClassName = "bg-white shadow-lg",
  iconBgClassName = "bg-gray-100",
  valueClassName = "text-gray-800",
  subtitleClassName = "text-gray-600",
}) => {
  return (
    <div className={`p-6 rounded-lg ${cardClassName}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{title}</span>
        <div
          className={`w-8 h-8 ${iconBgClassName} rounded-lg flex items-center justify-center`}
        >
          <span className="text-lg">{icon}</span>
        </div>
      </div>
      <div className={`text-3xl font-bold mb-1 ${valueClassName}`}>{value}</div>
      <div className={`text-sm ${subtitleClassName}`}>{subtitle}</div>
    </div>
  );
};

export default ActivityCard;
