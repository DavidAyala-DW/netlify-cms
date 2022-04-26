import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const { Provider } = AppContext;

export const AppProvider = (props) => {

  const [contentPage, setContentPage] = useState({});

return(

   <Provider value={[contentPage, setContentPage]}>

      {props.children}

   </Provider>

 );

}