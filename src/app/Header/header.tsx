
import styles from "./header.module.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { ICONS, IMAGES } from "../../shared";

export function Header() {
	const isDesktop = useMediaQuery({ minWidth: 1025 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	if (isDesktop) {
		return (
			<header className={styles.headerDesktop}>
				<div className={styles.logoBlock}>
					<img src={IMAGES.logo} alt="Logo" />
				</div>

				<div className={styles.actionBlock}>
					<button type="button" className={styles.menuButton}>
						<ICONS.ButtonIcon className={styles.menuButtonIcon} />
						Categories
					</button>
					<div className={styles.searchBarBlock}>
						<input
							type="text"
							placeholder="Find products..."
							className={styles.searchInput}
						/>
						<ICONS.Search className={styles.searchIcon} />
					</div>
					<button type="button" className={styles.menuButton}>
						<ICONS.ButtonIcon className={styles.menuButtonIcon} />
						Cart
					</button>
				</div>
				<div className={styles.profileBlock}>
					<p>Username</p>
					<img src={IMAGES.UserAvatar} alt="Avatar" />
				</div>
			</header>
		);
	}
	if (isTablet) {
		return (
			<header className={styles.headerTablet}>
				<ICONS.ButtonIcon onClick={() => setIsSidebarOpen(true)} />
				<div className={styles.searchBarTablet}>
					<input
						type="text"
						placeholder="Find products..."
						className={styles.searchInput}
					/>
					<ICONS.ButtonIcon className={styles.searchIcon}/>
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
									src={IMAGES.logo}
									alt="Logo"
								/>
								<span>SnailStore</span>
							</li>

							<li>
								<button className={styles.menuButtonTablet}>
									<ICONS.ButtonIcon
										className={styles.menuButtonIcon}
									/>
									Categories
								</button>
							</li>
							<li>
								<button className={styles.menuButtonTablet}>
									<ICONS.ButtonIcon
										className={styles.menuButtonIcon}
									/>
									Cart
								</button>
							</li>

							<li className={styles.profileItem}>
								<img src={IMAGES.UserAvatar} alt="Avatar" />
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
