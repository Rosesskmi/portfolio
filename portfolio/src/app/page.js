import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      
      <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
        />
      <Image
          src="/react.svg"
          alt="React.js Logo"
          width={180}
          height={37}
        />
      <Image
          src="/javascript.svg"
          alt="javascript Logo"
          width={180}
          height={37}
        />
      <Image
          src="/typescript.svg"
          alt="typescript Logo"
          width={180}
          height={37}
        />
      <Image
          src="/css3.svg"
          alt="css Logo"
          width={180}
          height={37}
        />
      <Image
          src="/html5.svg"
          alt="html Logo"
          width={180}
          height={37}
        />

    </main>
  );
}
