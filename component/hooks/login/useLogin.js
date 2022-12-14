import { useState } from "react";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { SignInValidation } from "../../../library/Formik/signInValidation";

//COMPONENT
import { validate } from "../../../library/Formik/LoginValidation";

const useLogin = () => {
  const [login, setLogin] = useState(true);
  const [showPassword, setshowPassword] = useState({
    password: false,
    cpassword: false,
  });
  const router = useRouter();

  const GoogleSignInHandler = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };

  const CredentialHandler = async (values) => {
    console.log(values);
    const status = await signIn("credentials", {
      redirect: false,
      email: values.loginEmail,
      password: values.loginPassword,
      callbackUrl: "/",
    });

    if (status.ok && !status.error) {
      router.push(status.url);
    }
  };

  const CredentialSignInHandler = async (values, e) => {
    e.preventDefault();
    console.log(values);
    const status = await signIn("credentials", {
      redirect: false,
      email: values.loginEmail,
      password: values.loginPassword,
      callbackUrl: "/",
    });

    if (status.ok && !status.error) {
      router.push(status.url);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      cpassword: "",
      loginEmail: "",
      loginPassword: "",
    },
    validate: validate,
    onSubmit: CredentialSignInHandler,
  });

  const formikSignIn = useFormik({
    initialValues: {
      loginEmail: "",
      loginPassword: "",
    },
    validate: SignInValidation,
    onSubmit: CredentialHandler,
  });

  return {
    GoogleSignInHandler,
    formik,
    formikSignIn,
    login,
    setLogin,
    showPassword,
    setshowPassword,
    signIn,
  };
};

export default useLogin;
