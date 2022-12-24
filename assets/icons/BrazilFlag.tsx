import Image from "next/image";
import BrazilFlagImg from "../brazil-flag.png";
import { IconTypes } from "./IconTypes";

export default function BrazilFlag({ className, onClick }: IconTypes) {
  return (
    <Image
      className={className}
      src={BrazilFlagImg}
      width={30}
      alt={"Brazil Flag"}
      onClick={onClick}
    />
  );
}
