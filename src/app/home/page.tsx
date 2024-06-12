import React from 'react';
import { Button } from "@/components/ui/button"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";

export default function HomePage() {
    return (
        
        <div className="w-screen h-screen">
            <div className="navbar space-x-4">
                <nav className="bg-gray-800 p-4 shadow-md">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <span className="text-white font-bold text-xl">Poke Dex</span>
                            </div>
                            <div className="flex-grow mx-4">
                            <input
                                type="text"
                                placeholder="Search Pokemon..."
                                className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            </div>
                            <div>
                                <Button>Search</Button>
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
                                        <MenubarTrigger className="text-gray-300 hover:text-white">Favourate</MenubarTrigger>
                                        <MenubarContent>
                                            <MenubarItem>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">facourate</a>
                                            </MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="w-screen h-screen bg-black flex">
                <h1>Name of the pokemon </h1><br />
                <img src="#" alt="#" /><br />
                <h1 className='text-white	'>Pokemon type</h1><br/>
                <h1 className='text-white	'>Weight</h1><br />
                <h1 className='text-white	'>Height</h1><br />
                <h1 className='text-white	'>moves</h1><br/>
            </div>
        </div>
    );
}
