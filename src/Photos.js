import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        {props.photos.map(function (photos, index) {
          return <img src={photos.largeImageURL} alt="" />;
        })}
      </section>
    );
  } else {
    return null;
  }
}
//https://pixabay.com/get/gb8c0c9ec9e95aedd182557e2efb1576f0f24fcd66395df49a87ad9f443ef403286bca3402f44dc6cd89fc916fcd237c4aa2489f7ee255504143c1cb250b81fd0_1280.jpg
