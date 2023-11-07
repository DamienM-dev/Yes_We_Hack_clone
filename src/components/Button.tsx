import Link from "next/link";
import classNames from "classnames";

type ButtonProps = {
  title: string;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  title,
  href,
  variant = "primary",
}: ButtonProps) {
  const buttonClass = classNames({
    blockButton: true,
    buttonPrimary: variant === "primary",
    buttonSecondary: variant === "secondary",
  });

  return (
    <div className={buttonClass}>
      <Link className="buttonStyle" href={href}>
        {title}
      </Link>
    </div>
  );
}
