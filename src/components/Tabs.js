
function Tabs({ openTab, setOpenTab}) {
    return (
        <div>
            <div className="">
                <div className="flex flex-col max-w-xl">
                    <ul className="flex space-x-2">
                        <li>
                            <button
                                onClick={() => setOpenTab(1)}
                                className={`"inline-block px-4 py-2  bg-white" ${openTab === 1 ? "bg-white-600 text-black" : "text-blue-600"}`}
                            >
                                Pending Payouts
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setOpenTab(2)}
                                className={`"inline-block px-4 py-2  bg-white" ${openTab === 2 ? "bg-white-600 text-black" : "text-blue-600"}`}
                            >
                                Paid Payouts
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Tabs;
