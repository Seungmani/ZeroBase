const SearchBar = () => {
	return (
		<div className="dropdown">
			<button type="button" className="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-700 dark:stroke-white" fill="none" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
				</svg>
			</button>
			<input readOnly type="text" placeholder="검색" className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput" value=""/>
			<ul className="!fixed left-0 sm:!absolute sm:top-14 menu flex-nowrap dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-600">
			</ul>
		</div>
	)
}
// input 검색 기능 만들기

export default SearchBar;