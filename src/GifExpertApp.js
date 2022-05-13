import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Shingeki no kyojin']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategories}/>
            <hr />
            <ol>
                {categories.map(el => 
                    <GifGrid 
                        category={el}
                        key = {el} 
                    />
                )}
            </ol>
        </>
    )
}