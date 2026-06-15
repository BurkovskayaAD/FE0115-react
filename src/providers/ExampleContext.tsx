import { createContext, useState } from "react";

type TypeContext = [
    string,
    (color: string) => void
]

export const myContext = createContext<TypeContext>(["", () => {}]);

export const ExampleContext = ({children}: any) => {
    const [color, setColor] = useState("light");
    return(
        <myContext.Provider value={[color, setColor]}>
            {children}
        </myContext.Provider>
    )
}