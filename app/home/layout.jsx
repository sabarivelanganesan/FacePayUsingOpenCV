import Image from "next/image";
import applogo from "../../public/applogo.svg";
import styles from "./page.module.css"
export default function HomeLayout({ children }) {
    return (
        <div>
            <header className={styles.topBar}>
                <Image
                    aria-hidden
                    src={applogo}
                    alt="App logo"
                    width={90}
                    height={60}
                />
                <nav className={styles.topbarNav}>
                    <div className={styles.topbarNavItem}></div>
                    <div className={styles.topbarNavItem}></div>
                    <div className={styles.topbarNavItem}>Logged IN</div>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};
