
import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  userType: string;
  requests: number;
  location: string;
  date: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  userType,
  requests,
  location,
  date,
}) => {
  const getUserTypeClass = (type: string) => {
    switch (type) {
      case "Usuario Bronze":
        return "bg-amber-600 text-white";
      case "Usuario Prata":
        return "bg-stone-300 text-cyan-800";
      case "Usuario Ouro":
        return "bg-yellow-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getRequestClass = (count: number) => {
    if (count <= 2) return "bg-sky-100";
    if (count <= 5) return "bg-yellow-100";
    return "bg-red-300";
  };

  return (
    <article className="flex flex-col justify-center pt-px pb-5 bg-white rounded-lg border border-gray-300 border-solid">
      <div className="flex overflow-hidden relative flex-col justify-center w-full aspect-[1.42]">
        <img
          loading="lazy"
          src="http://b.io/ext_87-"
          alt="Product background"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="w-full aspect-[1.41]"
        />
      </div>
      <div className="flex flex-col items-start pr-11 pl-4 mt-3 max-md:pr-5">
        <h3 className="text-base font-bold leading-5 text-center text-zinc-900">
          {title}
        </h3>
        <p className="mt-7 text-sm leading-5 text-zinc-900">{description}</p>
        <span
          className={`justify-center px-6 py-2.5 mt-3.5 text-xs font-semibold leading-4 text-center rounded max-md:px-5 ${getUserTypeClass(
            userType
          )}`}
        >
          {userType}
        </span>
        <span
          className={`justify-center p-1.5 mt-3.5 text-xs font-semibold leading-5 text-cyan-800 rounded ${getRequestClass(
            requests
          )}`}
        >
          {requests} Solicitações até o momento
        </span>
        <div className="flex gap-1 mt-3 text-xs text-gray-700">
          <img
            loading="lazy"
            src="http://b.io/ext_88-"
            alt="Location icon"
            className="shrink-0 w-4 aspect-square"
          />
          <div className="flex-auto my-auto">{location}</div>
        </div>
        <div className="mt-2 text-xs text-gray-700">{date}</div>
      </div>
    </article>
  );
};

export default ProductCard;
