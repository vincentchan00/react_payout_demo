import logo from './logo.svg';
import './App.css';
import Overview from "./components/Header";
import Payout from "./views/Payout";
import React from "react";
const getData = () =>[
  {
    name:"Gy Test",
    leak: true,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    Unpaid: 35.61,
    ready_payout:35.61,
  },
  {
    name:"Gy Test 2",
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    Unpaid: 35.61,
    ready_payout:35.61,
  },
  {
    name:"Gy Test 3",
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    Unpaid: 35.61,
    ready_payout:35.61,
  },
  {
    name:"Gy Test 4",
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    Unpaid: 35.61,
    ready_payout:35.61,
  },
  {
    name:"Gy Test 5",
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    Unpaid: 35.61,
    ready_payout:35.61,
  },
  {
    name:"Gy Test 6",
    leak: false,
    recent_referral:"28 Nov 2022",
    revenue: 356.05,
    paid: 0.00,
    Unpaid: 35.61,
    ready_payout:60.61,
  },
];
function App() {
  const data = React.useMemo(() => getData(), []);
  return (
    <div className="App bg-slate-100">
        <div className="container mx-auto ">
          <Overview />
          <Payout data={data}/>
        </div>
    </div>
  );
}

export default App;
