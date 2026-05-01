import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const BooksCard = ({ b }) => {
  return (
    <div className=" gap-5 border border-white/5 p-6 rounded-2xl">
      <Image
        src={b.image_url}
        width={330}
        height={100}
        alt="book"
        className="rounded-2xl mb-6 mx-auto w-full"
      />
      <div className="text-gray-200 flex flex-col justify-center text-start space-y-2">
        <p className="text-2xl">{b.title}</p>
        <p className="text-lg">
          Author : <span className="text-base">{b.author}</span>
        </p>

        <div className="flex items-center gap-10">
          <Chip>{b.category}</Chip>
          <Link
            href={`/all-books/${b.id}`}
            className="bg-linear-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent font-semibold "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BooksCard;

