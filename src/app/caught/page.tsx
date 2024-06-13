
"use client";

import React from 'react';
import Link from 'next/link';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger
} from "@/components/ui/menubar";

const NavbarPage = () => {
    return (
        <div className="w-screen min-h-screen bg-gray-100">
            <nav className="bg-gray-800 p-4 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/home" legacyBehavior>
                            <a className="text-white font-bold text-xl cursor-pointer">
                                Poke Dex
                            </a>
                        </Link>
                    </div>
                    <div className="flex-grow mx-4">
                        <input
                            type="text"
                            placeholder="Enter Pokemon name..."
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="hidden md:block">
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger className="text-gray-300 hover:text-white">All Pokemon</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        <Link href="/all" legacyBehavior>
                                            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Pokemon</a>
                                        </Link>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-gray-300 hover:text-white">Caught</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        <Link href="/caught" legacyBehavior>
                                            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Caught</a>
                                        </Link>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavbarPage;
