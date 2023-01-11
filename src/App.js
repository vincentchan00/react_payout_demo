import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Payout from "./views/Payout";
const getData = () =>[
  {
    id:1,
    name:"Gy Test",
    type: 1,
    leak: true,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    unpaid: 35.61,
    ready_payout:35.61,
  },
  {
    id:2,
    name:"Gy Test 2",
    type: 1,
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    unpaid: 35.61,
    ready_payout:35.61,
  },
  {
    id:3,
    name:"Gy Test 3",
    type: 2,
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    unpaid: 35.61,
    ready_payout:35.61,
  },
  {
    id:4,
    name:"Gy Test 4",
    type: 1,
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    unpaid: 35.61,
    ready_payout:35.61,
  },
  {
    id:5,
    name:"Gy Test 5",
    type: 1,
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    unpaid: 35.61,
    ready_payout:35.61,
  },
  {
    id:6,
    name:"Gy Test 6",
    type: 1,
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    unpaid: 35.61,
    ready_payout:60.61,
  },
  {
    id:7,
    name:"Gy Test 9",
    type: 1,
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    unpaid: 35.61,
    ready_payout:60.61,
  },
  {
    id:8,
    name:"Gy Test 7",
    type: 1,
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    unpaid: 35.61,
    ready_payout:60.61,
  },
  {
    id:9,
    name:"Gy Test 8",
    type: 1,
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    unpaid: 35.61,
    ready_payout:60.61,
  },
];
function App() {
  const data = React.useMemo(() => getData(), []);
  const [openModal, setOpenModal] = useState(0); // 0 = close 1 = pay all 2 = send payment
  const paidAmount = data.reduce((amount, item) => (amount = amount + item.paid),0)
  const unpaidAmount = data.reduce((amount, item) => (amount = amount + item.unpaid),0)
  const readyAmount = data.reduce((amount, item) => (amount = amount + item.ready_payout),0)
  const [payoutInfo, setPayoutInfo] = useState({ langeage:[],response:[] });

  return (
    <div className="App bg-slate-100">
        <div className="container mx-auto ">
          <Header data={data} paidAmount={paidAmount} unpaidAmount={unpaidAmount} readyAmount={readyAmount} setOpenModal={setOpenModal} payoutInfo={payoutInfo} setPayoutInfo={setPayoutInfo}/>
          <Payout data={data} openModal={openModal} setOpenModal={setOpenModal} payoutInfo={payoutInfo} setPayoutInfo={setPayoutInfo}/>
        </div>
    </div>
  );
}

export default App;
