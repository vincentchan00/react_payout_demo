function Tabs({ openTab, setOpenTab }) {
  return (
    <div className="mx-4 w-full">
      <div className="flex flex-col max-w ">
        <ul className="flex space-x-2 border-b-2 ">
          <li className="border-x- border-t-2 rounded-t">
            <button
              onClick={() => setOpenTab(1)}
              className={`"inline-block px-4 py-2  " ${
                openTab === 1 ? "bg-white text-black" : "text-blue-600"
              }`}
            >
              Pending Payouts
            </button>
          </li>
          <li>
            <button
              onClick={() => setOpenTab(2)}
              className={`"inline-block px-4 py-2 " ${
                openTab === 2 ? "bg-white text-black" : "text-blue-600"
              }`}
            >
              Paid Payouts
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tabs;
