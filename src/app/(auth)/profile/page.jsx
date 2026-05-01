import { Avatar, Button, Card } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { PencilToSquare } from "@gravity-ui/icons";

const ProfilePage = () => {
  return (
    <div className="min-h-[60vh]">
      <div className="flex justify-center my-10 items-center text-center">
        <Card className="bg-transparent border w-96 ">
          <Avatar className="mx-auto w-20 h-20">
            <Avatar.Image
              alt="John Doe"
              src="https://i.ibb.co.com/C3r6qpV3/Designer-3-removebg-preview.png"
            />
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar>
          <div className="text-gray-400 space-y-3">
            <h3>Name</h3>
            <h3>Email</h3>

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
