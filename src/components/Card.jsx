import clsx from "clsx";
import "./Card.css";

export default function Card({ image, imageAlt, className, onClick }) {
  return (
    <button onClick={onClick} className={clsx("card", className)}>
      <img src={image} alt={imageAlt} className="image" />
    </button>
  );
}
