
import OverviewCard from "./Cards/OverviewCard";

function Payout() {
    return (
        <div>
            <div className="text-xl font-bold text-blue-900"> Payouts Overview</div>
            <div className="gap-5 columns-4">
                <OverviewCard statTitle="Total Paid Payouts" stateAmount={0} statePayBtn={false}/>
                <OverviewCard statTitle="Total Paid Payouts" stateAmount={185.88} statePayBtn={false}/>
                <OverviewCard statTitle="Total Paid Payouts" stateAmount={185.88} statePayBtn={true}/>
            </div>


        </div>
    )
}


export default Payout;