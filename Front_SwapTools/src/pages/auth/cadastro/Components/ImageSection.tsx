
import React from "react";

const ImageSection: React.FC = () => {
  return (
    <section className="flex relative flex-col justify-center self-stretch my-auto w-full border border-white border-solid shadow-sm backdrop-blur-2xl bg-white bg-opacity-20 rounded-[46px] max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6305cc5f1bad0cb13a8d7d916be539e2804fa63171fce792cd029821247b9363?apiKey=e659b181c3ec4be580186cc59fea34e1&"
        alt="Decorative image"
        className="w-full shadow-sm aspect-[1.03] backdrop-blur-[25px] max-md:max-w-full"
      />
    </section>
  );
};

export default ImageSection;
