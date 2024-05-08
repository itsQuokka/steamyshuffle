"use client";

import AddToCartBtn from "./AddToCartBtn";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import {} from "react-icons/cg";
import { CgEye, CgShoppingBag } from "react-icons/cg";

const Deck = ({ deck }) => {
  const popularDeckCat = deck.categories.find(
    (deck) => deck.name === "Popular"
  );

  const friendsDeckCat = deck.categories.find(
    (deck) => deck.name === "Friends"
  );
  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-[#FFFFFF] w-full h-full transition-all duration-300 flex justify-center items-center">
          {/* Bade */}
          {popularDeckCat && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              Popular
            </div>
          )}

          {friendsDeckCat && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              Friends
            </div>
          )}

          <Image
            src={urlFor(deck.images[0]).url()}
            width={240}
            height={147}
            alt=""
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddToCartBtn
            price_id={deck.price_id}
            name={deck.name}
            currency="CAD"
            description={deck.description}
            images={deck.images}
            price={deck.price}
            btnStyles="btn-icon bg-accent"
            icon={<CgShoppingBag />}
          />
          <Link href={`/product/${deck.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="text-gray-400 font-semibold mb-2">
        {deck.categories[0].name}
      </h5>
      <h5 className="mb-1">{deck.name}</h5>
      <div className="text-lg font-bold text-accent items-center">
        <span className="text-primary line-through">
          ${Math.round((deck.price * 100) / 100) + 20}
        </span>
        {"   "}${Math.round(deck.price * 100) / 100} CAD
      </div>
    </div>
  );
};

export default Deck;
