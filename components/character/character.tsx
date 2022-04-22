import Image from "next/image";
import Styles from "./character.module.css";


export function Character() {
  return (
    <div className={Styles.container}>
      <div className={Styles.device}>
        <Image
          src="/images/home/Device.png"
          width={145}
          height={283}
          alt="telefone"
        />
      </div>
      <div className={Styles.bubble}>
        <Image
          src="/images/home/Speech-bubble.png"
          width={62}
          height={74}
          alt="balão"
        />
      </div>
      <div className={Styles.character}>
        <Image
          src="/images/home/Character.png"
          width={183}
          height={246}
          alt="personagem"
        />
      </div>
      <div className={Styles.background}>
        <Image
          src="/images/home/Background.png"
          width={328}
          height={318}
          alt="fundo"
        />
      </div>
      <hr />
    </div>

  )
}