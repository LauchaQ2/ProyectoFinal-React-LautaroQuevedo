import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import React from 'react';
import CategoriesBanner from '../../components/CategoriesBanner/CategoriesBanner';

export default function HomePage(){
    return(
        <>
        <ItemListContainer />
        <CategoriesBanner />
        </>
    )
}