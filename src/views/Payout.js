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

        </div>
    )
}


export default Payout;