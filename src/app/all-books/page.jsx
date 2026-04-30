import BooksCard from "@/components/booksCard/BooksCard";
import LeftCategorySideBar from "@/components/leftSideBar/LeftCategorySideBar";
import SearchFieldPage from "@/components/searchField/SearchField";
import { fetchAllBooks } from "@/data/FetchBooksData";

const AllBooksPage = async ({ searchParams }) => {
  const { category, search } = await searchParams;
  const AllBooks = await fetchAllBooks();
  console.log(search);
  const filteredBooks = AllBooks.filter((b) => {
    const findCategory =
      category ? b.category.toLowerCase() === category : true;

    const findSearch =
      search ? b.title.toLowerCase().includes(search.toLowerCase()) : true;

    return findCategory && findSearch;
  });

  return (
    <div className="mx-5 xl:mx-0">
      <h3 className="text-4xl font-semibold text-gray-400 mb-10 text-center">
        All Books
      </h3>

      <div className="grid sm:grid-cols-4 gap-4">
        <LeftCategorySideBar />
        <div className="col-span-3 text-center">
          <div className="sm:flex items-center justify-between mb-5">
            <div className="  text-start  ">
              <p className="text-lg sm:text-xl bg-linear-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent font-semibold ">
                Our Library
              </p>
              <p className="text-sm text-gray-300">
                Showing {AllBooks.length} item(s)
              </p>
            </div>
            <SearchFieldPage />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBooks.map((b) => (
              <BooksCard key={b.id} b={b}></BooksCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
