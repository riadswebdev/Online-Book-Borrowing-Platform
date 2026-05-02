import { fetchAllBooks } from "@/data/FetchBooksData";
import BooksCard from "../booksCard/BooksCard";

const FeaturePage = async () => {
  const data = await fetchAllBooks();
  const topBooks = data.slice(0, 4);
  return (
    <div className="mb-10 mx-5 xl:mx-0 ">
      <h2 className="text-3xl font-semibold text-gray-400 mb-10 ">
        Feature
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {topBooks.map((b) => (
          <BooksCard key={b.id} b={b} />
        ))}
      </div>
    </div>
  );
};

export default FeaturePage;
