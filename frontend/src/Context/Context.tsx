import React, { createContext, Dispatch, SetStateAction, useState } from "react";

interface MainContextProps {
    children: React.ReactNode
}

interface DefaulValues {
    modal: boolean
    city: string
    district: string
    street: string
    setModal: Dispatch<SetStateAction<boolean>>
    setCity: Dispatch<SetStateAction<string>>
    setDistrict: Dispatch<SetStateAction<string>>
    setStreet: Dispatch<SetStateAction<string>>
    showModal: () => void
    handleCancel: () => void
    hideModal: () => void
}

export const Context = createContext<DefaulValues>({
    modal: false,
    city: "Шымкент",
    district: "Аль Фарабийский район",
    street: "16мкр. 9дом. 72кв.",
    setModal() {},
    setCity() {},
    setDistrict() {},
    setStreet() {},
    showModal() {},
    handleCancel() {},
    hideModal() {}
})

export const MainContext: React.FC<MainContextProps> = ({ children }) => {
    const [modal, setModal] = useState(false)
    const [city, setCity] = useState("Шымкент")
    const [district, setDistrict] = useState("Аль Фарабийский район")
    const [street, setStreet] = useState("16мкр. 9дом. 72кв.")

    const showModal = () => {setModal(true);}
    const hideModal = () => {setModal(false);}
    const handleCancel = () => {setModal(false);}

    return (
        <Context.Provider value={{
            modal,
            city,
            district,
            street,
            setCity,
            setDistrict,
            setStreet,
            setModal,
            showModal,
            handleCancel,
            hideModal
        }}>
            {children}
        </Context.Provider>
    )
}
