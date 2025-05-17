import "./button.style.css"

interface ButtonProps {
    variant?: "primary" | "secondary" | "full" | "icon"
    title?: string;
}

export const Button = (props: ButtonProps) => {
    return <div className={`button ${props.variant ? props.variant : "primary"}`}>{props.title}</div>
}