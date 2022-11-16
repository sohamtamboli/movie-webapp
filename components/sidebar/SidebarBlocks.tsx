"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "../../styles/sidebar/sidebar-blocks.module.scss";

interface IProps {
	title: string;
	items: {
		route: string;
		sidebarItemName: string;
		sidebarItemIcon: JSX.Element;
	}[];
}

const SidebarBlocks = ({ title, items }: IProps) => {
	const pathname = usePathname();
	console.log(pathname);

	return (
		<div className={styles.sidebar__block__container}>
			<h5 className={styles.sidebar__block__title}>{title}</h5>
			<ul>
				{items.map((item, idx) => (
					<Link
						href={item.route}
						key={idx}
						className={styles.sidebar__block__menu__link}>
						<li
							className={`${
								pathname === item.route
									? styles.sidebar__block__active__link
									: ""
							} ${styles.sidebar__block__menu__item}`}>
							<>{item.sidebarItemIcon}</>
							{item.sidebarItemName}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default SidebarBlocks;
