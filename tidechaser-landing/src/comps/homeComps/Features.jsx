import Card from "../elements/Card";
import LongCard from "../elements/LongCard";
import HeaderText from "../elements/HeaderText";
import favouritesImg from "../../assets/rating.png";
import boardImg from "../../assets/surfboard.png";
import weatherImg from "../../assets/weather-forecast.png";

const data = [
  {
    title: "Find Global Surf Data",
    content:
      "We collate wave and oceanography data from 7 different sources to provide a high quality surf report.",
    image: weatherImg,
  },
  {
    title: "Add Favourites Breaks",
    content:
      "In our app you can save your favourite spots and get up-to-date reports with a single click.",
    image: favouritesImg,
  },
  {
    title: "Reports for your Board",
    content:
      "A feature unique to Tide Chaser, if you tell us the size of board you ride...",
    image: boardImg,
  },
];

function Features() {
  return (
    <section className="features">
      <div className="cols">
        <div className="cards">
          {data.map((item, index) => {
            return (
              <LongCard
                key={index}
                title={item.title}
                content={[item.content]}
                image={item.image}
              />
            );
          })}
        </div>
        <div className="surf-text">
          <HeaderText
            heading="Features"
            text="Tide Chaser is packed with features so that you can plan the perfect surf trip with confidence that when you arrive, the breaks will be just as you expected."
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
