import React from 'react';
import Header from '../../pages/home/components/Header/Header';
import Banner from '../../pages/home/components/Banner/Banner';
import Footer from '../../pages/home/components/Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout component that wraps the entire application.
 * Includes the Header, Banner, main content area, and Footer.
 * @param {LayoutProps} props - The props for the Layout component.
 * @param {React.ReactNode} props.children - The child components to be rendered in the main content area.
 */
const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col pb-20 bg-stone-50">
      <Header />
      <Banner />
      <main className="flex flex-col self-center px-5 mt-16 w-full max-w-[1680px] max-md:mt-10 max-md:max-w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;