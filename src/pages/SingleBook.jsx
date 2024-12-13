import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import ReviewCard from "../components/ReviewCard";

useParams;
export default function SingleBook() {
  const { id } = useParams();

  const book_api_url = `http://localhost:3001/api/books/${id}`;
  const [book, SetBook] = useState(null);

  useEffect(() => {
    fetch(book_api_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetBook(data);
      });
  }, []);

  return (
    <>
      <Banner
        title={book?.title}
        subtitle={`By: ${book?.author}`}
        leadtext={`By: ${book?.abstract}`}
      />

      <section className="reviews">
        <div className="container">
          {/* All reviews here */}

          {book &&
            book?.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
        </div>
      </section>
    </>
  );
}
