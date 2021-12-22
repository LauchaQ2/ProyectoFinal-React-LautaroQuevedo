import { createContext, useState} from "react";

const ThemeContext = createContext();

 const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false)
    const changeTheme = () =>{
        setTheme(!theme)
    }


    const data = {
        theme,
        changeTheme
    }


    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider};
export default ThemeContext;
