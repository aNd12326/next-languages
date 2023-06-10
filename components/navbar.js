'use client'

import React from 'react'
import Link from "next-intl/link";
import Image from 'next/image'
import { usePathname } from 'next-intl/client';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {

    const pathname = usePathname();
    const [startTransition] = useTransition();
    const router = useRouter();

    console.log(`${pathname}`)

    function onSelectChange(event) {
        startTransition(() => {
            console.log(event)
        });
    }

    return (
        <div>
            <Link href={`${pathname}`} locale="en">
                <Image src={"https://static.vecteezy.com/system/resources/previews/016/016/814/original/united-states-flag-free-png.png"} width={100} height={100} alt="/dea" />
            </Link>{" "}
            |{" "}
            <Link href={`${pathname}`} locale="es">
                {/* In Spanish */}
                <Image src={"https://static.vecteezy.com/system/resources/previews/016/314/510/non_2x/spain-flag-free-png.png"} width={100} height={100} alt="/dea" />
            </Link>{" "}
            |{" "}
            <Link href="/about">
                About
            </Link>
            <br />
            <br />
        </div>
    )
}

export default Navbar