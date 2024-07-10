
import React from "react";

type CategoryItemProps = {
  image: string;
  name: string;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ image, name }) => {
  return (
    <div className="flex flex-col max-sm:flex max-sm:flex-col max-sm:justify-center">
      <img
        loading="lazy"
        src={image}
        alt={name}
        className="self-center aspect-[1.47] w-[92px] max-sm:w-[63px]"
      />
      <div className="mt-2 max-sm:text-xs max-sm:w-[58px]">{name}</div>
    </div>
  );
};

export default CategoryItem;
