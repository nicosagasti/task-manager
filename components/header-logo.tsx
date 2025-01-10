import React from 'react';
import Link from "next/link"
import Image from "next/image"

const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className='items-center hidden lg:flex'>
                <Image src="/logo.svg" width={50} height={50} alt="Logo" />
                <p className='font-semibold text-white text-2xl ml-2.5'>
                    Task Manager
                </p>
            </div>
        </Link>
    );
};

export default HeaderLogo;