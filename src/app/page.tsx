'use client'

import DeckList from "../components/DeckList"
import seriesColor from "./test/colors"
import testHaou from "./test/testHaou"
import testKaiba from "./test/testKaiba"
import testDeclan from "./test/testDeclan"
import useDeckList from "../hooks/useDeckList"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/dropdown"
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
import {Button, ButtonGroup} from "@nextui-org/button"
import type { character } from "@/types/character"
import CHARACTERS from "./test/CHARACTERS"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <div>
    <AvatarGroup isBordered size='lg' max={12}>
      {CHARACTERS.map((e: character) => <Avatar 
      key={e.name}
      classNames={{base: e.color}}
      showFallback
      name={e.name} 
      src={e.avatar} />)}
    </AvatarGroup>
      {/* <DeckList data={testDeclan.wikitext}/> */}
    </div>
    </main>
  )
}
