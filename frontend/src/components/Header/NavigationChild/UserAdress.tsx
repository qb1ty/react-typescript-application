import React, { useContext } from "react";
import { Context } from "../../../Context/Context";
import "./UserAdress.css"

const UserAdress: React.FC = () => {
    const { city, district, street } = useContext(Context)

    return (
        <div className="user_adress">
            <div className="adress">
                <div className="accurate_adress">
                    <span>{city}, {district}, {street}</span>
                </div>
            </div>
        </div>
    )
}

export default UserAdress