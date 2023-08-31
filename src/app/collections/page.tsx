'use client'

import DeckList from "@/components/DeckList";
import { useState } from 'react'
import { Input } from "@nextui-org/react";
import { GiMagnifyingGlass } from "react-icons/gi"

export default function Collections () {

    const [value, setValue] = useState('')

    return(
        <div className="w-full flex flex-col gap-2 max-w-[240px]">
        <Input
          label="Search"
          placeholder="Search character..."
          value={value}
          onValueChange={setValue}
          startContent={
            <GiMagnifyingGlass className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          />
          <p className="text-default-500 text-small">Input value: {value}</p>
        </div>
    )
}