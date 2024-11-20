'use client'

import { useState, ReactNode } from 'react';
import { MagicMotion } from 'react-magic-motion';

export default function Dropdown({ data }: { data: { title: string, items: string[] } }) {
    const [isDropdownActived, setIsDropdownActived] = useState<boolean>(false);

    function toggleDropdown() {
        setIsDropdownActived(!isDropdownActived);
    }

    return (
        <MagicMotion
            transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
        >
            <div className="overflow-hidden max-w-2xl">
                <button
                    onClick={() => toggleDropdown()}
                    className={`relative cursor-pointer p-2 sm:p-4 sm:pe-12 pe-12 text-left w-full bg-client-pallet-2 font-medium rounded-xl ${isDropdownActived && 'rounded-b-none'} flex flex-col gap-2 items-start`}
                >
                    <h4 className="font-semibold text-white px-2 py-1 rounded-full bg-orange-500 text-sm">{data.title.split('|')[0]}</h4>
                    <h4 className="font-semibold text-xl sm:text-2xl">{data.title.split('|')[1]}</h4>
                </button>
                {isDropdownActived && (
                    <div className={`relative border bg-client-pallet-2 rounded-b-xl p-4 sm:p-6 ps-6 sm:ps-12 text-deep-blue opacity-80`} >
                        <ul className="list-disc sm:ps-8 ps-4">
                            {data.items.map((item, index: number) => (
                                <li className="text2-sm sm:text-base" key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </MagicMotion>
    );
}