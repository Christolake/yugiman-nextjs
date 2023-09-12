'use client'

import { useEffect, useState } from "react";
import type { yugicard } from "../types/yugicard";

const camelCase = (s: string) => s
    .replace(/(?<!\p{L})\p{L}|\s+/gu,
        (m: string) => +m === 0 ? "" : m.toUpperCase())
    .replace(/^./,
        m => m?.toLowerCase())

const regex = {
    deckTitle: /===([^=]+)===/gi,
    decklist: /(?<={Decklist)(\|?)[^\}]*/gi,
    mangaDecklist: /(?<=\{manga card list \| )(.*?\})/gi,
    deckname: /(?<={Decklist)(\|?)([^\n])*/gi,
    deck: /(?<=\*\s\[\[)([^\]]*)/gi,
    mangaDeck: /(?<=\*\s)([^\[\\]*)/gi,
    cardWithCopies: /([^\n]+)(?=\sx\d)/gi,
    qtyCopies: /(?<=\]\]\sx)(\d)/gi
}

export default function useCardsInDeck(initialValue: {[key:string]:string|number, title: string, wikitext: string} = {title: '', wikitext: ''}) {

    const ygopro: string = `https://db.ygoprodeck.com/api/v7/cardinfo.php?`
    const page = {
        cardName: `name=`,
        setInfo: `cardset=`,
    }

    const removeFromValue:{[key:string]:string} = {
        deck: '==Deck',
        other: '==Other app',
        vJump: '==V Jump',
        videoGame: '==Video'
    }
    let value:string = initialValue.wikitext
    if (!initialValue.title.includes('Deck'))
    value = value.indexOf(removeFromValue.deck)>=0?value.slice(value.indexOf(removeFromValue.deck)):value.slice(0)
    value = value.slice(0, value.indexOf(removeFromValue.other))
    value = value.slice(0, value.indexOf(removeFromValue.vJump))
    value = value.slice(0, value.indexOf(removeFromValue.videoGame))

    let decksRaw: {[key: string|number]: string[]} = {}
    const [data, setData] = useState<yugicard[]>([])
    

    useEffect(() => {
        if (value == '') return
        let cardWithCopies: RegExpMatchArray | null = value.match(regex.cardWithCopies) // nombra cartas copiadas
        let qtyOfCopies: RegExpMatchArray | null = value.match(regex.qtyCopies) // enumera la cantidad de copias

        const copyOfCard = (list:string) => {
        
            let cardWithCopies: RegExpMatchArray | null = list.match(regex.cardWithCopies) // nombra cartas copiadas
            let qtyOfCopies: RegExpMatchArray | null = list.match(regex.qtyCopies) // enumera la cantidad de copias
            
              
            if (qtyOfCopies!=null) {
            
            qtyOfCopies!.map((qty: string, index: number) => {
                for (let i: number = 1; i < Number(qty); i++) {
                    list = list.slice(0, list
                        .indexOf(cardWithCopies![index])) + cardWithCopies![index] + '\n' + list.slice(list.indexOf(cardWithCopies![index]))
                    }
                })
            }
              return list
            }

    let deckTitles: RegExpMatchArray | null = value.match(regex.deckTitle)
    let decklistsRawNoCopies: RegExpMatchArray | null = value.match(regex.decklist) // cada decklist
    if (!decklistsRawNoCopies) decklistsRawNoCopies = value.match(regex.mangaDecklist)
    let decklistsRaw = decklistsRawNoCopies!.map(e => copyOfCard(e)) 
    let deckNamesRaw = value.match(regex.deckname) // cada carta 'limpia' en wikitext
    let deckNames = deckNamesRaw?.map((e: string, index: number) =>
        ((index + 1).toString() + e.replace("|", " ")).trim()) //Index: DeckName
    let deckNamesKey: string[] = deckNames!.map((e: string, i: number) => e!=''? camelCase(e.replace(/\W/g, "")):i.toString()) // nombre camel para Keys
    deckNamesKey.map((e:string, i:number) => {
        let tempDeck: RegExpMatchArray | null = decklistsRaw[i].match(regex.deck)
        tempDeck?.sort()
      decksRaw[e] = tempDeck!=null?tempDeck!.map((e) => e.slice(e.indexOf("|")+1).replace('#','')):['']
      })
      let searchCard: string[] = []
       let dataYgopro: yugicard[] = []

       Object.keys(decksRaw).map((key: string, index: number) => {
        searchCard[index]!=undefined? searchCard[index] += decksRaw[key].join('|')+'|': searchCard[index] = decksRaw[key].join('|')+'|'
       })
       const allCards:string[] = [...new Set(Object.values(decksRaw).flat().sort())]

    console.log(allCards)
       const fetchYgopro = async () => {
        await fetch(ygopro+page.cardName+allCards.join('|'))
        .then(res => res.json())
        .then(json => dataYgopro = json.data)
        .finally(() => setData(dataYgopro))
    } 
    fetchYgopro()
    }, [value])
    return data
}