import Card from "./Card";
import "../card.css";
const AllPost = ({ data }) => {
  const cards = data.map((item) => <Card key={item.id} {...item} />);

  return <section className="card-container">{cards}</section>;
};

export default AllPost;
