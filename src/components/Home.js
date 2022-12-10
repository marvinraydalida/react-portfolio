import Introduction from "./Introduction";
import Gallery from "./Gallery";
import Card from "./Card";

import {} from "./Home.module.css";

function Home() {
  return (
    <>
      <Introduction />
      <Gallery id="up">
        <Card />
        <Card />
        <Card />
        <Card />
      </Gallery>
      <Gallery id="down">
        <Card />
        <Card />
        <Card />
        <Card />
      </Gallery>
    </>
  );
}

export default Home;
