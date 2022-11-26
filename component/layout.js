import Header from "./header/header";
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();

  return (
    <div>
      {router.pathname !== "/login" && <Header />}
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
