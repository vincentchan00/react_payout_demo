

function Table({openTab,data}) {

    return (
        <div className="p-3 mt-6">
            <div className={openTab === 1 ? "block" : "hidden"}>
                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className=" w-full inline-block align-middle">
                            <div className="overflow-hidden rounded-lg">
                                <table className="min-w-full border-separate border-spacing-y-2 divide-gray-200">
                                    <thead className="">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-3 py-1 text-xs font-bold text-center text-gray-400 "
                                        >
                                            <input
                                                id="checkbox-all"
                                                type="checkbox"
                                                className="text-blue-600 focus:ring-blue-500"
                                            />
                                            <label
                                                htmlFor="checkbox"
                                                className="sr-only"
                                            >
                                                Checkbox
                                            </label>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-400 whitespace-nowrap"
                                        >
                                            Affiliate Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-center text-gray-400 whitespace-nowrap"
                                        >
                                            Most recent referral
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-center text-gray-400  whitespace-nowrap"
                                        >
                                            Revenue Generated
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-center text-gray-400  whitespace-nowrap"
                                        >
                                            Paid Payouts
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-center text-gray-400  whitespace-nowrap"
                                        >
                                            Unpaid Payouts
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-center text-gray-400  whitespace-nowrap"
                                        >
                                            Ready Payouts
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-center text-gray-400  whitespace-nowrap"
                                        >
                                            Breakdown
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-center text-gray-400  whitespace-nowrap"
                                        >
                                            Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-400  whitespace-nowrap"
                                        >
                                            Actions
                                        </th>

                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 ">
                                    {data.map((item, index) => (

                                        <tr className="bg-white my-1">
                                            <td className="px-3 text-sm  text-center text-gray-800 whitespace-nowrap">
                                                <input
                                                    type="checkbox"
                                                    className="text-blue-600 rounded focus:ring-blue-500"
                                                />
                                                <label
                                                    htmlFor="checkbox"
                                                    className="sr-only"
                                                >
                                                    Checkbox
                                                </label>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-blue-600 whitespace-nowrap">
                                                {item.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-center text-gray-800 whitespace-nowrap">
                                                {item.recent_referral}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-center text-green-500 whitespace-nowrap">
                                                +${item.revenue}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-center  whitespace-nowrap">
                                                ${item.paid}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-center  whitespace-nowrap">
                                                ${item.Unpaid}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-center red whitespace-nowrap">
                                                ${item.ready_payout}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-sky-500 font-bold text-center whitespace-nowrap">
                                                <a> View<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor" className="w-4 h-4">
                                                        <path fill-rule="evenodd"
                                                              d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                                                              clip-rule="evenodd"/>
                                                    </svg>

                                                </a>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-black font-bold text-center red whitespace-nowrap">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                     fill="currentColor" className="w-6 h-6">
                                                    <path
                                                        d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z"/>
                                                </svg>


                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold  whitespace-nowrap">
                                                <button
                                                    className="text-white bg-blue-600 hover:text-green-700"
                                                    href="#"
                                                >
                                                    Send payment
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
                Tab 2
            </div>
        </div>

    );
}

export default Table;
