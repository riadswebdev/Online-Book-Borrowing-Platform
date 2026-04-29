export const fetchAllBooks = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platform-zeta.vercel.app/allBookData.json",
  );
  return await res.json();
};

export const fetchBooksByCategory = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platform-zeta.vercel.app/category.json",
  );
  return await res.json();
};
