import clsx from "clsx";
import "./Card.css";
import cardBack from "../assets/card-back-2.jpeg?react";

export default function Card({ image, imageAlt, flipped, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx("card", flipped ? "flipped" : "")}
    >
      <img
        src={flipped ? cardBack : image}
        alt={imageAlt}
        className={clsx("image", flipped ? "card-back" : "")}
      />
    </button>
  );
}
