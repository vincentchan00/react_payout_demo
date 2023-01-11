import React, { useState } from "react";
import Tabs from "../components/Tabs";
import Table from "../components/Table";
import ToolBar from "../components/ToolBar";
import Modal from "../components/Modal";
function Payout({ data,openModal,setOpenModal,payoutInfo, setPayoutInfo}) {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div>
            <Modal data={data} openModal={openModal} setOpenModal={setOpenModal} payoutInfo={payoutInfo} setPayoutInfo={setPayoutInfo} />
            <Tabs openTab={openTab} setOpenTab={setOpenTab} />
            <ToolBar data={data} openModal={openModal} setOpenModal={setOpenModal}/>
            <Table openTab={openTab} data={data} payoutInfo={payoutInfo} setPayoutInfo={setPayoutInfo} setOpenModal={setOpenModal}/>
            <button className="fixed bottom-10 right-10 bg-blue-600 p-4 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>
</button>
        </div>
    )
}


export default Payout;