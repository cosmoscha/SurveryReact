import React, { useEffect, useContext, useState } from "react";

const InventoryContext = React.createContext({});
export const useInventoryContext = () => useContext(InventoryContext);

const InventoryProvider = ({ children }) => {
  const [qValues, setQValues] = useState([]);

  useEffect(() => {
    console.log("qvalues", qValues);
  }, [qValues]);

  return (
    <InventoryContext.Provider
      value={{ qValues: qValues, setQValues: setQValues }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
