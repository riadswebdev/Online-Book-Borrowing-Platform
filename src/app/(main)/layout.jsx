import TopBooksMarque from '@/components/marque/TopBooksMarque';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const MainLayout = ({children}) => {
    return (
      <>
        <Navbar />
        <TopBooksMarque />
        {children}
        <Toaster/>
      </>
    );
};

export default MainLayout;