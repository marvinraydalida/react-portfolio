import React, { useEffect, useRef } from "react";

function Gallery(props) {
  const galleryRef = useRef();

  useEffect(() => {
    const galleryUpImageSource = [
      "https://preview.redd.it/v73zql478l541.jpg?auto=webp&s=77bfee05a43792bb66cab319103a4b37d12320d1",
      "https://ychef.files.bbci.co.uk/976x549/p0278f0f.jpg",
      "https://cdn1.dotesports.com/wp-content/uploads/2021/10/08041853/ti10-aegis.jpg",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    ];

    const galleryDownImageSource = [
      "https://i.pinimg.com/originals/c1/2d/af/c12daffa996683fe1080c809aca58e23.png",
      "https://ckua.com/wp-content/uploads/2021/11/295-2954222_mlb-wallpaper-for-computer-led-zeppelin-iv-album.jp0g-e1636486157314.jpg",
      "https://i.kym-cdn.com/entries/icons/facebook/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg",
      "https://e1.pxfuel.com/desktop-wallpaper/700/767/desktop-wallpaper-zaku-ii-in-half-metal-poster-zaku-ii-thumbnail.jpg",
    ];
    const gallery = galleryRef.current;
    const images = gallery.children;

    const galleryTop = gallery.getBoundingClientRect().top;
    const galleryBottom = gallery.getBoundingClientRect().bottom;
    const imageHeight = images[0].getBoundingClientRect().height;
    const galleryDirection = gallery.id;

    let index = 0;
    let indexReverse = 3;
    for (const image of images) {
      // (imageHeight - 10) To decrease the margin between images
      let top;
      if (galleryDirection === "up") {
        top = index * (imageHeight - 55);
        image.style.backgroundImage = `url(${galleryUpImageSource[index]})`;
      } else if (galleryDirection === "down") {
        top = indexReverse * (imageHeight - 55);
        image.style.backgroundImage = `url(${galleryDownImageSource[index]})`;
      }

      image.style.top = `${top}px`;
      index++;
      indexReverse--;

      setInterval(() => {
        for (const image of images) {
          const cardTop = parseFloat(image.style.top);
          const currentBottom = image.getBoundingClientRect().bottom;
          const currentTop = image.getBoundingClientRect().top;
          const lastImage = image.parentNode.lastElementChild;
          const lastImageTopValue = parseFloat(lastImage.style.top);

          if (galleryDirection === "up") {
            image.style.top = `${cardTop - 40}px`;
            if (galleryTop > currentBottom) {
              const parentNode = image.parentNode;
              const imageCopy = image.cloneNode(true);
              parentNode.removeChild(image);
              parentNode.appendChild(imageCopy);
              const newLastImage = parentNode.lastElementChild;
              newLastImage.style.top = `${
                lastImageTopValue + (imageHeight - 60)
              }px`;
            }
          }

          if (galleryDirection === "down") {
            image.style.top = `${cardTop + 40}px`;

            if (galleryBottom < currentTop) {
              const parentNode = image.parentNode;
              const imageCopy = image.cloneNode(true);
              parentNode.removeChild(image);
              parentNode.appendChild(imageCopy);
              const newLastImage = parentNode.lastElementChild;
              newLastImage.style.top = `${
                lastImageTopValue - (imageHeight - 60)
              }px`;
            }
          }
        }
      }, 1500);
    }
  }, []);

  return (
    <div ref={galleryRef} className="gallery" id={props.id}>
      {props.children}
    </div>
  );
}

export default Gallery;
