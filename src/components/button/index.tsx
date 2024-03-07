import { useMemo } from "react";
import styles from "./styles.module.css";

interface IProps {
  size?: "DEFAULT" | "SMALL" | "LARGE";
  children?: React.ReactNode;
  variant?: "DEFAULT" | "PRIMARY";
  className?: string;
}
const Button = ({
  size = "DEFAULT",
  children,
  variant = "DEFAULT",
  className,
}: IProps) => {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case "SMALL":
        return styles.sizeSmall;

      case "LARGE":
        return styles.sizeLarge;

      case "DEFAULT":
        return styles.sizeDefault;
    }
  }, [size]);

  return (
    <div>
      <button
        className={` hover:bg-sky-700 ${styles.btn} ${
          variant === "DEFAULT" ? styles.variantDefault : styles.variantPrimary
        } ${sizeStyle} ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
