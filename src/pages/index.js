import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Form from "@/components/form";

export default function Home() {
  return (
    <>
      <Head>
        <title>MyWindow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <Image src={'/MyWindow_logo.png'} alt={'Logo'} width={280} height={90}/>
          <nav>
            <a href="#produto">Nosso produto</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>
        <section className={styles.home}>
          <div>
            <h2>Conforto, tranquilidade e qualidade de vida através da automação de sua janela.</h2>
            <p>Chuva detectada? Proteção ativada!</p>
          </div>
          <Image src='/MyWindow.png' alt="Logo MyWindow" width={500} height={500}/>
        </section>
        <section className={styles.produto} id="produto">
          <div>
            <header>
              <h2>Nosso produto</h2>
            </header>
            <div className={styles.descricao}>
              <h3>
                Ofertamos um dispositivo instalável em janelas existentes que faça o seu fechamento automático quando chover, com a possibilidade de controle por aplicativo.
              </h3>
            </div>
          </div>
        </section>
        <section id="contato" className={styles.contato}>
          <h2>Ficou interessado? Entraremos em contato!</h2>
          <Form/>
        </section>
      </main>
    </>
  );
}
