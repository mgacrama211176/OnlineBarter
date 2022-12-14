import { useState } from "react";

import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

import { validate } from "../../library/Formik/LoginValidation";
import { SignInValidation } from "../../library/Formik/signInValidation";

const useLogin = () => {
  const [login, setLogin] = useState(true);
  const [showPassword, setshowPassword] = useState({
    password: false,
    cpassword: false,
  });
  const [isLoading, setisLoading] = useState(false);
  const [success, setSucess] = useState(false);
  const [state, setState] = useState({
    vertical: "top",
    horizontal: "center",
  });

  const [error, setError] = useState();

  const router = useRouter();

  const GoogleSignInHandler = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  };

  const CredentialSignInHandler = async (values) => {
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

    if (status.error) {
      setTimeout(() => {
        setError(status.error);
      }, 2000);
    }
  };

  const SignUpHandler = async (values) => {
    setSucess(false);
    try {
      setisLoading(true);
      const result = await axios.post("/api/auth/register", values);
      formik.resetForm({
        values: "",
      });

      return result;
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
      setSucess(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: validate,
    onSubmit: SignUpHandler,
  });

  const formikSignIn = useFormik({
    initialValues: {
      loginEmail: "",
      loginPassword: "",
    },
    validate: SignInValidation,
    onSubmit: CredentialSignInHandler,
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
    isLoading,
    success,
    setSucess,
    state,
    error,
  };
};

export default useLogin;
