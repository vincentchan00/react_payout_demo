import OverviewCard from "./Cards/OverviewCard";

function Header({data, paidAmount,unpaidAmount,readyAmount,setOpenModal,payoutInfo,setPayoutInfo }) {
  return (
    <div className="py-6">
      <div className="text-2xl py-4 font-bold text-blue-900 text-left">
        Payouts Overview
      </div>
      <div className="gap-5 flex flex-wrap">
        <OverviewCard
          statTitle="Total Paid Payouts"
          stateAmount={paidAmount}
          statePayBtn={false}
        />
        <OverviewCard
          statTitle="Total Unpaid Payouts"
          stateAmount={unpaidAmount}
          statePayBtn={false}
        />
        <OverviewCard
          statTitle="Total Ready Payouts"
          stateAmount={readyAmount}
          statePayBtn={true}
          setOpenModal={setOpenModal}
          payoutInfo={payoutInfo} setPayoutInfo={setPayoutInfo}
          data={data}
        />
      </div>
    </div>
  );
}

export default Header;
