
import DropDownCard from "./Cards/DropDownCard";
import SearchCard from "./Cards/SearchCard";
function ToolBar({data,openModal,setOpenModal}) {
    return (
        <div className="flex justify-between m-4 flex-wrap">
            <div className="inline-flex items-center  py-4">
                <DropDownCard stateText="Sort by" stateMenu={[{ name: 'Revenue Generated', subMenu :['Highest first','Lowest first']},{name:'Most Recent Referral', subMenu:['Newest first','Oldeset first']}]}/>
                <DropDownCard stateText="Filter by" stateMenu={[{ name: 'All Pending Payouts'},{name:'Ready Payouts'},{name:'No Leaks'}]}/>
                <DropDownCard stateText="Actions" stateMenu={[{ name: 'Mask As Paid'},{name:'Reject'},{name:'Send Payouts', openModal:true}]} openModal={openModal} setOpenModal={setOpenModal}/>
                <span className=" text-gray-500 text-sm">{data.length} pending payouts</span>
            </div>
            <div className=" py-4">
                <SearchCard />
            </div>
        </div>

    )
}


export default ToolBar;