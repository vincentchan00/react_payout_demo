

function Table({
                   statTitle,
                    stateAmount,
                   statePayBtn
               }) {
    let button;
        if (statePayBtn){
            button =  <button>Pay All</button>;
        }
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                {statTitle}
                            </h5>
                        </div>

                    </div>
                    <div className="flex flex-wrap">
                    <div className="relative w-auto pl-4 flex-initial">
                        ${stateAmount}
                        {button}
                    </div>
                    </div>



                </div>
            </div>
        </>
    );
}

export default Table;
