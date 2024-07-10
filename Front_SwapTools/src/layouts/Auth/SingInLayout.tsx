
import React from "react";
import Header from "../../pages/auth/cadastro/Components/Header";

type LayoutProps = {
  children: React.ReactNode;
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center bg-white h-full">
      <Header />
      <main className="flex overflow-hidden relative flex-col px-11 py-10 w-full min-h-[900px] max-md:px-5 max-md:max-w-full h-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4db85b513cb6fcd10691b5ec2669a832160b4c5f4c679d5141856fcf3b1b329f?apiKey=e659b181c3ec4be580186cc59fea34e1&"
          alt=""
          className="object-cover absolute inset-0 size-full max-md:hidden"
        />
        {children}
      </main>
    </div>
  );
};

export default Layout;
