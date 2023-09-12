'use client'

import DeckList from "@/components/DeckList";
import { useState, useEffect } from 'react'
import { Input } from "@nextui-org/react";
import {Image} from "@nextui-org/image";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { GiMagnifyingGlass } from "react-icons/gi"
import CHARACTERS from "../test/CHARACTERS";
import useDeckList from "@/hooks/useDeckList";


export default function Collections () {

  //TODO : Buscar en Wiki Sections=0 el anime_deck    = [['arquetipo']] y hacerle fetch en ygoPro.

  const [value, setValue] = useState<any>('')

    return(
        <div className="w-full flex flex-col gap-2 justify-center items-center ">
          <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Select Character
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
      aria-label="Static Actions"
      onAction={(key) => setValue(key)}>
        {CHARACTERS.map(e => <DropdownItem key={e.name}>{e.name}</DropdownItem> )}
      </DropdownMenu>
    </Dropdown>
          <DeckList data={useDeckList(value)} />
        </div >
    )
}