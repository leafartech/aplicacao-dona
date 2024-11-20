import React, { SetStateAction } from "react";

export default function Button({ label, open, setOpen }: { label: string, open: boolean, setOpen: React.Dispatch<SetStateAction<boolean>> }) {
    return (
        <button
            onClick={() => setOpen(!open)}
            className="z-[999] w-full max-w-md bg-gradient-to-br from-orange-400 to-orange-700 hover:to-orange-500 hover:from-orange-500 py-2 rounded-md text-white sm:text-xl font-semibold uppercase shadow-2xl shadow-orange-600"
        >
            {label}
        </button>
    )
}