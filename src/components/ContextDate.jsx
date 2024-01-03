import { useContext, useEffect, useState } from "react";
import { createContext } from "react"

const DateContext = createContext();

export const ContextDate = ({ children }) => {

    const [dateM, setDateM] = useState(false);
    
    useEffect(() => {
        const date = new Date();
        const motch = date.getMonth() + 1;
        const nowDate = date.getDate();
    
        if ((motch === 12 && nowDate >= 20) || (motch === 1 && nowDate <= 10)) {
          setDateM(true);
        }
      }, []);
   
  return (
    <DateContext.Provider value={{ dateM }}>
        {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => {
    return useContext(DateContext);
};