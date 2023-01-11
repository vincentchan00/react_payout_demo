
function SearchCard({

}) {
    return (
        <>
            <input type="text" className="rounded-lg border-2 border-gray-400 placeholder-opacity-50 placeholder-black mx-0.5 pl-2 pr-10 py-1 text-xs" placeholder="Affiliate's name or email"></input>
            <button className="text-white bg-blue-700 hover:bg-blue-800 text-xs lue-300 rounded-sm mx-0.5 px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            <button className="text-white bg-blue-700 hover:bg-blue-800 text-xs lue-300 rounded-sm mx-0.5 px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Export</button>
        </>

    )
}
export default SearchCard;