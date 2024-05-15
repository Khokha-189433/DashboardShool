import { createContext , useState } from "react";
export const TokenAuth = createContext() ;

export default function TokenProvider()
{
    const [Auth, setAuth] = useState({});
    return(<>
       <TokenAuth.Provider value={{}}>
          
       </TokenAuth.Provider>
    </>);
}
