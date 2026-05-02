"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Spinner,
  TextField,
} from "@heroui/react";

const UpdateProfile = () => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form.entries());
    await authClient.updateUser({
      image: formData.image,
      name: formData.name,
    });

    router.push("/profile");
  };

  return (
    <div className="mx-auto flex rounded-md mb-20 w-full max-w-md flex-col items-center mt-10 justify-center gap-6 px-4 bg-black/35 text-white">
      <h4 className="mt-10 font-bold text-xl sm:text-2xl ">
        <FaCircleUser className="mx-auto mb-2" />
        Update Profile
      </h4>

      <Form onSubmit={onSubmit} className="flex w-96 flex-col  gap-4">
        <TextField isRequired name="name">
          <Label className="text-white">Full Name</Label>
          <Input
            className="bg-transparent border border-gray-700 text-gray-400"
            placeholder="Enter your full name"
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="image">
          <Label className="text-white">Photo Url</Label>
          <Input
            className="bg-transparent border border-gray-700 text-gray-400"
            placeholder="Enter a Image url"
          />
          <FieldError />
        </TextField>

        <div className="">
          <Button isDisabled={isLoading} className="w-full mb-10" type="submit">
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
