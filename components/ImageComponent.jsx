"use client";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import React from "react";

import { useState } from "react";

export default function ImageComponent({ deck }) {
  const [currentImage, setCurrentImage] = useState(-1);
  const productImages = [];

  deck.map((currElement, _) => {
    if (!(_ === 0)) {
      productImages.push(urlFor(currElement).url());
    }
  });

  /** 
    Todo: Image compression for lazy loading.
  **/

  return (
    <div className="">
      <div className="p-5 flex flex-col lg:flex-row lg:mx-auto justify-center">
        <div className="flex flex-row lg:flex-col gap-8 justify-between m-20 mx-auto md:mx-20 h-auto w-auto">
          {productImages.map((src, index) => {
            return (
              <Image
                key={index}
                className="rounded-md cursor-pointer w-auto h-auto"
                src={src}
                width={64}
                height={64}
                onClick={() => {
                  setCurrentImage(index);
                }}
                alt=""
              />
            );
          })}
        </div>
        <div className="flex gap-4 items-center mx-auto min-h-280">
          <div className="w-1/2 h-1/2 lg:w-auto lg:h-auto mx-auto">
            <Image
              key="101"
              className="rounded-mb"
              src={
                currentImage !== -1
                  ? productImages[currentImage]
                  : urlFor(deck[0]).url()
              }
              width={280}
              height={280}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
