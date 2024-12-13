export default function ReviewCard({ review }) {
  return (
    <div className="review card mb-3">
      <div className="card-body">
        <p>{review.recensione}.</p>
        <span>By: {review.username}</span>

        <div className="vote mt-3">
          <strong>Vote:{review.vote}/5</strong>
        </div>
      </div>
    </div>
  );
}
