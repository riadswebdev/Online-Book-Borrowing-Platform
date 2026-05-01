'use client'

import { Avatar, Card } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { PencilToSquare } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { AiOutlineFileUnknown } from "react-icons/ai";

const ProfilePage = () => {

  const { data: session } = authClient.useSession();

  return (
    <div className="min-h-[60vh]">
      <div className="flex justify-center my-10 items-center text-center mx-5 sm:mx-0">
        <Card className="bg-transparent border border-gray-800 w-96 ">
          <Avatar className="mx-auto w-20 h-20 my-5">
            <Avatar.Image className="object-cover" alt="John Doe" src={session?.user?.image} />
            <Avatar.Fallback>{session?.user?.name?.charAt(0) || <p className="flex items-center justify-center flex-col gap-1">
              <AiOutlineFileUnknown />
                Unknown
            </p>
            }</Avatar.Fallback>
          </Avatar>
          <div className="text-gray-400 space-y-2">
            <h3>{session?.user?.name}</h3>
            <h3>{session?.user?.email}</h3>

            <Link className="flex justify-center items-center gap-2" href={"#"}>
              <PencilToSquare /> Edit
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
