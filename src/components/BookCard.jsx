import { Link } from "react-router-dom";
export default function BookCard({ book }) {
  return (
    <div className="book card">
      <div className="card-body">
        <h4>{book.title}</h4>
        <span className="text-muted">
          By <span>{book.author}</span>
        </span>
        <p className="overview mb-3">{book.overview}</p>
        <Link to={`/books/${book.id}`} className="btn btn-primary">
          Read more
        </Link>
      </div>
    </div>
  );
}
