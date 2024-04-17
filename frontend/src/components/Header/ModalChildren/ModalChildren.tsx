import React, { FormEvent, useContext, useRef, useState } from "react";
import { Context } from "../../../Context/Context";
import "./ModalChildren.css"

const ModalBody: React.FC = () => {
    const { setCity, setDistrict, setStreet } = useContext(Context)
    const [city, setCityVal] = useState<boolean>(false)
    const [cityError,] = useState<string>("Поле не может быть пустым")
    const cityRef: any = useRef<HTMLLinkElement>(null)
    const districtRef: any = useRef<HTMLLinkElement>(null)
    const streetRef: any = useRef<HTMLLinkElement>(null)
    const formRef: any = useRef<HTMLLinkElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const cityInputText = cityRef.current?.value
        const districtInputText = districtRef.current?.value
        const streetInputText = streetRef.current?.value
        if (!cityInputText.trim() && !districtInputText.trim() && !streetInputText.trim()) {
            if (!cityInputText.trim()) return setCityVal(true);
            return null
        } else if (cityInputText.trim() && districtInputText.trim() && streetInputText.trim()) {
            setCity(cityInputText)
            setDistrict(districtInputText)
            setStreet(streetInputText)
            setCityVal(false)
        }
        formRef.current?.reset()
    }

    return (
        <>
            <div className="main-modal">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div>
                        {(city && cityError) && <div style={{ color: 'red', margin: "0 0 0 2px" }}>{cityError}</div>}
                        <input ref={cityRef} type="text" className="user_pos" placeholder="Введите имя вашего города"/>
                        <input ref={districtRef} type="text" className="user_pos" placeholder="Введите имя вашего округа"/>
                        <input ref={streetRef} type="text" className="user_pos" placeholder="Введите адрес вашей улицы"/>
                    </div>
                    <div>
                        <div className="button_control">
                            <button type="submit" className="btn btn-primary">
                                Готово
                            </button>
                        </div>
                    </div>
                </form>
                <div>
                    <div className="examples_cities">
                        <span className="example_tag">Например:{' '}</span>
                        <span className="example">Шымкент, Аль Фарабийский район, 16мкр. 9дом. 72кв.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalBody