import "./BookCard.css";

function BookCard({ book }) {
  const handleFavorite = (event) => {
    event.preventDefault();
    alert("Favorite pressed");
  };

  return (
    <div className="book-card">
      <div className="book-cover">
        <img className="book-cover-img" src={book.cover} alt={book.title} />
        <div className="book-overlay">
          <button className="favorite-btn" onClick={handleFavorite}>
            🎔
          </button>
        </div>
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-release">{book.release_date}</p>
      </div>
    </div>
  );
}

export default BookCard;
