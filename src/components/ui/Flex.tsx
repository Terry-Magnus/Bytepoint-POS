export default function Flex({
  children,
  className = "",
  direction = "row",
  justify = "start",
  align = "stretch",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  justify?:
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
  align?:
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "baseline"
    | "self-start"
    | "self-end";
}) {
  return (
    <div
      className={`flex  ${direction} justify-${justify} items-${align} ${className}`}
    >
      {children}
    </div>
  );
}
