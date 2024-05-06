"use client";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import Deck from "./Deck";

const DeckCategories = ({ decks }) => {
  const [category, setCategory] = useState("all");
  const [filteredDecks, setFilteredDecks] = useState([]);
  const [price, setPrice] = useState(120);

  useEffect(() => {
    const filtered = decks.filter((deck) => {
      const categoryMatch =
        category === "all"
          ? decks
          : deck.categories.some((categ) => categ.name === category);
      const priceMatch = deck.price <= price;
      return categoryMatch && priceMatch;
    });
    setFilteredDecks(filtered);
  }, [category, price, decks]);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setCategory("all")}
                />
                <label htmlFor="all">All</label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="steamy"
                  id="steamy"
                  onClick={() => setCategory("steamy")}
                />
                <label htmlFor="steamy">Steamy</label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="intimate"
                  id="intimate"
                  onClick={() => setCategory("intimate")}
                />
                <label htmlFor="intimate">Intimate</label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="exploration"
                  id="exploration"
                  onClick={() => setCategory("exploration")}
                />
                <label htmlFor="exploration">Exploration</label>
              </div>
            </RadioGroup>

            {/* Price Slider */}

            <div className="max-w-56">
              <div className="text-lg mb-4 font-medium">
                Max Price:{" "}
                <span className="text-accent font-semibold ml-2">${price}</span>
                <span className="ml-2">
                  (
                  {filteredDecks.length > 1
                    ? `${filteredDecks.length} items`
                    : filteredDecks === 0
                      ? `${filteredDecks.length} items`
                      : `${filteredDecks.length} item`}
                  )
                </span>
              </div>
              <Slider
                defaultValue={[120]}
                max={120}
                step={1}
                onValueChange={(val) => setPrice(val[0])}
              />
            </div>
          </aside>

          {/* Deck List */}
          <div className="w-full xl:w-[1050px] ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
              {filteredDecks.map((deck) => {
                return <Deck deck={deck} key={deck.price_id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeckCategories;
