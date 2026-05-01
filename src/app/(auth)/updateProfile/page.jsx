"use client";

import { authClient } from "@/lib/auth-client";
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
import { Icon } from "@iconify/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const UpdateProfile = () => {
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form.entries());
    console.log(formData);
    await authClient.updateUser({
      image: formData.image,
      name: formData.name,
    });

    redirect("/profile");
  };

  return (
    <div className="mx-auto flex rounded-md mb-20 w-full max-w-md flex-col items-center mt-10 justify-center gap-6 px-4 bg-white">
      <h4 className="mt-10 font-bold text-2xl sm:text-3xl">Sign In </h4>

      <Form onSubmit={onSubmit} className="flex w-96 flex-col  gap-4">
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

        <div className="">
          <Button
            variant="tertiary"
            isDisabled={isLoading}
            className="w-full mb-2"
            type="submit"
          >
            {isLoading ?
              <span className="flex items-center gap-2 justify-center">
                Updating <Spinner color="current" size="sm" />
              </span>
            : "Update"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateProfile;
