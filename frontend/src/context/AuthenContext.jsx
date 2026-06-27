import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const AuthenContext = createContext()

export function AuthProvider({ children }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fielderrors, setFielderrors] = useState({})
  const [loginerror, setLoginerror] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  function handleemail(e) {
    setEmail(e.target.value)
  }

  function handlepassword(e) {
    setPassword(e.target.value)
  }

  function validatefields() {
    const errors = {}
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/
    if (!email.trim()) {
      errors.email = "Please enter a valid email address."
    }
    else if(!gmailRegex.test(email)){
      errors.email="Please enter a valid Gmail address (e.g., example@gmail.com)."
    }

    if (!password.trim()) {
      errors.password = "Please enter your password."
    }
    else if(!passRegex.test(password)){
      errors.password="Password must be between 6 and 20 characters and include at least one letter and one number."
    }

    return errors
  }

  function handlesubmit(e) {
    e.preventDefault()

    const errors = validatefields()
    setFielderrors(errors)
    setLoginerror("")

    if (Object.keys(errors).length > 0) {
      return
    }

    setLoading(true)

    axios
      .post("https://netflix-login-18bd-ay156935i-moorthytech4s-projects.vercel.app/api/login", { email, password })
      .then((res) => {
        navigate("/dashboard")
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
          setLoginerror(err.response.data.message)
        } else {
          setLoginerror("Something went wrong. Please try again.")
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const logout = ()=>{
    setEmail("")
    setPassword("")
    setFielderrors("")
    setLoginerror("")
  }

  const value = {
    email,
    password,
    fielderrors,
    loginerror,
    loading,
    handleemail,
    handlepassword,
    handlesubmit,
    logout,
  }

  return <AuthenContext.Provider value={value}>{children}</AuthenContext.Provider>
}

export function useAuth() {
  return useContext(AuthenContext)
}
