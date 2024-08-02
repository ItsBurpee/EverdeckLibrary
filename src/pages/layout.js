import AppNavbar from "../app/components/AppNavbar";
import styles from "./css/mainPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImportBsJS from "../app/components/importBsJs";

export const metadata = {
  title: 'Everdeck Library',
  description: 'A library of games playable by the Everdeck',
  icons: {
    icon: '/everdeck-clam.svg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.mainLayout}>
        <ImportBsJS />
        <AppNavbar />
        {children}
      </body>
    </html>
  );
}
