import ThemeToggle from "./ToggleBtn";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import NavRouter from "./NavRouter";
import NavSideMenu from "./NavSideMenu";

const Nav = (): JSX.Element => {
	return (
		<div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
			<div className="flex w-full xl:container xl:m-auto">
				<NavSideMenu />
				<NavRouter />
				<div className="flex items-center px-2">
					<ThemeToggle/>
					<SearchBar />
					<CartIcon />
				</div>
			</div>
		</div>
	)
}

export default Nav;