import BooksCard from "@/components/booksCard/BooksCard";
import LeftCategorySideBar from "@/components/leftSideBar/LeftCategorySideBar";
import { fetchAllBooks } from "@/data/FetchBooksData";


const AllBooksPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  const AllBooks = await fetchAllBooks()
  const filteredBooks = category ? AllBooks.filter(b => b.category.toLowerCase() === category) : AllBooks;
  
  return (
    <div className="grid grid-cols-4 gap-4">
      <LeftCategorySideBar />
      <div className="col-span-3 text-center">
        <h3 className="text-4xl font-semibold text-gray-400 mb-5">All Books</h3>
        <div className="">
          {filteredBooks.map((b) => (
            <BooksCard key={b.id} b={b}></BooksCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
