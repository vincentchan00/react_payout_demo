import React, { useState } from "react";

function Table({ openTab, data, payoutInfo, setPayoutInfo, setOpenModal }) {
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { langeage } = payoutInfo;

    // Case 1 : The user checks the box
    if (checked) {
      setPayoutInfo({
        langeage: [...langeage, value],
        response: [...langeage, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setPayoutInfo({
        langeage: langeage.filter((e) => e !== value),
        response: langeage.filter((e) => e !== value),
      });
    }
  };
  const handleClick = (value) => {
    const { langeage } = payoutInfo;
    setPayoutInfo({
      langeage: [...langeage],
      response: ["" + value],
    });
    setOpenModal(2);
  };
  const handleSelectAll =  (e) => {
    const { checked } = e.target;
    if(checked)
    setPayoutInfo({ langeage:data.map((item)  => (""+item.id)),response:data.map((item)  => (""+item.id))});
    else{
        setPayoutInfo({langeage:[],response:[]});
    }
  };
  return (
    <div className="p-3 mt-6">
      <div className={openTab === 1 ? "block" : "hidden"}>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className=" w-full inline-block align-middle">
              <div className="overflow-hidden rounded-lg  overflow-x-auto">
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
                          onClick={handleSelectAll}
                        />
                        <label htmlFor="checkbox" className="sr-only">
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
                        className="pl-10 py-3 text-xs font-bold text-left text-gray-400  whitespace-nowrap"
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
                            value={item.id}
                            onChange={handleChange}
                            checked={payoutInfo.langeage.includes(""+item.id)}
                          />
                          <label htmlFor="checkbox" className="sr-only">
                            Checkbox
                          </label>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-blue-600 whitespace-nowrap inline-flex items-center">
                          {item.name} {item.leak&&<div className="bg-yellow-400 px-1 py-1 mx-1">Contains leaks</div>}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-center text-gray-800 whitespace-nowrap">
                          {item.recent_referral}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-center text-green-500 whitespace-nowrap">
                          +${item.revenue.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-center  whitespace-nowrap">
                          ${item.paid.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-center  whitespace-nowrap">
                          ${item.unpaid.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-center text-red-600 whitespace-nowrap">
                          ${item.ready_payout.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm text-blue-600 font-bold text-center whitespace-nowrap">
                          <button className="inline-flex">
                            
                            View
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </td>
                        <td className="px-6 py-4 text-sm text-black font-bold text-center red whitespace-nowrap">
                          {item.type == 1 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                            </svg>
                          )}

                          {item.type == 2 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                strokeLinejoin="round"
                                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold  whitespace-nowrap">
                          <button
                            value={item.id}
                            className="py-2 px-6 text-white bg-blue-600 hover:text-green-700 inline-flex text-xs text-center items-center rounded"
                            onClick={() => handleClick(item.id)}
                          >
                            <span className="px-2"> Send payment </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                strokeLinejoin="round"
                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                              />
                            </svg>
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
      <div className={openTab === 2 ? "block" : "hidden"}>Tab 2</div>
    </div>
  );
}

export default Table;
