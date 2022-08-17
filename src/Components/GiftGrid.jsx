import React, { useContext } from 'react'
import { DarkModeContext } from '../Context/Darkmode'
import { useFetchGift } from '../hooks/useFetchGift'
import { GiftItem } from './GiftItem'
import { Loader } from '../Helpers/Loader'
import '../Helpers/Darkmode.style.css'

export const GiftGrid = ({ category }) => {

    const { images, isLoading } = useFetchGift(category)
    const { darkMode } = useContext(DarkModeContext)
    const { handleToggleColor } = useContext(DarkModeContext)
    console.log({ images, isLoading })

    return (
        <>
            <div className={`${darkMode ? "NavbarDark" : "NavbarLight"}`}>
                <button className={`${darkMode ? "Dark" : "Light"}`} onClick={() => handleToggleColor()}>
                    {darkMode ? "Dark" : "Light"}
                </button>
                <h3>{category}</h3>
                {
                    isLoading && <Loader />
                }
                {/* {
                isLoading ? (<h2>Cargando...</h2>) : null
            } */}
                <div className='card-grid'>
                    {
                        images.map(image => (
                            <GiftItem
                                key={image.id}
                                {...image} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}
