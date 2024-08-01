import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import AddToCartBtn from "@/components/AddToCartBtn";
import Link from "next/link";

import ImageComponent from "@/components/ImageComponent";

import {
  BadgeCheck,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
  EyeOff,
} from "lucide-react";
import TestimonialSlug from "@/components/TestimonialSlug";

const getData = async (slug) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
        _id,
        images,
        price,
        price_id,
        name,
        description,
        "slug": slug.current,
        "category": categories->{name}
    }`;
  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({ params }) => {
  const deck = await getData(params.slug);

  return (
    <section className="pt-0 lg:pt-20 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* IMG */}
          <div className="xl:flex-1 h-[460px] bg-[#FFFFFF] xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <ImageComponent deck={deck.images} />
          </div>
          {/* Text */}
          <div className="flex-1 flex flex-col justify-center items-start gap-10">
            <Link
              href="/our-decks"
              className="flex items-center gap-2 font-semibold"
            >
              <ChevronLeft size={20} />
              Back to Decks
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3>{deck.name}</h3>
                <p className="text-lg text-accent font-semibold">
                  ${deck.price} CAD
                </p>
              </div>
              <p>{deck.description}</p>
              <div className="flex flex-col gap-3 mx-auto md:mx-0 items-left md:flex-row">
                <AddToCartBtn
                  price_id={deck.price_id}
                  name={deck.name}
                  currency="CAD"
                  description={deck.description}
                  images={deck.images}
                  price={deck.price}
                  text={"Add to Cart"}
                  btnStyles="btn btn-accent"
                />
                <AddToCartBtn
                  price_id={"price_1Pimx7JspEGYDPOP6RIzBEi0"}
                  name={deck.name + " PDF"}
                  currency="CAD"
                  description={deck.description}
                  images={deck.images}
                  price={5.99}
                  text={"Purchase PDF $5.99"}
                  btnStyles="btn btn-accent"
                />
              </div>
            </div>
            {/* INFO */}

            <div className="flex flex-col gap-3 mx-auto md:mx-0 items-left">
              <div className="flex gap-2 flex-col md:flex-row items-center">
                <Clock size={25} className="text-accent" />
                <h3 className="text-lg">Fast Delivery</h3>
                <p>Your package will be shipped the same day!</p>
              </div>

              <div className="flex gap-2 flex-col md:flex-row items-center">
                <EyeOff size={25} className="text-accent" />
                <h3 className="text-lg">Discreet</h3>
                <p>We will ship your package in plain, discreet packaging.</p>
              </div>

              <div className="flex gap-2 flex-col md:flex-row items-center">
                <PackageCheck size={25} className="text-accent" />
                <h3 className="text-lg">Returns</h3>
                <p>Free returns for Canadian and US shoppers!</p>
              </div>

              <div className="flex gap-2 flex-col md:flex-row items-center">
                <BadgeCheck size={25} className="text-accent" />
                <h3 className="text-lg">Fun Fact</h3>
                <p className="text-center md:text-left">
                  Did you know Steamy Shuffle is an independent business?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto items-center gap-4">
        <TestimonialSlug />
      </div>
    </section>
  );
};

export default ProductDetails;
