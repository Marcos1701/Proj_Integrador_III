
import React from "react";
import Layout from "../../../layouts/Auth/SingInLayout";
import RegistrationForm from "./Components/RegistrationForm";
import ImageSection from "./Components/ImageSection";

const RegistrationPage: React.FC = () => {
  return (
    <Layout>
      <div className="relative self-center mt-7 w-full h-full max-w-[1210px] max-md:max-w-full max-md:mt-0">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <RegistrationForm />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-sm:hidden max-md:ml-0 max-md:w-full">
            <ImageSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegistrationPage;
