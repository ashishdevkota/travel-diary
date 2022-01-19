import { MdRoom } from "react-icons/md";

import "../card.css";
const Card = (props) => {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props;

  return (
    <div className="card">
      <img src={imageUrl} className="card--img" alt="img" />
      <div className="card--datails">
        <p className="card-location">
          <MdRoom />
          {location}
          <a href={googleMapsUrl} className="img--link">
            Views on Google Map
          </a>
        </p>
        <h2 className="card-title">{title}</h2>
        <h6 className="card--date">
          {startDate} - {endDate}
        </h6>
        <p className="card-descroption">{description}</p>
      </div>
      <hr />
    </div>
  );
};

export default Card;
