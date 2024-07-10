
import React from "react";

interface FooterColumnProps {
  items: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ items }) => {
  return (
    <div className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-base font-semibold text-zinc-900 max-md:mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${index > 0 ? "mt-6" : ""} leading-[160%]`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
