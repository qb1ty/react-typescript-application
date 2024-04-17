import React, { useContext } from "react";
import { Context } from "../../../Context/Context";
import { IoLocationOutline } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import "./Location.css"

const Location: React.FC = () => {
    const { showModal } = useContext(Context)

    return (
        <div className="location_nav_block">
            <div className="geo_icon">
                <IoLocationOutline />
            </div>
            <div className="user_city">
                <label htmlFor="arrow_down_btn" className="city">Ваш город...</label>
                <button type="button" id="arrow_down_btn" className="arrow_down_btn" onClick={showModal}>
                    <SlArrowDown />
                </button>
            </div>
        </div>
    )
}

export default Location