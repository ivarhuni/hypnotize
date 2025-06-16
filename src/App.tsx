import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Hello World!</h1>
        <p className="text-gray-600 mb-4">Welcome to your React + TypeScript + Vite app</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>
    </div>
  )
}

export default App 