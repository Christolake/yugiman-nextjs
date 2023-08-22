import { useEffect } from "react";

const camelCase = (s: string) => s
    .replace(/(?<!\p{L})\p{L}|\s+/gu,
        (m: string) => +m === 0 ? "" : m.toUpperCase())
    .replace(/^./,
        m => m?.toLowerCase())

const regex = {
    deckTitle: /===([^=]+)===/gi,
    decklist: /(?<=Decklist)(\|?)[^\}]*/gi,
    deckname: /(?<=Decklist)(\|?)([^\n])*/gi,
    deck: /(?<=\*\s\[\[)([^\]]*)/gi,
    cardWithCopies: /([^\n]+)(?=\sx\d)/gi,
    qtyCopies: /(?<=\]\]\sx)(\d)/gi
}

export default function useCardsInDeck(initialValue: string = '') {

    let decks: {[key:string] :string[]}[] = []

    useEffect(() => {
        if (initialValue == '') return
        let cardWithCopies: RegExpMatchArray | null = initialValue.match(regex.cardWithCopies) // nombra cartas copiadas
        let qtyOfCopies: RegExpMatchArray | null = initialValue.match(regex.qtyCopies) // enumera la cantidad de copias

        const copyOfCard = () => {

        qtyOfCopies!.map((qty: string, index: number) => {
            for (let i: number = 1; i < Number(qty); i++) {
                initialValue = initialValue.slice(0, initialValue
                    .indexOf(cardWithCopies![index])) + cardWithCopies![index] + '\n' + initialValue.slice(initialValue.indexOf(cardWithCopies![index]))
                }
            })
        }

    qtyOfCopies != null ? copyOfCard() : qtyOfCopies = null;


    let deckTitles: RegExpMatchArray | null = initialValue.match(regex.deckTitle)
    let decklistsRaw: RegExpMatchArray | null = initialValue.match(regex.decklist) // cada decklist
    let deckNamesRaw = initialValue.match(regex.deckname) // cada carta 'limpia' en wikitext
    let deckNames = deckNamesRaw?.map((e: string, index: number) =>
        (index + 1).toString() + e.replace("|", ": ")) //Index: DeckName
    let deckNamesKey: string[] = deckNamesRaw!.map((e: string, i: number) => e!=''? camelCase(e.replace(/\W/g, "")):deckTitles![i]) // nombre camel para Keys

    if (deckNames !== null) {
        deckNamesKey.map((e: string, i: number) => {
            let cardsInDeck = decklistsRaw![i].match(regex.deck)
            decks[i][e] = cardsInDeck!.map((e: string) => e.slice(e.indexOf('|') + 1))
        })
    }
}, [initialValue])
return decks
}