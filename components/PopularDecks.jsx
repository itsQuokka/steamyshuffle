import { client } from "@/app/lib/sanity";
import Link from "next/link";
import React from "react";
import PopularDecksCarousel from "./PopularDecksCarousel";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Popular']._id, categories)]{
    _id,
      name,
      description,
      images,
      price,
      price_id,
      "slug": slug.current,
      "categories": categories[]->{
      name
    }
  }`;

  const data = await client.fetch(query);
  return data;
};

const PopularDecks = async () => {
  const decks = await getData();

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">
          Most <span className="text-accent">Popular</span> Products
        </h2>
        <p className="text-center mb-[30px]">
          You might not end up at the bar.
        </p>
        <PopularDecksCarousel decks={decks} />
        <Link href="/our-decks">
          <button className="btn btn-accent mx-auto">See all Decks</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularDecks;
