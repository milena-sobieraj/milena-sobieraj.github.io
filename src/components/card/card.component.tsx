import './card.style.css'

interface CardProps {
  title: string;
  children?: React.ReactNode;
  variant?: "primary" | "transparent";
}

export const Card = (props: CardProps) => {
  const { title, children,variant } = props;

  return (
    <div className={`container ${variant === "transparent" ? "bg-white" : "bg-gray-100 shadow-xl card"} w-6/12 px-24 py-20 relative m-10`}>
      <div className="flex items-center uppercase title mb-11 text-gray-500"><p className={`${variant === "transparent" ? "bg-white" : "bg-gray-100"}`}>{title}</p></div>
      <div className="children">{children}</div>
    </div>
  )
}