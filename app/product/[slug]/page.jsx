import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import AddToCartBtn from "@/components/AddToCartBtn";
import Link from "next/link";

import {
  BadgeCheck,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from "lucide-react";

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
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* IMG */}
          <div className="xl:flex-1 h-[460px] bg-[#FFFFFF] xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image
              src={urlFor(deck.images[0]).url()}
              width={473}
              height={290}
              priority
              alt=""
            />
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
                <p className="text-lg font-semibold">${deck.price} CAD</p>
              </div>
              <p>{deck.description}</p>
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
            </div>
            {/* INFO */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <Clock size={20} className="text-accent" />
                <p>Fast Delivery.</p>
              </div>

              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p>Free shipping on orders over $75.</p>
              </div>

              <div className="flex gap-2">
                <RefreshCw size={20} className="text-accent" />
                <p>Returnable for 14 days unopened from original packaging.</p>
              </div>

              <div className="flex gap-2">
                <BadgeCheck size={20} className="text-accent" />
                <p>
                  Guaranteed to add some excitement to your night, be sure to
                  grab your drinks!
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
