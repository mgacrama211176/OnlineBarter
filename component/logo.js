import Image from "next/image";
import barter from "../public/images/barter.jpg";

const logo = () => {
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

export default logo;
