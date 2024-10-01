import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center bg-violet-300 ">
    <div className=' w-full max-w-2xl  '>
      <h3 className='text-xl text-center font-bold text-black capitalize mb-2 '>log in here</h3>
      <form action="" className='flex flex-col justify-center items-center bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 z-50 ' >
       
        <label htmlFor="email" className="text-sm capitalize font-bold mb-2">email</label>
        <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" />
        <label htmlFor="password" className="text-sm capitalize font-bold mb-2">password</label>
        <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"/>
        <p className="text-sm font-medium capitalize">no account? <Link to="/" className="font-bold underline">register here</Link> </p> 

      </form>
    </div>
    </div>
  )
}

export default Login
