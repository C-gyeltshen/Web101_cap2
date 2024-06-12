"use client";

import React from 'react';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger
} from "@/components/ui/menubar";

const Navbar = () => (
    <nav className="bg-gray-800 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <span className="text-white font-bold text-xl">Poke Dex</span>
            </div>
            <div className="flex-grow mx-4">
                <input
                    type="text"
                    placeholder="Enter Pokemon name..."
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="hidden md:block mx-4">
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger className="text-gray-300 hover:text-white">All Pokemon</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Pokemon</a>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="text-gray-300 hover:text-white">Seen</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seen</a>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className="text-gray-300 hover:text-white">Favourite</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Favourite</a>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    </nav>
);

export default function HomePage() {
    return (
        <div className="w-screen h-screen">
            <Navbar />
        </div>
    );
}
