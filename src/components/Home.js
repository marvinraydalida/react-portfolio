import { useEffect } from "react";

import Introduction from "./Introduction";
import Gallery from "./Gallery";
import Card from "./Card";

function Home() {

  useEffect(() => {
    document.body.className = 'home-body';
  }, []);

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
