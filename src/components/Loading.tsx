import Spinner from "./ui/Spinner";

export default function Loading({ text = "Loading...", className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[200px] ${className}`}
    >
      <Spinner />
      {text && <p className="text-teal-600 font-medium">{text}</p>}
    </div>
  );
}
