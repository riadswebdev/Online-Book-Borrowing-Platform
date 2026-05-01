"use client";

import { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
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

const SignUpPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form.entries());

    try {
      const { error } = await authClient.signUp.email({
        email: formData.email,
        password: formData.password,
        image: formData.image,
        name: formData.name,
        
      });

      if (error) {
        setSignUpError(error.message);
      } else {
        setSignUpError("");
        toast.success("Successfully Account Created");
        router.push("/signin");
      }
    } catch (e) {
      setSignUpError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="mx-auto flex rounded-md mb-20 w-full max-w-md flex-col items-center justify-center gap-6 px-4 bg-white">
      <h4 className="mt-10 font-bold text-2xl sm:text-3xl">Sign Up </h4>
      <p className="text-sm text-red-500">{signUpError}</p>
      <Form className="flex w-96 flex-col  gap-4" onSubmit={onSubmit}>

        <TextField isRequired name="name">
          <Label>Full Name</Label>
          <Input placeholder="Enter your full name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image">
          <Label>Photo Url</Label>
          <Input placeholder="Enter a Image url" />
          <FieldError />
        </TextField>

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
          name="password"
          isRequired
          minLength={8}
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
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

        <div className="">
          <Button disabled={loading} className="w-full mb-2" type="submit">
            {loading ?
              <span className="flex items-center gap-2 justify-center">
                Creating <Spinner color="current" size="sm" />
              </span>
            : "Sign Up"}
          </Button>
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-blue-800 font-semibold hover:underline"
            >
              Sign In
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

export default SignUpPage;
