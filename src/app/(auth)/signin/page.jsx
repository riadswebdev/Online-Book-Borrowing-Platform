"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Icon } from "@iconify/react";
import Link from "next/link";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Spinner,
  TextField,
} from "@heroui/react";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [signInError, setSignInError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const form = Object.fromEntries(formData.entries());

    try {
      const { error } = await authClient.signIn.email({
        email: form.email,
        password: form.password,
        callbackURL: "/",
      });

      if (error) {
        setSignInError(error.message);
        
      } else {
        setSignInError("");
      }
    } catch (e) {
      setSignInError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="mx-auto flex rounded-md mb-20 w-full max-w-md flex-col items-center mt-10 justify-center gap-6 px-4 bg-white">
      <h4 className="mt-10 font-bold text-2xl sm:text-3xl">Sign In </h4>

      <p className="text-sm text-red-500">{signInError}</p>
      <Form className="flex w-96 flex-col  gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input className="bg-gray-50" placeholder="Enter your email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              name="password"
              placeholder="Enter Your Password"
              type={isVisible ? "text" : "password"}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ?
                  <Eye className="size-4 text-gray-500" />
                : <EyeSlash className="size-4 text-gray-500" />}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="rememberMe"
            id="remember"
            defaultChecked
            className="w-4 h-4 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="remember" className="text-sm cursor-pointer">
            Remember Me
          </label>
        </div>

        <div className="">
          <Button isDisabled={isLoading} className="w-full mb-2" type="submit">
            {isLoading ?
              <span className="flex items-center gap-2 justify-center">
                Login <Spinner color="current" size="sm" />
              </span>
            : "Login"}
          </Button>
          <p className="text-center text-sm">
            Don`t have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </Form>
      <div className="">
        <p className="text-center font-semibold text-lg mb-3 ">
          Or Sign in with
        </p>
        <Button
          onClick={handleGoogleSignIn}
          className="flex justify-center mx-auto mb-6"
          variant="tertiary"
        >
          <Icon icon="devicon:google" />
        </Button>
      </div>
    </div>
  );
};

export default SignInPage;
