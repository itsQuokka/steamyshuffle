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
  Smartphone,
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

const getKey = (name) => {
  const dict = {
    "Steamy Shuffle - Hot Version": "price_1PinTGJspEGYDPOPXrOYE6Lt",
    "Steamy Shuffle - Most Likely To": "price_1PinbnJspEGYDPOPlYYI7Iua",
    "Steamy Shuffle - Let's Get F*cked": "price_1PinbAJspEGYDPOPfQKlrhhv",
    "Steamy Shuffle - Let's Get Deep": "price_1PinbSJspEGYDPOPLqNV3J4r",
  };

  return dict[name];
};

const ProductDetails = async ({ params }) => {
  const deck = await getData(params.slug);
  const price_id = getKey(deck.name);

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
                  text={"Purchase PDF"}
                  btnStyles="btn btn-accent"
                />
              </div>
            </div>
            {/* INFO */}

            <div className="flex flex-col gap-3 mx-auto md:mx-0 items-left">
              <div className="flex gap-2 flex-col md:flex-row items-center">
                <Clock size={25} className="text-accent" />
                <h3 className="text-lg">Fast Delivery</h3>
                <p>No time to waste, your PDF will be delivered on purchase!</p>
              </div>

              <div className="flex gap-2 flex-col md:flex-row items-center">
                <PackageCheck size={25} className="text-accent" />
                <h3 className="text-lg">Returns</h3>
                <p>
                  By purchasing, you understand that documents provided are
                  non-refundable.
                </p>
              </div>
              <div className="flex gap-2 flex-col md:flex-row items-center">
                <Smartphone size={25} className="text-accent" />
                <h3 className="text-lg">Convenience</h3>
                <p className="text-center md:text-left">
                  Stop getting your cards all mushy - keep it on your phone!
                </p>
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
    </section>
  );
};

export default ProductDetails;
