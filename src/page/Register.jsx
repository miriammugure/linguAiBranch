

function Register() {
  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center bg-violet-300 ">
    <div className=' w-full max-w-2xl  '>
      <h3 className='text-xl text-center font-bold text-black capitalize '>register here</h3>
      <form action="" className='flex flex-col justify-center items-center bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 z-50 ' >
        <label htmlFor="firstName" className="text-sm capitalize font-bold mb-2">first name</label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="username"  />
        <label htmlFor="lastName" className="text-sm capitalize font-bold mb-2">last name</label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" />
        <label htmlFor="email" className="text-sm capitalize font-bold mb-2">email</label>
        <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" />
        <label htmlFor="phoneNumber" className="text-sm capitalize font-bold mb-2">phone number</label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"/>
      </form>
    </div>
    </div>
  )
}

export default Register
