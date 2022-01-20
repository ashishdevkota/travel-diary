import data from "../Data";
import Card from "./Card";
import "../card.css";
const AllPost = () => {
  const cards = data.map((item) => <Card key={item.id} {...item} />);

  return <section className="card-container">{cards}</section>;
};

export default AllPost;
