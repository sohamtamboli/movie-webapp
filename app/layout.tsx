import { Roboto } from "@next/font/google";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/globals.scss";
import styles from "../styles/layout.module.scss";

const roboto = Roboto({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={roboto.className}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={styles.mainFlexLayout}>
				<aside className={styles.leftSidebar}>
					<Sidebar />
				</aside>
				<section className={styles.rightContent}>
					{/* Horizontal Navbar */}
					{/* main content */}
					<main>{children}</main>
				</section>
			</body>
		</html>
	);
}
