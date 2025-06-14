export default function Spinner({
  color = "yellow",
  size = 10,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <div
      className={`w-${size} h-${size} border-4 border-${color}-400 border-t-transparent rounded-full animate-spin mb-4`}
    />
  );
}
