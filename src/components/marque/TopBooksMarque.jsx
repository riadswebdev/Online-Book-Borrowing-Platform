import { fetchBooksByCategory } from "@/data/FetchBooksData";
import { Button, Chip } from "@heroui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const TopBooksMarque = async () => {
  const newBooks = await fetchBooksByCategory();
  

  return (
    <div className="mx-5 xl:mx-0 ">
      <div className="flex bg-black/10 backdrop-blur-2xl rounded-xl items-center gap-2 my-15 w-full max-w-300 mx-auto">
        <Chip color="accent" className="bg-transparent text-lg">
          New Books
        </Chip>
        <Marquee className="my-3" pauseOnHover>
          <p>
            {newBooks.slice(0, 4).map((b) => (
              <span key={b.id} className="text-gray-300">
                {b.title}
              </span>
            ))}
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default TopBooksMarque;
