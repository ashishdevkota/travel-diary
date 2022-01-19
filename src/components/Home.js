import Card from "./Card";
import data from "../data";
import { Link } from "react-router-dom";
function Home() {
  const homepagePost = data
    .filter((datas) => datas.id < 4)
    .map((item) => <Card key={item.id} {...item} />);
  return (
    <div>
      <section className="card-container">{homepagePost}</section>

      <Link to="allpost">view all places</Link>
    </div>
  );
}

export default Home;
