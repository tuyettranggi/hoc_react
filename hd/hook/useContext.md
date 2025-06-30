# 🎆🎆useContext🎆🎆
1. Create context
2. Provider
3. Consumer

# Đứng tại component cha vd: ./App

import { createContext } from 'react'
export const ThemeContext = createContext()
<!-- theme là prob cần truyền, đoạn này bao nội dung html của return -->
<ThemeContext.Provider value={theme}>
</ThemeContext.Provider>

# Đứng tại component con hoặc cháu
import { useContext } from 'react'
import { ThemeContext } from './App'

# Trong function component con
const theme = useContext(ThemeContext)

# Sử dụng thôi vd:
<p className={theme}>