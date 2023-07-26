"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import useSWRMutation from "swr/mutation";
import { LOGIN_URL, REGISTER_URL } from "../utils/apiEndpoint";
import { authLoginSchema, authRegistSchema } from "../validation/authSchema";

interface iFormRegist {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
interface iFormLogin {
  email: string;
  password: string;
}

const fetcherRegist = (url: string, { arg }: { arg: iFormRegist }) =>
  axios.post(url, arg).then((res) => res.data);
const fetcherLogin = (url: string, { arg }: { arg: iFormLogin }) =>
  axios.post(url, arg).then((res) => res.data);

export default function Form() {
  const [loginForm, setLoginForm] = useState(true);

  const handleLoginForm = () => {
    setLoginForm((prev) => !prev);
  };

  const {
    data: responseRegist,
    error: responseErrorRegist,
    trigger: triggerRegist,
    isMutating: isLoadingRegist,
  } = useSWRMutation(REGISTER_URL, fetcherRegist);

  const {
    register: registFormRegist,
    handleSubmit: handleSubmitRegist,
    formState: { errors: errorsRegist },
  } = useForm<iFormRegist>({ resolver: yupResolver(authRegistSchema) });
  const onSubmitRegist: SubmitHandler<iFormRegist> = (data) => {
    triggerRegist(data);
  };

  const {
    data: responseLogin,
    error: responseErrorLogin,
    trigger: triggerLogin,
    isMutating: isLoadingLogin,
  } = useSWRMutation(LOGIN_URL, fetcherLogin);

  const {
    register: registFormLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm<iFormLogin>({ resolver: yupResolver(authLoginSchema) });
  const onSubmitLogin: SubmitHandler<iFormLogin> = (data) => {
    triggerLogin(data);
  };

  useEffect(() => {
    if (responseRegist) {
      console.log(responseRegist);
    }
    if (responseErrorRegist) {
      console.log(responseErrorRegist);
    }
    console.log("isLoadingRegist", isLoadingRegist);

    if (responseErrorLogin) {
      console.log(responseRegist);
    }
    if (responseLogin) {
      console.log(responseErrorRegist);
    }
    console.log("isLoadingLogin", isLoadingLogin);
  }, [
    responseRegist,
    responseErrorRegist,
    isLoadingRegist,
    responseLogin,
    responseErrorLogin,
    isLoadingLogin,
  ]);

  return (
    <div className="divide-y border rounded-lg  p-5">
      {loginForm ? (
        <>
          <div className="xl-bold pb-2">Login</div>
          <form
            className="flex flex-col py-4 min-w-[320px] gap-2"
            onSubmit={handleSubmitLogin(onSubmitLogin)}
          >
            <Input
              key={"log-input-email"}
              register={registFormLogin("email")}
              label="Email"
              name="email"
              placeholder="Enter your email"
              error={errorsLogin.email?.message}
            />
            <Input
              key={"log-input-password"}
              register={registFormLogin("password")}
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              error={errorsLogin.password?.message}
            />

            <Button disabled={isLoadingLogin}>
              {isLoadingLogin ? "Loading..." : "Login"}
            </Button>
          </form>
          <div className="s-regular pt-2">
            Don't have an account ?{" "}
            <span
              onClick={handleLoginForm}
              className="font-bold cursor-pointer text-primary-main"
            >
              Register here
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="xl-bold pb-2">Register</div>
          <form
            onSubmit={handleSubmitRegist(onSubmitRegist)}
            className="flex flex-col py-4 min-w-[320px] gap-2"
          >
            <Input
              key={"reg-input-name"}
              register={registFormRegist("name")}
              label="Name"
              name="name"
              placeholder="Enter your name"
              error={errorsRegist.name?.message}
            />
            <Input
              key={"reg-input-email"}
              register={registFormRegist("email")}
              label="Email"
              name="email"
              placeholder="Enter your email"
              error={errorsRegist.email?.message}
            />
            <Input
              key={"reg-input-password"}
              register={registFormRegist("password")}
              label="Password"
              name="password"
              placeholder="Enter your password"
              type="password"
              error={errorsRegist.password?.message}
            />
            <Input
              key={"reg-input-password-confirmation"}
              register={registFormRegist("password_confirmation")}
              label="Password confirmation"
              name="password_confirmation"
              placeholder="Enter your re-password"
              type="password"
              error={errorsRegist.password_confirmation?.message}
            />
            <Button disabled={isLoadingRegist}>
              {isLoadingRegist ? "Loading..." : "Register"}
            </Button>
          </form>
          <div className="s-regular pt-2 flex gap-1 items-center">
            <div className="w-3">
              <ArrowLeftIcon />
            </div>
            Back to{" "}
            <span
              onClick={handleLoginForm}
              className="font-bold cursor-pointer text-primary-main"
            >
              login
            </span>
          </div>
        </>
      )}
    </div>
  );
}
