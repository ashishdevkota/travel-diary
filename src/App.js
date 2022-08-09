import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPost from "./components/AllPost";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const data = [
    {
      id: 1,
      title: "PREIKESTOLEN",
      location: "Stavanger,Norway",
      googleMapsUrl: "https://goo.gl/maps/Lyt196GAxm7LY3pf9",
      startDate: "12 Jan, 2021",
      endDate: "24 Jan, 2021",
      description:
        "Preikestolen is one of Rogaland county’s most visited attractions, and one of the country’s most spectacular photo subjects. Preikestolen has been named one of the world’s most spectacular viewing points by both CNN Go and Lonely Planet. It rises 604 metres above the Lysefjord. ",
      imageUrl: "../img/prekistolan.jpg",
    },
    {
      id: 2,
      title: "Sverd i fjell(Swords in Rock)",
      location: "Stavanger,Norway",
      googleMapsUrl: "https://goo.gl/maps/41MeW5pYHygNQ4sD9",
      startDate: "12 Jan, 2021",
      endDate: "24 Jan, 2021",
      description:
        "The monument was created by sculptor Fritz Røed from Bryne and was unveiled by King Olav V of Norway in 1983. The three bronze swords stand 10 metres (33 ft) tall and are planted into the rock of a small hill next to the fjord. They commemorate the historic Battle of Hafrsfjord which by tradition took place there in the year 872, when King Harald Fairhair gathered all of Norway under one crown. The largest sword represents the victorious Harald, and the two smaller swords represent the defeated petty kings. The monument also represents peace, since the swords are planted into solid rock, so they may never be removed",
      imageUrl: "../img/3sword.jpeg",
    },
    {
      id: 3,
      title: "DALSNUTEN",
      location: "Stavanger,Norway",
      googleMapsUrl: "https://goo.gl/maps/ec1RvZJweksgCgBv8",
      startDate: "12 Jan, 2021",
      endDate: "24 Jan, 2021",
      description: `Dalsnuten is the most visited peak on the east side of Gandsfjorden. It is a short walk from the parking lot at Gramstad to the top and it is possible to walk there all year round. The trip has a blue gradation and is great for the whole family.

Dalsnuten has an altitude of 324 m. A refreshing walk through easy terrain to the summit rewards you with a marvellous view. There are many kilometres of footpaths in varied terrain with many viewpoints along this route. There are car parks at Gramstad, Vatne, Holmavika and Dale with information boards. Most pathways require good walking shoes, whilst a hiking from Gramstad to Kubbetjørn is along graveled tracks and a lot easier to walk upon. From Gramstad up to "Revholstjørn" the pathway, here too, is of good standard and suitable for prams and wheelchairs. There are good opportunities for bathing at Revholstjørn. Allow 2-3 hours for a round trip.
`,
      imageUrl: "../img/dalsnuten.jpeg",
    },

    {
      id: 4,
      title: "Norwegian Petroleum Museum",
      location: "Stavanger,Norway",
      googleMapsUrl: "https://g.page/oljemuseet?share",
      startDate: "12 Jan, 2021",
      endDate: "24 Jan, 2021",
      description: `The Norwegian Petroleum Museum is a museum for everyone. Its exhibitions show how offshore operations have become Norway's most important industry, and give you experiences of this activity.

NORWEGIAN PETROLEUM MUSEUM – KNOWLEDGE AND EXPERIENCES. The Norwegian Petroleum Museum is a museum for everyone.
Its exhibitions show how offshore operations have become Norway’s most important industry, and give you experiences of this activity. How oil and gas are formed, how resources beneath the seabed are found, and how drilling and production are conducted.
`,
      imageUrl: "../img/petroliummuseus.jpg",
    },
    {
      id: 5,
      title: "Nidaros Cathedral",
      location: "Trondheim,Norway",
      googleMapsUrl: "https://goo.gl/maps/g9VFeBstVaKAxMYm8",
      startDate: "12 Jan, 2021",
      endDate: "24 Jan, 2021",
      description: `Nidaros Cathedral (Norwegian: Nidarosdomen / Nidaros Domkirke) is a cathedral of the Church of Norway located in the city of Trondheim in Trøndelag county. It is built over the burial site of King Olav II (c. 995–1030, reigned 1015–1028), who became the patron saint of the nation, and is the traditional location for the consecration of new kings of Norway. It was built over a 230-year period, from 1070 to 1300 when it was substantially completed. However additional work, additions and renovations have continued intermittently since then; the most recent changes were completed in 2001. Nidaros was designated as the cathedral for the Diocese of Nidaros in 1152. After experiencing the turmoil and controversies of the Protestant Reformation of the 16th century, it was taken from the Catholic Church by the newly established state Church of Norway in 1537, which adopted the teachings and reforms of Martin Luther, Phillip Melanchthon, and others, becoming an Evangelical Lutheran church. Nidaros is the northernmost medieval cathedral in the world.
`,
      imageUrl: "../img/nidaros.jpeg",
    },
    {
      id: 6,
      title: "Tyholttårnet",
      location: "Trondheim,Norway",
      googleMapsUrl: "https://goo.gl/maps/g9VFeBstVaKAxMYm8",
      startDate: "12 Jan, 2021",
      endDate: "24 Jan, 2021",
      description: `Tyholttårnet is a 126 metre tall radio tower with an observation deck in Trondheim, Norway. With its 124-meter it is currently the tallest building in Norway. Tyholttårnet was built in 1985. The tower features a revolving restaurant, at an altitude of 81 metres, which makes one complete revolution per hour.`,
      imageUrl: "../img/Tyholttårnet.jpg",
    },
  ];

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/allpost" element={<AllPost data={data} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
