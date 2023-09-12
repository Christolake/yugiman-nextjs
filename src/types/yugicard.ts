
export type yugicard = {
    id?: number | null,
    name: string,
    type?: string,
    frameType: string
    desc?: string,
    atk?: number | '?' | 'X000' | '????',
    def?: number | '?' | 'X000' | '????',
    level?: number,
    race?: string,
    attribute?: string,
    archetype?: string,
    scale?: number,
    linkval?: number,
    linkmarkers?: string[],
    card_sets?: any,
    banlist_info?: any,
    card_images?: any,
    card_prices?: any
    misc?: any,
    souce?: string,
  }