import Banner from "../components/Banner";
import BookCard from "../components/BookCard";
import { useState, useEffect } from "react";

export default function BooksPage() {
  const books_api_url = "http://localhost:3001/api/books";
  const [books, SetBooks] = useState([]);

  useEffect(() => {
    fetch(books_api_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetBooks(data.books);
      });
  }, []);

  return (
    <>
      <Banner
        title="Bool Books"
        subtitle="The nerdest book community"
        leadtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae adipisci voluptatem cumque itaque, illo labore delectus expedita quam, ad quidem rem ab impedit eum, ex quia quisquam facilis quis!"
      />

      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {books.map((book) => (
              <div className="col-4" key={book.id}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
