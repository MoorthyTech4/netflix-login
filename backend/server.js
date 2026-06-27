// import express from "express"
// import cors from "cors"

// const app = express()
// const port = 5000

// app.use(cors())
// app.use(express.json())

// // Mock "database" of valid users
// const nfusers = [
//   { email: "mani1234@gmail.com", password: "manii1234" },
//   { email: "kavi5678@gmail.com", password: "kavi5678" },
//   { email: "mikey777@gmail.com", password: "mikey70707"},
//   { email: "suresh5050@gmail.com", password: "098765"},
// ]

// app.post("/api/login", (req, res) => {
//   const { email, password } = req.body
//   nfusers.push({email,password})

//   if (!email || !password) {
//     return res.status(400).json({ message: "Email and password are required." })
//   }

//   const matcheduser = nfusers.find(
//     (user) => user.email === email && user.password === password
//   )

//   if (!matcheduser) {
//     return res.status(401).json({ message: "Invalid email or password." })
//   }

//   return res.status(200).json({
//     message: "Login successful",
//     user: { email: matcheduser.email },
//   })
// })

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`)
// }) 
import express from "express"
import cors from "cors"

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Mock "database" of valid users
const nfusers = [
  { email: "mani1234@gmail.com", password: "manii1234" },
  { email: "kavi5678@gmail.com", password: "kavi5678" },
  { email: "mikey777@gmail.com", password: "mikey70707"},
  { email: "suresh5050@gmail.com", password: "098765"},
]

app.post("/api/login", (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." })
  }

  const matcheduser = nfusers.find(
    (user) => user.email === email && user.password === password
  )

  if (!matcheduser) {
    return res.status(401).json({ message: "Invalid email or password." })
  }

  return res.status(200).json({
    message: "Login successful",
    user: { email: matcheduser.email },
  })
})

// Only run app.listen locally — Vercel handles the server itself
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
}

export default app