import Image from "next/image";
import barter from "./images/barter.jpg";

export default Logo = () => {
  return (
    <Image
      alt="logo"
      src={barter}
      placeholder="blur"
      width={150}
      height={150}
    />
  );
};
