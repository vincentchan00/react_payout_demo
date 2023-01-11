import { GiReceiveMoney } from "react-icons/gi";

function OverviewCard({data, statTitle, stateAmount, statePayBtn, setOpenModal,payoutInfo,setPayoutInfo }) {
  const handleClick = () => {
    setPayoutInfo({ langeage:payoutInfo.langeage,response:data.map((item)  => (""+item.id))});
    setOpenModal(2);
  };
  return (
    
      <div className="relative flex flex-col min-w-0 break-words bg-white border rounded-md mb-6 xl:mb-0 shadow-lg w-full lg:w-1/4 ">
        <div className="flex-auto p-4 text-blue-900 ">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <div className="p-1 font-bold text-xs flex items-center">
                <GiReceiveMoney size="20px" />
                <span className="mx-1">{statTitle}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div
              className={`" w-full py-2 flex-initial font-bold text-xl space-between ${
                statePayBtn ? "text-green-500" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <span>${stateAmount.toFixed(2)}</span>
                {statePayBtn && (
                  <button
                  onClick={handleClick}
                    className="text-xs bg-blue-600 text-white px-3 rounded-md h-5"
                  >
                    Pay All
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default OverviewCard;
