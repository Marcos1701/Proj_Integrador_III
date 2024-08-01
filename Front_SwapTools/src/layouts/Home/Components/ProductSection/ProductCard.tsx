import {FC} from "react";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  userType: string;
  requests: number;
  location: string;
  date: string;
};

const ProductCard: FC<ProductCardProps> = ({
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
      case "Bronze":
        return "bg-amber-600 text-white";
      case "Prata":
        return "bg-stone-300 text-cyan-800";
      case "Ouro":
        return "bg-yellow-500 text-white";
      default:
        return "bg-amber-600 text-white";
    }
  };

  const getRequestClass = (count: number): string => {
    switch (true) {
      case count <= 2:
        return "bg-sky-100";
      case count <= 5:
        return "bg-yellow-100";
      default:
        return "bg-red-300";
    }
  };

  return (
    <div className="flex flex-col justify-center align-middle pt-px pb-5 bg-white rounded-lg border border-gray-300 border-solid w-64">
      <div className="flex items-center justify-center w-60 rounded-lg overflow-hidden mt-1 mx-2">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="shrink-0 w-full border border-gray-300"
        />
      </div>
      <div className="flex flex-col items-start pr-11 pl-4 mt-3 max-md:pr-5 max-md:w-[214px]">
        <h3 className="text-base font-bold leading-5 text-center text-zinc-900">
          {title}
        </h3>
        <p className="mt-7 text-sm leading-5 text-zinc-900">{description}</p>
        <div
          className={`justify-center px-6 py-2.5 mt-3.5 text-xs font-semibold leading-4 text-center rounded max-md:px-5 ${getUserTypeClass(
            userType
          )}`}
        >
          Usuario {userType}
        </div>
        <div
          className={`justify-center p-1.5 mt-3.5 text-xs font-semibold leading-5 text-cyan-800 rounded ${getRequestClass(
            requests
          )}`}
        >
          {requests} Solicitações até o momento
        </div>
        <div className="flex gap-1 mt-3 text-xs text-gray-700">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7880c70c2534610d6133735a74c81d085f6fd24b68fc5c57c100b1582d828f4?apiKey=e659b181c3ec4be580186cc59fea34e1&"
            alt=""
            className="shrink-0 w-4 aspect-square"
          />
          <div className="flex-auto my-auto">{location}</div>
        </div>
        <div className="mt-2 text-xs text-gray-700">{date}</div>
      </div>
    </div>
  );
};

export default ProductCard;
