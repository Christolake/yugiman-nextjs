'use client'

import type { yugicard } from "../types/yugicard";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell, getKeyValue} from "@nextui-org/table";
import {User} from "@nextui-org/user";
import {Chip} from "@nextui-org/chip";
import {Tooltip} from "@nextui-org/tooltip";
import { useState, useCallback } from 'react';
import useCardsInDeck from "../hooks/useCardsInDeck";
import { data } from "autoprefixer";

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
    {key: "name", label: "CARD NAME"},
    {key: "race", label: "STATS"},
    {key: "level", label: "LEVEL"},
    {key: "atk", label: "ATK"},
    {key: "def", label: "DEF"},
  ];

  export default function DeckList(props: {data: string}) {


    const renderCell = useCallback((card: yugicard, columnKey: React.Key) => {
        const cellValue = card[columnKey as keyof yugicard];

        switch (columnKey) {
          case "name":
            return (
              <User
                avatarProps={{radius: "lg", src: card.card_images![0].image_url_cropped}}
                description={card.type}
                name={cellValue}
              >
                {card.name}
              </User>
            );
          case "race":
            return (
            <div className="flex flex-col">
                <p className="text-bold text-sm capitalize">{card.attribute?card.attribute:card.frameType.toUpperCase()}</p>
                <p className="text-bold text-sm capitalize text-default-400">{cellValue}</p>
            </div>
            );
            case "atk":
                let indexOfA:number = -1
                if (card.atk == 0) 
                indexOfA = MONSTERS_WITH_QUESTION_STAT.findIndex((e => e.name == card.name))
            
                return (
                    <div className="flex">
                <p className="text-bold text-lg capitalize">
                {indexOfA<0?card.atk:MONSTERS_WITH_QUESTION_STAT[indexOfA].atk}</p>
            </div>
                )
            case "def":
                let indexOfD:number = -1
                if (card.def == 0) 
                indexOfD = MONSTERS_WITH_QUESTION_STAT.findIndex((e => e.name == card.name))
            
                return (
                    <div className="flex">
                <p className="text-bold text-lg capitalize">
                {indexOfD<0?card.def:MONSTERS_WITH_QUESTION_STAT[indexOfD].def}</p>
            </div>
                )
            default:
        return cellValue;
    }
        }, []);

    const decks: yugicard[] = useCardsInDeck(props.data)

    console.log(decks)

    return (
    <Table aria-label='Cards in the Decklist'>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={decks}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    )
  }