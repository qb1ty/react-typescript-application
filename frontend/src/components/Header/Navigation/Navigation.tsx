import React, { useContext } from "react";
import Location from "../NavigationChild/Location";
import ModalBody from "../ModalChildren/ModalChildren";
import UserAdress from "../NavigationChild/UserAdress";
import { Context } from "../../../Context/Context";
import { Button, Modal } from "antd";
import "./Navigation.css"
import CompanyPhone from "../NavigationChild/CompanyPhone";

const Navigation: React.FC = () => {
    const { modal, handleCancel, hideModal } = useContext(Context)

    return (
        <>
            <div className="main_nav_block">
                <Location />
                <UserAdress />
                <CompanyPhone />
            </div>
            <Modal
                className="affected-modal"
                title="Ваш город"
                open={modal}
                onOk={hideModal}
                onCancel={handleCancel}
                footer={[
                    <Button onClick={handleCancel} key={Date.now()}>
                        Выйти
                    </Button>
                ]}
                width={800}
            >
                <ModalBody />
            </Modal>
        </>
        
    )
}

export default Navigation