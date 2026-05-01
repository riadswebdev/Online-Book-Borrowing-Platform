"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineFileUnknown } from "react-icons/ai";

const Navbar = () => {
  const router = useRouter();

  const pathName = usePathname();
  const isActive = (path) => {
    if (path === "/") return pathName === "/";
    return pathName.startsWith(path);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOutBtn = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
        },
      },
    });
  };

  const { data: session } = authClient.useSession();

  return (
    <nav className=" sticky top-1 z-40 w-full  max-w-300 mx-auto mt-1 border border-white/10 md:rounded-full   bg-gray-950 backdrop-blur-lg">
      <header className="relative mx-auto flex h-16  items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ?
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  className="text-white"
                />
              : <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  className="text-white"
                />
              }
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="https://i.ibb.co.com/C3r6qpV3/Designer-3-removebg-preview.png"
                width={100}
                height={40}
                className="object-contain rounded-full"
                alt="Books Logo"
              />
            </Link>
            <div></div>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li className="">
            <Link
              className={`text-white ${isActive("/") && "font-semibold text-lg bg-linear-to-r from-blue-600/50 to-blue-700/30  px-4 pb-2 pt-1 rounded-full"}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-books"
              className={`text-white ${isActive("/all-books") && "font-semibold text-lg bg-linear-to-r from-blue-600/50 to-blue-700/30  px-4 pb-2 pt-1 rounded-full"}`}
              aria-current="page"
            >
              All Books
            </Link>
          </li>
          <li>
            <Link
              className={`text-white ${isActive("/profile") && "font-semibold text-lg bg-linear-to-r from-blue-600/50 to-blue-700/30  px-4 pb-2 pt-1 rounded-full"}`}
              href="/profile"
            >
              Profile
            </Link>
          </li>
        </ul>
        <div className="hidden items-center  gap-1 md:flex">
          {!session && (
            <>
              <Link href="/signin">
                <Button
                  variant="tertiary"
                  className="font-semibold text-lg bg-linear-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent "
                >
                  Login
                </Button>
              </Link>
              <div className="bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                <Link href="/signup">
                  <Button
                    variant="tertiary"
                    className="font-semibold text-lg  bg-linear-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent "
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </>
          )}
          {session && (
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-[12px] lg:text-sm">
                {session?.user?.name}
              </span>
              <Button
                onClick={handleSignOutBtn}
                variant="tertiary"
                className="font-semibold text-sm lg:text-base  bg-linear-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent flex justify-center mx-auto "
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
        {session && (
          <div className="absolute flex items-center gap-3 top-4 right-5 md:hidden">
            <span className=" text-gray-300 text-[12px] lg:text-sm">
              {session?.user?.name}
            </span>
            <Avatar size="sm">
              <Avatar.Image
                className="object-cover"
                alt="John Doe"
                src={session?.user?.image}
              />
              <Avatar.Fallback>
                {session?.user?.name?.charAt(0) || <AiOutlineFileUnknown />}
              </Avatar.Fallback>
            </Avatar>
          </div>
        )}
      </header>
      {isMenuOpen && (
        <div className=" border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4 ">
            <li className="">
              <Link
                className={`text-white ${isActive("/") && "font-semibold text-lg bg-linear-to-r from-blue-600/50 to-blue-700/30  px-4 pb-2 pt-1 rounded-full"}`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/all-books"
                className={`text-white ${isActive("/all-books") && "font-semibold text-lg bg-linear-to-r from-blue-600/50 to-blue-700/30  px-4 pb-2 pt-1 rounded-full"}`}
                aria-current="page"
              >
                All Books
              </Link>
            </li>
            <li>
              <Link
                className={`text-white ${isActive("/profile") && "font-semibold text-lg bg-linear-to-r from-blue-600/50 to-blue-700/30  px-4 pb-2 pt-1 rounded-full"}`}
                href="/profile"
              >
                Profile
              </Link>
            </li>
            <div className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              {!session && (
                <>
                  <Link href="/signin">
                    <Button
                      variant="tertiary"
                      className="font-semibold text-lg bg-linear-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent flex justify-center mx-auto "
                    >
                      Login
                    </Button>
                  </Link>
                  <div className="bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                    <Link href="/signup">
                      <Button
                        variant="tertiary"
                        className="font-semibold text-lg  bg-linear-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent flex justify-center mx-auto  "
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </>
              )}
              {session && (
                <Button
                  onClick={handleSignOutBtn}
                  variant="tertiary"
                  className="font-semibold text-lg bg-linear-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent flex justify-center mx-auto "
                >
                  Sign Out
                </Button>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
