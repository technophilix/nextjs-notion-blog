"use client";
import React from 'react';
import Link from "next/link";
const Navbarcomponent = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" href="/">
                <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
            </Link>
        </nav>
    );
};

export default Navbarcomponent;