import BookCard from "../components/BookCard";
import "./Home.css";

function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Searched");
  };

  const books = [
    {
      id: 1,
      title: "The Name of the Wind",
      release_date: "2007",
      cover: "https://covers.openlibrary.org/b/id/8231996-L.jpg",
    },
    {
      id: 2,
      title: "Mistbord: The Final Empire",
      release_date: "2006",
      cover: "https://covers.openlibrary.org/b/id/8108691-L.jpg",
    },
    {
      id: 3,
      title: "The Way of Kings",
      release_date: "2010",
      cover: "https://covers.openlibrary.org/b/id/8379780-L.jpg",
    },
    {
      id: 4,
      title: "The Way of Kings",
      release_date: "2010",
      cover: "https://covers.openlibrary.org/b/id/8379780-L.jpg",
    },
  ];

  return (
    <div className="home">
      <h1 className="home-h1">Books</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for books..."
          className="search-input"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <div className="books-grid">
        {books.map((book, index) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
export default Home;
