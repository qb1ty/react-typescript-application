import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import "./CompanyPhone.css"

const CompanyPhone: React.FC = () => {
    return (
        <div className="company_number">
            <div className="phone">
                <span className="phone_icon"><FaPhoneAlt /></span>
                <span className="number">+7 775 623 79 22</span>
                <button type="button" className="arrow_down_button">
                    <SlArrowDown />
                </button>
            </div>
        </div>
    )
}

export default CompanyPhone