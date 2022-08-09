import Card from "./Card";
import "../card.css";
import { Link } from "react-router-dom";

const AllPost = ({ data }) => {
  const cards = data.map((item) => <Card key={item.id} {...item} />);

  return (
    <>
      <section className="card-container">{cards}</section>
      <Link className="home" to="/">
        Back to home page
      </Link>
    </>
  );
};

export default AllPost;
