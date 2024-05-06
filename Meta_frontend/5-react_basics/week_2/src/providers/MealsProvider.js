import React, { useState, createContext, useContext } from 'react';

const MealsContext = createContext();

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes",];

const MealsProvider = ({children}) => {
    const [meals, setMealsList] = useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => useContext(MealsContext);

export default MealsProvider;