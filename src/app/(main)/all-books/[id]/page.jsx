import BorrowButton from "@/components/borrowButton/BorrowButton";
import { fetchAllBooks } from "@/data/FetchBooksData";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const BooksDetails = async ({ params }) => {
  const { id } = await params;
  const Books = await fetchAllBooks();
  const b = Books.find((b) => b.id == id);
 
    
  
    
  return (
    <div
      className="w-full max-w-280 mx-auto flex items-start
     gap-10 border p-6 border-white/5 mb-10 rounded-2xl"
    >
      <div className="flex-1">
        <Image
          src={b?.image_url}
          width={250}
          height={100}
          alt="book"
          unoptimized
          className="rounded-2xl  mx-auto "
        />
      </div>
      <div className="text-gray-200 flex-2 flex flex-col justify-center text-start space-y-2">
        <p className="text-2xl">{b?.title}</p>
        <p className="text-lg">
          Author : <span className="text-base">{b.author}</span>
        </p>
        <p className="text-sm ">{b?.description}</p>

        <p>
          Left Books Copy <span>{b?.available_quantity} pies</span>
        </p>
        <div className="">
          <p>
            <Chip>{b?.category}</Chip>
          </p>
          <BorrowButton/>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;

