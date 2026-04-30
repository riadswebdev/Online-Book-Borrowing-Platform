import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const BooksCard = ({ b }) => {
  return (
    <div className=" gap-5 ">
      <Image
        src={b.image_url}
        width={300}
        height={100}
        alt="book"
        className="rounded-2xl mb-6"
      />
      <div className="text-gray-200 text-start space-y-2">
        <p className="text-2xl">{b.title}</p>
        <p className="text-lg">
          Author : <span className="text-base">{b.author}</span>
        </p>

        <div className="flex items-center gap-10">
          <Chip>{b.category}</Chip>
          <Link
            href={""}
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

{
  /* <div className=" gap-5 ">
  <Image
    src="https://i.ibb.co.com/Myxn2WCx/Tailwind-CSS-Guide.png"
    width={300}
    height={100}
    alt="book"
    unoptimized
    className="rounded-2xl mb-6"
  />
  <div className="text-gray-200 text-start space-y-2">
    <p className="text-2xl">{b.title}</p>
    <p className="text-lg">
      Author : <span className="text-base">{b.author}</span>
    </p>
    <p className="text-sm ">{b.description}</p>
    <Chip>{b.category}</Chip>
    <p>
      Left Books Copy <span>{b.available_quantity} pies</span>
    </p>
  </div>
</div>; */
}
