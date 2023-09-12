import { useEffect, useState } from 'react'

export default function useDeckList(initialValue: string) {
    const yugipedia: string = `https://yugipedia.com/api.php?`
    const page = {
        default: `&page=${initialValue}%27s%20Decks`,
        noDecks: `&page=${initialValue}`
    }

    const params = new URLSearchParams({
        action: "parse",
        format: "json",
        prop: 'wikitext',
        formatversion: 'latest'
    })

    const [data, setData] = useState<string>()

    useEffect(() => {
        if (initialValue == '') return

        const fetchDataNoDecks = async () => {
            await fetch(yugipedia+params+page.noDecks)
                .then(res => res.json())
                .then(json => json.hasOwnProperty('error') ? console.error(json.error.info) /* TODO: Error Component */ : setData(json.parse))
        }
        const fetchDataDefault = async () => {
            await fetch(yugipedia+params+page.default)
                .then(res => res.json())
                .then(json => json.hasOwnProperty('parse') ? setData(json.parse) : fetchDataNoDecks())
        }
        fetchDataDefault()

    },[initialValue]
    )
    return data
}