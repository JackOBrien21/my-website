import React, {useContext, useState} from "react"

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [showLinks, setShowLinks] = useState(false)
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)


    React.useEffect( () => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, []);

    const toggleLinks = () => {
        if (windowWidth <= 800) {
            setShowLinks(!showLinks)
        }
    }

    return <AppContext.Provider value={{
        showLinks,
        setShowLinks,
        toggleLinks,
        windowWidth,
      }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
export { AppContext, AppProvider }