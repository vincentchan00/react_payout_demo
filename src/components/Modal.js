import React, { useEffect, useState, useRef } from "react";
function Modal({ data, openModal, setOpenModal, payoutInfo }) {
  const ref = useRef(null);
  var selectedItems = [];

  const [selectedNewItems, setSelectedNewItems] = useState([]);
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const newSelectedItems = selectedNewItems;
    var updateIndex = newSelectedItems.findIndex((item) => item.id == value);
    newSelectedItems[updateIndex].checked = checked;
    setSelectedNewItems([...newSelectedItems]);

  };
  useEffect(() => {
    if(payoutInfo != null){
        selectedItems = data.filter((item) =>
      payoutInfo.response.some((key) => key.includes(item.id))
    ).map((item) => ({ ...item, checked: true }));

        setSelectedNewItems(selectedItems);

    }

  },[payoutInfo])
  const handleAmount = () => {};
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenModal(0);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return (
    <>
      <div
        className={`fixed  inset-0  z-20 bg-opacity-50 overflow-y-auto h-full w-full ${
          openModal != 0 ? "block" : "hidden"
        }`}
        id="my-modal"
      >
        <div
          ref={ref}
          className="relative  top-48 mx-auto border w-full shadow-lg rounded-md bg-white md:w-1/2"
        >
          <button onClick={()=>setOpenModal(0)}className=" absolute left-3 top-3 inline-flex items-center text-blue-600 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back
          </button>
          <div className="mt-3 text-center">
            <div className="mx-auto flex text-xl items-center justify-center text-gray-400 font-bold">
              Confirm Payouts
            </div>
            <div className="overflow-auto h-96">
              <div className="m-5 px-7 pt-4 pb-8 border border-blue-600 rounded-md ">
                <div className=" text-blue-900 text-sm font-semibold pb-4">
                  {" "}
                  The following affiliate will be sent payouts
                </div>
                <table className="min-w-full my-2 ">
                  <thead className="">
                    <tr className="border-t border-b-2">
                      <th className="py-2 font-bold w-2/5 text-center whitespace-nowrap text-sm md:text-xl">
                        Affiliate
                      </th>
                      <th className="py-2 font-bold w-1/5 text-center whitespace-nowrap text-sm md:text-xl">
                        Commission
                      </th>
                      <th className="py-2 font-bold w-1/5 text-center  whitespace-nowrap text-sm md:text-xl">
                        Type
                      </th>
                    </tr>
                  </thead>

                  <tbody className="">
                    {selectedNewItems.map((item, index) => (
                      <tr className="border-t" key={'selected'+item.id}>
                        <td className="py-2  text-center whitespace-nowrap text-xl">
                          <input
                            id={'selected'+item.id}
                            type="checkbox"
                            onChange={handleChange}
                            value={item.id}
                            defaultChecked={item.checked}
                          ></input>
                          {item.name}
                        </td>
                        <td className="py-2 font-bold text-center whitespace-nowrap  text-xl">
                          ${item.unpaid}
                        </td>
                        <td className="py-2 text-center  whitespace-nowrap  text-xl">
                          {item.type == 1 ? "Store Credit" : "Cash"}
                        </td>
                      </tr>
                    ))}

                    <tr className="border-t">
                      <td className="py-2  text-center whitespace-nowrap text-xl">
                        Store Credit:
                      </td>
                      <td className="py-2"></td>
                      <td
                        className=" py-2 font-bold text-center whitespace-nowrap  text-xl"
                        colSpan="2"
                      >
                        $
                        {selectedNewItems
                          .filter(
                            (i) => i.type === 1 && i.checked 
                          )
                          .reduce(
                            (amount, creditItem) =>
                              (amount = amount + creditItem.ready_payout),
                            0
                          )
                          .toFixed(2)}
                      </td>
                    </tr>

                    <tr className="border-t ">
                      <td className="py-2  text-center whitespace-nowrap text-xl">
                        Tremendous:
                      </td>
                      <td className="py-2"></td>
                      <td className=" py-2 font-bold text-center whitespace-nowrap  text-xl">
                        $
                        {selectedNewItems
                          .filter((item) => item.type === 2 && item.checked)
                          .reduce(
                            (amount, creditItem) =>
                              (amount = amount + creditItem.ready_payout),
                            0
                          )
                          .toFixed(2)}
                      </td>
                    </tr>

                    <tr className="border-t">
                      <td className="py-2  text-center whitespace-nowrap text-xl">
                        Total:
                      </td>
                      <td className="py-2"></td>
                      <td className="py-2 font-bold text-center whitespace-nowrap text-xl">
                        ${(selectedNewItems
                          .filter(
                            (item) => item.checked
                          )
                          .reduce(
                            (amount, creditItem) =>
                              (amount = amount + creditItem.ready_payout),
                            0
                          )).toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="items-center">
              <button
                id="ok-btn"
                className="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-bl-md rounded-br-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Send payouts
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
