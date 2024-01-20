import React from 'react';
import { createClient } from "@/prismicio";

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return (
        <header className='top-0 z-50'>

        </header>
    )
}