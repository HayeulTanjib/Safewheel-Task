import { GET_ALL_POKEMONS } from '@/gqlOperations/queries';
import { useQuery } from '@apollo/client';

const Pokemons = () => {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS);

  console.log('Data>', data);

  if(loading) return <h1>Loading...</h1>

  return (
    <main>
      <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
        { data.pokemons.map((pokemon:any) => (
            <div className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
            <img src={pokemon.image} alt='Pokemons' className='h-80 w-72 object-cover rounded-t-xl' />
            <div className='px-4 py-3 w-72'>
              <span className='text-gray-400 mr-3 uppercase text-xs'>{pokemon.classification}</span>
              <p className='text-lg font-bold text-black truncate block capitalize'>{pokemon.name}</p>
              <div className='flex items-center'>
                <p className='text-lg font-semibold text-black cursor-auto my-3'>{pokemon.number}</p>
              </div>
            </div>
        </div>
        ))
    }
            
      </section>
    </main>
  );
};

export default Pokemons;
