import React, { useEffect, useReducer, createContext } from "react"

const ThemeStateContext = createContext()
const ThemeDispatchContext = createContext()

const themeOptions = ["dark", "light", "synthWave84"]

export const palettes = {
  dark: {
    sidebarBg: `rgb(52, 52, 52)`,
    contentBg: `rgb(25, 25, 25)`,
    fontPrimary: `rgb(237, 237, 237)`,
    fontSecondary: `#FFF`,
    linkPrimary: `rgb(255, 255, 255)`,
    accentPrimary: `rgb(255, 255, 255)`,
    accentSecondary: `rgb(255, 255, 255)`,
    other: `rgb(255, 255, 255)`,
  },
  light: {
    sidebarBg: `rgb(255, 255, 255)`,
    contentBg: `rgb(211, 211, 211)`,
    fontPrimary: `rgb(52, 52, 52)`,
    fontSecondary: "#000",
    linkPrimary: `rgb(52, 52, 52)`,
    accentPrimary: `rgb(52, 52, 52)`,
    accentSecondary: `rgb(52, 52, 52)`,
    other: `rgb(52, 52, 52)`,
  },
  synthWave84: {
    sidebarBg: `#241b2f`,
    contentBg: `#262335`,
    fontPrimary: `#36f9f6`,
    fontSecondary: `#ff7edb`,
    linkPrimary: `#72f1b8`,
    accentPrimary: `#fe4450`,
    accentSecondary: `#fede5d`,
    other: `#f97e72`,
  },
}

function themeReducer(state, action) {
  if (action.type === `SET_THEME`) {
    const root = document.documentElement

    localStorage.setItem("theme", action.themeName)

    for (const [styleKey, styleValue] of Object.entries(
      palettes[action.themeName]
    )) {
      root.style.setProperty(`--${styleKey}`, styleValue)
    }
    return { name: action.themeName }
  }
  throw new Error(`Unhandled action type: ${action.type}`)
}

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    name: "light",
  })

  useEffect(() => {
    dispatch({
      type: `SET_THEME`,
      themeName: localStorage.getItem("theme") || "light",
    })
  }, [])

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  )
}

function useThemeState() {
  const context = React.useContext(ThemeStateContext)

  if (context === undefined)
    throw new Error("useThemeState must be used within a ThemeProvider")

  return context
}

function useThemeDispatch() {
  const context = React.useContext(ThemeDispatchContext)

  if (context === undefined)
    throw new Error("useThemeDispatch must be used within a ThemeProvider")

  return context
}

function useTheme() {
  return [useThemeState(), useThemeDispatch()]
}

export { ThemeProvider, useTheme, themeOptions }
