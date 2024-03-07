import { useMemo } from "react";
import styles from "./styles.module.css";

interface IProps {
  size?: "DEFAULT" | "SMALL" | "LARGE";
  placeholder: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: any) => void;
}
const Input = ({ size, placeholder, className = "", onChange }: IProps) => {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case "SMALL":
        return styles.sizeSmall;

      case "LARGE":
        return styles.sizeLarge;

      default:
        return styles.sizeDefault;
    }
  }, [size]);

  return (
    <div className={styles.InputDiv}>
      <input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={onChange}
        className={` ${sizeStyle} ${className} ${styles.input}`}
      />
    </div>
  );
};

export default Input;
