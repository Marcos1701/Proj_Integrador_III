
import React from "react";

interface CategoryItemProps {
  icon: string;
  name: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col">
      <img
        loading="lazy"
        src={icon}
        alt={`${name} icon`}
        className="self-center aspect-square w-[92px]"
      />
      <div className="mt-2">{name}</div>
    </div>
  );
};

export default CategoryItem;
