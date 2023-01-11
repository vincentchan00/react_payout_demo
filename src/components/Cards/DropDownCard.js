import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import React, { useState, useRef, useEffect } from "react";



function DropDownCard({
    stateText, stateMenu,setOpenModal
}) {
    const [openMenu, setOpenMenu] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpenMenu(false);
                setOpenSubMenu(0);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return (
        <div className="group inline-block relative">
            <button id="multiLevelDropdownButton" onClick={() => setOpenMenu(true)} data-dropdown-toggle="dropdown" className="text-white bg-blue-700  hover:bg-blue-800  rounded-sm text-xs mx-0.5 px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{stateText}<IoMdArrowDropdown /></button>
            <ul ref={ref} className={`"py-1 text-sm absolute top-full text-black bg-white  dark:text-black ${openMenu ? "block" : "hidden"}`}>
                {stateMenu.map((item, index) => (
                    <li key={item.name}>

                        <button id={item.name} onClick={item.openModal?  ()=>setOpenModal(2):() => setOpenSubMenu(index)} className=" bg-white text-center inline-flex items-center w-full hover:bg-blue-600 py-2 px-4 whitespace-nowrap">{item.name}{item.subMenu != null &&<IoMdArrowDropright />}</button>


                        {item.subMenu != null &&
                            <ul className={`"py-1 text-sm left-full top-0 bg-white text-gray-700 dark:text-black absolute ${openSubMenu===index ? "block" : "hidden"}`}>
                                {item.subMenu.map(subItem => (
                                    <li key={subItem}>
                                        <button className="bg-white hover:bg-blue-600 hover:text-white py-2 px-4 block whitespace-nowrap">{subItem}</button>
                                    </li>
                                ))}

                            </ul>
                        }




                    </li>
                ))}
            </ul>

        </div>
    )
}
export default DropDownCard;