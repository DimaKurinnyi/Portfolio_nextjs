import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

export const Btn = ({className,title,size}) => {
  return (
    <Link
      className={className}
      href="/contact"
    >
      {title}
      <FaArrowCircleRight
        className="  opacity-0 duration-300 ease-in-out group-hover:translate-x-2  group-hover:opacity-100"
        size={size}
      />
    </Link>
  );
};
