import React from "react";
import Layout from "../../../layouts/Auth/SingInLayout";
import RegistrationFormLogin from "./Components/RegistrationFormLogin";
import ImageSection from "../cadastro/Components/ImageSection";


const LoginPage: React.FC = () => {
    return (
        <Layout>
            <div className="relative self-center mt-7 w-full h-full max-w-[1210px] max-md:max-w-full max-md:mt-0">
                <div className="flex flex-row w-full max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                        <RegistrationFormLogin />
                    </div>
                    <div className="flex flex-col ml-5 w-full max-sm:hidden max-md:ml-0 max-md:w-full">
                        <ImageSection />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LoginPage