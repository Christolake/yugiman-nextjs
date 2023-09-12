import { ReactComponentElement } from 'react'
import { 
    GiGooeyDaemon, GiBeastEye, GiWerewolf, GiElfHelmet,
    GiClown, GiInfinity, GiOverInfinity, GiAngelWings,
    GiArrowDunk, GiCyberEye, GiCyborgFace, GiDinosaurRex,
    GiHorus, GiSpikedDragonHead, GiBattleGear, GiAngelOutfit,
    GiCompass, GiDaemonSkull, GiSharkJaws, GiGalaxy,
    GiDoubleDragon, GiEgyptianWalk, GiEyeOfHorus, GiSpiderAlt,
    GiRobotGolem, GiOverlordHelm, GiSpellBook, GiWolfTrap,
    GiAndroidMask, GiVenusFlytrap, GiPsychicWaves, GiPyromaniac,
    GiLightningTrio, GiSandSnake, GiFireShrine, GiRockGolem,
    GiSeaCreature, GiPointyHat, GiThunderSkull, GiSpartanHelmet, 
    GiEagleEmblem, GiDrakkarDragon, GiRaiseZombie, GiEvilMoon, 
    GiAnkh, GiStonePile, GiSmallFire, GiDiamondsSmile, 
    GiEnlightenment, GiMagicPortal, GiTrapMask, GiWaterSplash, 
    GiWhirlwind, GiBroadsword, GiShield, GiRubElHizb
} from "react-icons/gi"

export default function Icon (props: {icon:string, className?:string}) {
    switch(props.icon) {
    case 'Aqua': return (<GiGooeyDaemon className={props.className}/>);
    case 'Beast': return (<GiBeastEye className={props.className}/>);
    case 'Beast-Warrior': return (<GiWerewolf className={props.className}/>);
    case 'Celestial Warrior': return (<GiElfHelmet className={props.className}/>);
    case 'Charisma': return (<GiClown className={props.className}/>);
    case 'Continuousspell': return (<GiInfinity className={props.className}/>);
    case 'Continunoustrap': return (<GiOverInfinity className={props.className}/>);
    case 'Creator God': return (<GiAngelWings className={props.className}/>);
    case 'Counter': return (<GiArrowDunk className={props.className}/>);
    case 'Cyberse': return (<GiCyberEye className={props.className}/>);
    case 'Cyborg': return (<GiCyborgFace className={props.className}/>);
    case 'Dinosaur': return (<GiDinosaurRex className={props.className}/>);
    case 'Divine-Beast': return (<GiHorus className={props.className}/>);
    case 'Dragon': return (<GiSpikedDragonHead className={props.className}/>);
    case 'Equip': return (<GiBattleGear className={props.className}/>);
    case 'Fairy': return (<GiAngelOutfit className={props.className}/>);
    case 'Field': return (<GiCompass className={props.className}/>);
    case 'Fiend': return (<GiDaemonSkull className={props.className}/>);
    case 'Fish': return (<GiSharkJaws className={props.className}/>);
    case 'Galaxy': return (<GiGalaxy className={props.className}/>);
    case 'High Dragon': return (<GiDoubleDragon className={props.className}/>);
    case 'Human': return (<GiEgyptianWalk className={props.className}/>);
    case 'Illusion': return (<GiEyeOfHorus className={props.className}/>);
    case 'Insect': return (<GiSpiderAlt className={props.className}/>);
    case 'Machine': return (<GiRobotGolem className={props.className}/>);
    case 'Magical Knight': return (<GiOverlordHelm className={props.className}/>);
    case 'Normalspell': return (<GiSpellBook className={props.className}/>);
    case 'Normaltrap': return (<GiWolfTrap className={props.className}/>);
    case 'Omega Psychic': return (<GiAndroidMask className={props.className}/>);
    case 'Plant': return (<GiVenusFlytrap className={props.className}/>);
    case 'Psychic': return (<GiPsychicWaves className={props.className}/>);
    case 'Pyro': return (<GiPyromaniac className={props.className}/>);
    case 'Quick-Play': return (<GiLightningTrio className={props.className}/>);
    case 'Reptile': return (<GiSandSnake className={props.className}/>);
    case 'Ritual': return (<GiFireShrine className={props.className}/>);
    case 'Rock': return (<GiRockGolem className={props.className}/>);
    case 'Sea Serpent': return (<GiSeaCreature className={props.className}/>);
    case 'Spellcaster': return (<GiPointyHat className={props.className}/>);
    case 'Thunder': return (<GiThunderSkull className={props.className}/>);
    case 'Warrior': return (<GiSpartanHelmet className={props.className}/>);
    case 'Winged Beast': return (<GiEagleEmblem className={props.className}/>);
    case 'Wyrm': return (<GiDrakkarDragon className={props.className}/>);
    case 'Zombie': return (<GiRaiseZombie className={props.className}/>);
    case 'DARK': return (<GiEvilMoon className={props.className}/>);
    case 'DIVINE': return (<GiAnkh className={props.className}/>);
    case 'EARTH': return (<GiStonePile className={props.className}/>);
    case 'FIRE': return (<GiSmallFire className={props.className}/>);
    case 'LAUGH': return (<GiDiamondsSmile className={props.className}/>);
    case 'LIGHT': return (<GiEnlightenment className={props.className}/>);
    case 'SPELL': return (<GiMagicPortal className={props.className}/>);
    case 'TRAP': return (<GiTrapMask className={props.className}/>);
    case 'WATER': return (<GiWaterSplash className={props.className}/>);
    case 'WIND': return (<GiWhirlwind className={props.className}/>);
    case 'atk': return (<GiBroadsword className={props.className}/>);
    case 'def': return (<GiShield className={props.className}/>);
    case 'linkval': return (<GiRubElHizb className={props.className}/>);
    }
}