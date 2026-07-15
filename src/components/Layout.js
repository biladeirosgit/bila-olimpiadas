import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

// A navbar e o footer viviam repetidos nas 32 paginas, importados um a um.
// Aqui aparecem uma vez, ao nivel da rota.
const Layout = () => (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
);

export default Layout;
