import { fetchAllBooks } from "@/data/FetchBooksData";
import BooksCard from "../booksCard/BooksCard";

const FeaturePage = async () => {
  const data = await fetchAllBooks();
  const topBooks = data.slice(0, 4);
  return (
    <div className="grid grid-cols-2">
      {topBooks.map((b) => (
        <BooksCard key={b.id} b={b} />
      ))}
    </div>
  );
};

export default FeaturePage;
