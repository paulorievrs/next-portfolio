import Container from "../Container/Container";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./layout.module.scss";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
