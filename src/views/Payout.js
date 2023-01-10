import React, { useState } from "react";
import Tabs from "../components/Tabs";
import Table from "../components/Table";

function Payout({data}) {
    const [openTab, setOpenTab] = useState(1);
    return (
        <div>
            <Tabs openTab={openTab} setOpenTab={setOpenTab}/>
            <Table openTab={openTab} data={data}/>
        </div>
    )
}


export default Payout;