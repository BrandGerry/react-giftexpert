import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        //Para que no acepte espacios en blanco en la lista
        const wordInput = inputValue.trim()
        if (wordInput.length <= 1) return;
        //setCategories(categories => [inputValue, ...categories])
        onNewCategory(wordInput)
        setinputValue('')
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type='text'
                placeholder='Buscar gift'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
