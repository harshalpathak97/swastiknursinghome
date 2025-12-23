import { createContext } from "react";
import { doctors, specialityData } from '../assets/assets';
import { clinicData } from '../data/clinic';

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const currencySymbol = '₹'
  const value = {
    doctors,
    currencySymbol,
    specialities: specialityData,
    clinicData
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
