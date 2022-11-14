import { Roboto } from "@next/font/google";
import "../styles/globals.scss";
import styles from "../styles/layout.module.scss";

const roboto = Roboto({
	weight: ["400", "500", "700"],
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
				<div className={styles.leftSidebar}>{/* sidebar */}left side</div>
				<div className={styles.rightContent}>
					{/* main content */}
					{children}
				</div>
			</body>
		</html>
	);
}
