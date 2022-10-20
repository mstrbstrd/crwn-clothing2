import React from 'react';
import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: [],

});

export const CategoriesProvider = ({children}) => { 
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);

    // vvvvv everytime that is ran it will try to set new values in the database

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // })

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};