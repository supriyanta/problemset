import React from "react";
import PropTypes from "prop-types";
import {
	AppBar,
	CssBaseline,
	Divider,
	Drawer,
	Hidden,
	IconButton,
	MenuList,
	MenuItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import "./Layout.css";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	appBar: {
		minHeight: 64,
		boxSizing: "border-box",
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth
		}
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		// padding: theme.spacing(3),
		marginTop: 64,
		padding: 0,
		height: "calc(100vh - 64px)"
		// background: "red"
	}
}));

function Layout({ children, container, location }) {
	// console.log(location.pathname.split("/")[2]);
	// console.log(location.pathname);
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [menu, setMenu] = React.useState([]);

	React.useEffect(() => {
		const temps = ["A", "B", "C1", "C2", "D1", "D2", "D3"];
		setMenu(temps);
	}, []);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<MenuList>
				{menu.map(item => (
					<MenuItem
						component={Link}
						to={`/sheet/${item}`}
						button
						key={item}
						selected={item === location.pathname.split("/")[2]}
					>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={item} />
					</MenuItem>
				))}
			</MenuList>
			<Divider />
		</div>
	);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component={Link}
						to="/"
						className="headertext"
					>
						Problem List
					</Typography>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				{/* <div className={classes.toolbar} /> */}
				{children}
			</main>
		</div>
	);
}

Layout.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	container: PropTypes.instanceOf(
		typeof Element === "undefined" ? Object : Element
	)
};

export default withRouter(Layout);
