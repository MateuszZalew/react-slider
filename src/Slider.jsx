import { shortList, list, longList } from "./data";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
const Slider = () => {
  const [people, setPeople] = useState(shortList);
  return (
    <section>
      {people.map((person) => {
        const { id, image, name, title, quote } = person;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <h5>{name}</h5>
            <p>{title}</p>
            <span>{quote}</span>
            <FaQuoteRight />
          </article>
        );
      })}
    </section>
  );
};

export default Slider;
