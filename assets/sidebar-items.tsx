import { AiOutlineHeart } from "react-icons/ai";
import { BiMoviePlay, BiTrendingUp } from "react-icons/bi";
import { BsCalendar4Event } from "react-icons/bs";
import { FiMonitor, FiSettings } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { ROUTES } from "../constants/routes";

const { HOME, WATCHLIST, UPCOMING, TRENDING, TVSHOWS, MOVIES, SETTINGS } =
	ROUTES;
export const sidebarItems = [
	{
		title: "Menu",
		items: [
			{
				route: HOME,
				sidebarItemName: "Browse",
				sidebarItemIcon: <HiOutlineSquares2X2 />,
			},
			{
				route: WATCHLIST,
				sidebarItemName: "Watchlist",
				sidebarItemIcon: <AiOutlineHeart />,
			},
			{
				route: UPCOMING,
				sidebarItemName: "Upcoming",
				sidebarItemIcon: <BsCalendar4Event />,
			},
			{
				route: TRENDING,
				sidebarItemName: "Trending",
				sidebarItemIcon: <BiTrendingUp />,
			},
		],
	},
	{
		title: "Watch",
		items: [
			{
				route: TVSHOWS,
				sidebarItemName: "TV Shows",
				sidebarItemIcon: <FiMonitor />,
			},
			{
				route: MOVIES,
				sidebarItemName: "Movies",
				sidebarItemIcon: <BiMoviePlay />,
			},
		],
	},
	{
		title: "General",
		items: [
			{
				route: SETTINGS,
				sidebarItemName: "Settings",
				sidebarItemIcon: <FiSettings />,
			},
		],
	},
];
