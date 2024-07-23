import AppNavbar from "./components/AppNavbar";
import styles from "./css/mainPage.module.css";

export const metadata = {
  title: 'Everdeck Library',
  description: 'A library of games playable by the Everdeck',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.mainLayout}>
        <AppNavbar />
        {children}
      </body>
    </html>
  );
}
