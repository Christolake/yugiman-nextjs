'use client'

import type { yugicard } from "../types/yugicard";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/table";
import { User } from "@nextui-org/user";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";
import { useState, useCallback } from 'react';
import useCardsInDeck from "../hooks/useCardsInDeck";
import { data } from "autoprefixer";
import Icon from "./Icon";
import { MdStars, MdOutlineStars } from 'react-icons/md'

const bgColors:{[key:string]:string|{[key:string]:string}} = {
  'token': 'text-ygotoken',
  'spell': 'text-ygospell',
  'trap': 'text-ygotrap',
  'normal': 'text-ygonormal',
  'effect': 'text-ygoeffect',
  'ritual': 'text-ygoritual',
  'fusion': 'text-ygofusion',
  'synchro': {text: 'text-silver-300'},
  'xyz': 'text-ygoxyz',
  'link': 'text-link'
}

const MONSTERS_WITH_QUESTION_STAT = [
  {
    name: 'The Winged Dragon of Ra',
    atk: '????',
    def: '????'
  },
  {
    name: 'Slifer the Sky Dragon',
    atk: 'X000',
    def: 'X000'
  },
]

const columns = [
  { key: "name", label: "CARD NAME" },
  { key: "race", label: "TYPE" },
  { key: "level", label: "LV/RK/LK" },
  { key: "stats", label: "STATS" },
  { key: 'archetype', label: "ARCHETYPE" }
  
];

const linkMarks: {[key:string]: string} = {
  // ▲◀▶▼◤◥◣◢◸◹◺◿▽△◁▷
  'Left': '←',
  'Top-Left': '↖',
  'Top': '↑',
  'Top-Right': '↗',
  'Right': '→',
  'Bottom-Right': '↘',
  'Bottom': '↓',
  'Bottom-Left': '↙',
}

export default function DeckList(props: { data: string | undefined }) {


  const renderCell = useCallback((card: yugicard, columnKey: React.Key) => {
    const cellValue = card[columnKey as keyof yugicard];

    switch (columnKey) {
      case "name":
        return (
          <User
            // avatarProps={{ radius: "lg", src: card.card_images[0].image_url_cropped, classNames: {img: "object-top"} }}
            description={card.type}
            name={cellValue}
            classNames={{description: card.type?.includes('Pendulum')?'text-spell':''}}
          >
            {card.name}
          </User>
        );
      case "race":
        return (
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
            <Icon icon={card.attribute ? card.attribute : card.frameType.toUpperCase()} />
              <p className="text-bold text-sm capitalize">{card.attribute ? card.attribute : card.frameType.toUpperCase()}</p>
              </div>
            <div className="flex items-center gap-1">
              <Icon icon={cellValue=='Normal'||cellValue=='Continuous'?cellValue+card.frameType:cellValue} className="text-2xl" />
              <p className="text-bold text-sm capitalize text-default-400">{cellValue}</p>
            </div>
          </div>
        );
      case "level":
        {if (card.level) 
          return (<div className="flex items-center">
            {card.type?.includes('XYZ')
            ?<div className="flex items-center gap-1">
              <MdOutlineStars className="text-bold text-xl capitalize"/>
            <p className="text-bold text-xl capitalize">{card.level}</p></div>
            :<div className="flex items-center gap-1">
              <MdStars className="text-bold text-xl capitalize"/>
            <p className="text-bold text-xl capitalize"> {card.level}</p></div>}
          </div>)
          if (card.linkval)
            return (<div className="flex items-center gap-1">
              <Icon icon='linkval' className="text-bold text-xl capitalize" />
              <p className="text-bold text-xl capitalize"> {card.linkval}</p>
            </div>)
            };
      case "stats":
        let indexOfA: number = -1
        if (card.atk == 0)
          indexOfA = MONSTERS_WITH_QUESTION_STAT.findIndex((e => e.name === card.name))
        let indexOfD: number = -1
        if (card.def == 0)
          indexOfD = MONSTERS_WITH_QUESTION_STAT.findIndex((e => e.name === card.name))
            if (card.hasOwnProperty('atk')) {
        return (
          <div className="flex flex-col items-center justify-around">
            <div className="flex justify-between items-center w-16">
              <Icon icon='atk' className="text-bold text-lg capitalize" />
              <p className="text-bold text-sm capitalize">
                {indexOfA == -1 ? card.atk : MONSTERS_WITH_QUESTION_STAT[indexOfA].atk}
                </p>
            </div>
            {card.hasOwnProperty('def')
            ?<div className="flex justify-between items-center w-16">
              <Icon icon='def' className="text-bold text-lg capitalize" />
              <p className="text-bold text-sm capitalize">
                {indexOfD == -1 ? card.def : MONSTERS_WITH_QUESTION_STAT[indexOfD].def}
                </p>
            </div>
            :<div className="flex justify-center items-center w-16">
            <p className="text-bold text-sm capitalize text-center">{card.linkmarkers?.map((e) => linkMarks[e]).join('')}
            </p>
            </div>}
          </div>
        )
      }
      default:
        return cellValue;
    }
  }, []);

  const decks: yugicard[] = useCardsInDeck(props.data)

  return (
    <div className="flex justify-center container p-4">
    <Table aria-label='Cards in the Decklist'>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={decks}>
        {(item) => (
          <TableRow 
          key={item.id}
          className={item.frameType.includes('pendulum')?bgColors[item.frameType.slice(0, item.frameType.indexOf('_'))]:bgColors[item.frameType]}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
  )
}