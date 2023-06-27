import { GET_ALL_POKEMONS } from '@/gqlOperations/queries';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

const Pokemons = () => {

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);
  

  //Loading State
  if (loading) {
    return (
      <div className='flex justify-center items-center mt-10' role='status'>
        <h2 className='mx-2 font-semibold'>Pokemons Loading</h2>
        <svg
          aria-hidden='true'
          className='w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentFill'
          />
        </svg>
      </div>
    );
  }

  //Error Handling
  if (error || data.pokemons.length < 1 ) {
    return (
      <div
        className='flex justify-center items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50'
        role='alert'
      >
        <svg
          aria-hidden='true'
          className='flex-shrink-0 inline w-5 h-5 mr-3'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
            clip-rule='evenodd'
          ></path>
        </svg>
        <div>
          <span className='font-medium'>Error! </span> 
          {error && error.message}
          {data.pokemons.length < 1 && "No data found"}
        </div>
      </div>
    );
  }

  return (
    <main>
        <Link href={'/'}>
            <button type="button" className="text-white mx-4 mt-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Home</button>
        </Link>
      <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
        {data.pokemons.map((pokemon: any) => (
          <div
            key={pokemon.id}
            className='w-72 bg-white shadow-md shadow-cyan-500/50 rounded-xl duration-500 hover:scale-105 hover:shadow-xl'
          >
            <img
              src={pokemon.image}
              alt='Pokemons'
              className='h-80 w-72 object-cover rounded-t-xl'
            />
            <div className='px-4 py-3 w-72'>
              <span className='text-gray-400 mr-3 uppercase text-xs'>{pokemon.classification}</span>
              <p className='text-lg font-bold text-black truncate block capitalize'>
                {pokemon.name}
              </p>
              <div className='flex items-center'>
                <Link href={`pokemon/${pokemon.id}`}>
                <button type="button" className="text-white my-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Pokemons;
