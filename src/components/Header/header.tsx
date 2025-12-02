import logoImage from "./../../assets/images/logo.png";
import defaultAvatarImage from "./../../assets/images/UserAvatar.png";
import styles from "./header.module.css";
import { ReactComponent as SearchIcon } from "./../../assets/icons/search.svg";
import { ReactComponent as MenuIcon } from "./../../assets/icons/button-icon.svg";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export function Header() {
	const isDesktop = useMediaQuery({ minWidth: 1025 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	if (isDesktop) {
		return (
			<header className={styles.headerDesktop}>
				<div className={styles.logoBlock}>
					<img src={logoImage} alt="Logo" />
				</div>

				<div className={styles.actionBlock}>
					<button type="button" className={styles.menuButton}>
						<MenuIcon className={styles.menuButtonIcon}></MenuIcon>
						Categories
					</button>
					<div className={styles.searchBarBlock}>
						<input
							type="text"
							placeholder="Find products..."
							className={styles.searchInput}
						/>
						<SearchIcon className={styles.searchIcon}></SearchIcon>
					</div>
					<button type="button" className={styles.menuButton}>
						<MenuIcon className={styles.menuButtonIcon}></MenuIcon>
						Cart
					</button>
				</div>
				<div className={styles.profileBlock}>
					<p>Username</p>
					<img src={defaultAvatarImage} alt="Avatar" />
				</div>
			</header>
		);
	}
	if (isTablet) {
		return (
			<header className={styles.headerTablet}>
				<MenuIcon onClick={() => setIsSidebarOpen(true)}></MenuIcon>
				<div className={styles.searchBarTablet}>
					<input
						type="text"
						placeholder="Find products..."
						className={styles.searchInput}
					/>
					<SearchIcon className={styles.searchIcon}></SearchIcon>
				</div>
				{isSidebarOpen && (
					<div
						className={styles.overlay}
						onClick={() => setIsSidebarOpen(false)}
					/>
				)}

				{isSidebarOpen && (
					<aside className={styles.sidebar}>
						<ul className={styles.sidebarList}>
							<li className={styles.logoItem}>
								<img
									className={styles.logoImage}
									src={logoImage}
									alt="Logo"
								/>
								<span>SnailStore</span>
							</li>

							<li>
								<button className={styles.menuButtonTablet}>
									<MenuIcon
										className={styles.menuButtonIcon}
									/>
									Categories
								</button>
							</li>
							<li>
								<button className={styles.menuButtonTablet}>
									<MenuIcon
										className={styles.menuButtonIcon}
									/>
									Cart
								</button>
							</li>

							<li className={styles.profileItem}>
								<img src={defaultAvatarImage} alt="Avatar" />
								<div>
									<p style={{ margin: 0, fontWeight: 500 }}>
										Username
									</p>
									<p
										style={{
											margin: 0,
											fontSize: "12px",
											color: "#888",
										}}
									>
										View Profile
									</p>
								</div>
							</li>
						</ul>
					</aside>
				)}
			</header>
		);
	}
	return null;
}
