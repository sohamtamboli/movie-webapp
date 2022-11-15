import Link from "next/link";
import React from "react";
import styles from "../../styles/sidebar/sidebar-blocks.module.scss";

interface IProps {
	title: string;
	items: {
		route: string;
		sidebarItemName: string;
		sidebarItemIcon: any;
	}[];
}

const SidebarBlocks = ({ title, items }: IProps) => {
	return (
		<div className={styles.sidebar__block__container}>
			<h5 className={styles.sidebar__block__title}>{title}</h5>
			<ul>
				{items.map((item, idx) => (
					<Link
						href={item.route}
						key={idx}
						className={styles.sidebar__block__menu__link}>
						<li className={styles.sidebar__block__menu__item}>
							<item.sidebarItemIcon />
							{item.sidebarItemName}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default SidebarBlocks;
