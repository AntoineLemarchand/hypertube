'use client';

import React from 'react';
import Header from '../components/header';
import { withAuth } from '../components/withAuth';
import Footer from '../components/footer';

function App({children}: {children: React.ReactNode}) {
    return (
        <body className="flex flex-col min-h-lvh">
            <Header />
            {children}
            <Footer />
        </body>
    );
}

export default withAuth(App);
