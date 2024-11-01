'use client'

import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { IoClose } from 'react-icons/io5'

function Popup() {

    const [popupOpen, setPopupOpen] = useState(true)

    const closePopup = () => {
        setPopupOpen(false)
    }

    return (
        <div className={`fixed bottom-5 right-2 z-[65] duration-300 ${popupOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <button className="absolute text-hisense top-[-17px] right-4 text-3xl" onClick={closePopup}>
                <IoClose />
            </button>
            <Link href='https://nfe.hisense.com.br/' target="_blank">
                <Image src={'/popup.png'} width={400} height={200} quality={100} alt="" />
            </Link>
        </div>
    )
}

export default Popup