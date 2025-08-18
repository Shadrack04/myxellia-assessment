import Image, { StaticImageData } from "next/image";
import React from "react";

type ImageCardProps = {
  image: StaticImageData;
  category: string;
  imageQuantity: number;
};

export default function ImageCard({
  image,
  category,
  imageQuantity,
}: ImageCardProps) {
  return (
    <div className=" relative aspect-[900/669] w-full overflow-hidden rounded-xl">
      <Image
        src={image}
        fill
        alt="Most clicked images"
        className=" object-fill"
      />
      <div className=" absolute z-20 bottom-4 left-4 text-background">
        <p>{category}</p>
        <p className=" font-bold">Urban Prime Plaza Premiere</p>
      </div>
      <div className=" absolute z-30 bottom-2 flex gap-1 left-1/2">
        {Array.from({ length: imageQuantity }, (_, index) => (
          <div
            key={index}
            className={`${
              index != 0 ? "bg-gray-400" : "bg-white"
            } size-1.5 rounded-full `}
          ></div>
        ))}
      </div>
      <div className=" absolute inset-0 bg-black/25"></div>
    </div>
  );
}
