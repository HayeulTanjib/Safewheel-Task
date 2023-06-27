import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface LoginFormValues {
  phoneNumber: string;
  password: string;
}

const LoginForm = () => {

  const {register, handleSubmit, reset, formState: { errors }} = useForm<LoginFormValues>();
  const dispatch = useDispatch();

  const onSubmit = (data: LoginFormValues) => {

    dispatch({type: 'SET_PHONE_NUMBER', payload: data.phoneNumber});
    dispatch({type: 'SET_PASSWORD', payload: data.password});

    //reset input fields
    reset();
  }

  return (
    <main>
        <Head>
            <title>Log in-Safewheel</title>
        </Head>
<div className="h-screen flex">
  <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
    <div>
      <h1 className="text-white font-bold text-4xl font-sans">Safewheel</h1>
      <Link href={'/pokemons'}>
      <button type="submit" className="block w-44 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">See All Pokemons</button>
      </Link>
    </div>
  </div>
  <div className="flex w-1/2 justify-center items-center bg-white">

    {/* Login Form */}
    <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-gray-800 font-bold text-2xl mb-1">Login</h1>
      <p className="text-sm font-normal text-gray-600 mb-7">Safewheel</p>

      {/* Phone Number */}
      <div className='mb-4'>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input className="pl-2 outline-none border-none" type="text" placeholder="Phone Number" {...register("phoneNumber", { required: "phone number is required" })} />
      </div>
        {errors.phoneNumber && <span className='text-red-500'>{errors.phoneNumber.message}</span>}
      </div>

      {/* Password */}
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
        <input className="pl-2 outline-none border-none" type="password" placeholder="Password" {...register("password", { required: "password is required" })} />
      </div>
        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}

      <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
    </form>

  </div>
</div>
    </main>
  )
}


export default LoginForm;