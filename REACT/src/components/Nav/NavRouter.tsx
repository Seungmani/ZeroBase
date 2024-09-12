import { Link } from "react-router-dom";

const NavRouter = () => {
	return (
		<>
			<h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
				<Link to={"/"} className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap">React Shop</Link>
			</h1>
			<div className="flex-none hidden md:flex md:flex-1 ml-2">
				<Link className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white" to={"/fashion"}>패션</Link>
				<Link className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white" to={"/accessory"}>액세서리</Link>
				<Link className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white" to={"/digital"}>디지털</Link>
			</div>
		</>
	)
}

export default NavRouter;