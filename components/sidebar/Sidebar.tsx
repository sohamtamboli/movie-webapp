import React from "react";
import { sidebarItems } from "../../assets/sidebar-items";
import styles from "../../styles/sidebar/sidebar.module.scss";
import SidebarBlocks from "./SidebarBlocks";

type Props = {};

const Sidebar = (props: Props) => {
	return (
		<div className={styles.sidebar__container}>
			<h1 className={styles.logo}>BingeFlix.</h1>

			<>
				{sidebarItems.map((sidebarItem, idx) => (
					<SidebarBlocks
						key={idx}
						title={sidebarItem.title}
						items={sidebarItem.items}
					/>
				))}
			</>
		</div>
	);
};

export default Sidebar;
