import React from 'react'
import { useState } from 'react'
import { AddCategory, GiftGrid } from './Components'
import { DarkModeProvider } from './Context/Darkmode'

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Dragonball'])
    const [darkMode, setDarkMode] = useState(false)
    const handleToggleColor = () => setDarkMode(!darkMode)

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }
    return (
        <DarkModeProvider value={{ darkMode, handleToggleColor }}>
            <h1>Gift Expert</h1>
            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            /* setCategories={setCategories} categories={categories} */
            />

            {
                categories.map(category =>
                (
                    <GiftGrid key={category} category={category} />
                )
                )
            }
        </DarkModeProvider>
    )
}
