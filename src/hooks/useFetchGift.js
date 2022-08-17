import React, { useEffect, useState } from 'react'
import { getGifts } from '../Helpers/getGifs'

export const useFetchGift = (category) => {

    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getGifts(category)
            .then(newImages => setImages(newImages))
        setLoading(false)
    }, [])

    return {
        images: images,
        isLoading: loading
    }

}
