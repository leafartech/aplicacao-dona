'use client'

import { useEffect, useState } from "react"

export default function Discipline({ data }: { data: { title: string, items: string[] } }) {

    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        if (open) {
            document.querySelector('body')?.classList.add('overflow-hidden')
        } else {
            document.querySelector('body')?.classList.remove('overflow-hidden')
        }
    }, [open])

    return (
        <>
            <button onClick={() => setOpen(!open)} className="relative w-full border-b flex justify-between text-left outline-none py-2 px-4">
                <h4 className="font-semibold"><span className="text-orange-500">{data.title.split('|')[0]} |</span> {data.title.split('|')[1]}</h4>
                <svg className="sm:relative absolute right-0 top-2 h-5 w-5 fill-zinc-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z" /></svg>
            </button>
            <div className={`fixed top-0 left-0 w-full h-screen items-center justify-center ${open ? 'z-[9999] flex' : '-z-50 hidden'}`}>
                <div onClick={() => setOpen(!open)} className={`absolute top-0 left-0 w-full h-full bg-black/30`}></div>
                <div className="relative w-full max-w-2xl flex flex-col items-start sm:gap-8 gap-4 bg-white rounded-xl z-50 sm:p-12 overflow-y-scroll px-4 py-8 ssm:h-full h-[80%] sm:overflow-auto  overflow-scroll">
                    <h4 className="font-semibold text-orange-500 text-2xl sm:text-4xl">{data.title.split('|')[0]}</h4>
                    <h4 className="-mt-4 sm:-mt-8 sm:pe-24 font-semibold text-xl sm:text-2xl">{data.title.split('|')[1]}</h4>
                    <ul className="list-disc sm:ps-8 ps-4">
                        {data.items.map((item, index: number) => (
                            <li className="text2-sm sm:text-base" key={index}>{item}</li>
                        ))}
                    </ul>
                    <button onClick={() => setOpen(!open)} className="absolute right-4 top-4">
                        <svg className="fill-red-600 h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" /></svg>
                    </button>
                    <button onClick={() => setOpen(!open)} className="bg-zinc-400 hover:bg-zinc-500 font-semibold text-white py-2 rounded-md px-12">Fechar</button>
                </div>
            </div>
        </>
    )
}