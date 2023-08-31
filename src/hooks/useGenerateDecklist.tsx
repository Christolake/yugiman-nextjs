import type { yugicard } from "../types/yugicard"

const ygopro: string = `https://db.ygoprodeck.com/api/v7/cardinfo.php?`
    const page = {
        cardName: `name=`,
        setInfo: `cardset=`
    }

    export default function useGenerateDecklist (obj: string[]): yugicard[] {

    
       let searchCard: string[] = []
       let returnData: yugicard[] = []

       Object.keys(obj).map((key: string, index: number) => {
        searchCard[index]!=undefined? searchCard[index] += obj[key].join('|')+'|': searchCard[index] = obj[key].join('|')+'|'
       })
       const fetchYgopro = async () => {
        await fetch(ygopro+page.cardName+searchCard[0])
        .then(res => res.json())
        .then(json => returnData = json.data)
        .finally(() => {return returnData})
    } 
    fetchYgopro()
    
    }


