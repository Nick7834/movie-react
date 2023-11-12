import React, {useEffect, useState} from 'react'
import { Search } from '../ul/Search'
import { Film } from '../Film/Film';
import { FilmService } from '../service/Film.Service';
import { useQuery } from 'react-query';
import { Loader } from '../ul/Loader/Loader';
import { FilmSearch } from '../FilmSearch/FilmSearch';
import { useModal } from '../ContextModal';
import { IoClose } from "react-icons/io5";
import { GrNext } from 'react-icons/gr'
import { TimeFound } from '../ul/TimeFound';

export const ModalSearch = () => {
  const [currentM, setCurrentM] = useState(1)
  const { isModalOpen, closeModal } = useModal()

  const [searchM, setSearchM] = useState('');

  const handleSearchChange = (value) => {
      setSearchM(value);
  };

  useEffect(() => {
    setCurrentM(1)
  }, [searchM])

  useEffect(() => {

      const closeModals = (modal) => {
        if(modal.key === 'Escape') {
            closeModal()
        }
      }

      document.addEventListener('keydown',  closeModals);

      return () => {
        document.removeEventListener('keydown', closeModals)
      }

  }, [closeModal])

  const filSearch = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchM}&page=${currentM}`;

  const { data, isLoading, isError } = useQuery(['filmSearch', searchM, currentM], () => FilmService.getSearch(filSearch), {
      keepPreviousData: true,
      refetchOnWindowFocus: false 
  });

  if (isError) {
    return console.log('Произошла ошибка при загрузке данных');
}

  if (isLoading) {
      return console.log('Loader...');
  }

  return (
    <div className={`modal-main-s fixed top-0 left-0 h-[100%] w-[100%] bg-[#262e45] z-[100] transition-all ease-in-out duration-[.3s] ${isModalOpen ? 'activeModal' : ''}`}>
          <div className='flex flex-col items-center w-[100%]'>
            <button onClick={closeModal} className='absolute top-0 right-0 text-[40px] text-[#EBEEF5] m-ms transition-all ease-in-out duration-[.3s] hover:text-[45px]'><IoClose /></button>

            <div className="mt-[50px] w-[100%] flex flex-col items-center">
               <Search onChange={handleSearchChange} />  
            </div>

              <div className='film-all modal-films grid grid-cols-[224px_224px_224px_224px_224px] w-[100%] justify-center gap-y-[30px] gap-x-[20px] my-[24px] transition-all ease-in-out duration-[.3s]'>

                    {data?.films && data?.films?.length > 0 ? data?.films?.map(search => (
                        <FilmSearch key={search.filmId} film={search} onClick={closeModal} />
                    )) : searchM && <TimeFound />}

                   <div className="flex items-center justify-center gap-[30px] text-[20px]">
                        <button onClick={() => setCurrentM(currentM - 1)} disabled={currentM === 1} className={`bg-[#EBEEF5] p-[10px] rounded-[12px] rotate-[180deg] transition-all ease-in-out duration-[.3s] hover:bg-[#b8b8b8] ${currentM > 1 ? 'block' : 'hidden'}`}><GrNext /></button>
                        {data?.films.length > 0 && data.films.length >= 20 &&
                           <button onClick={() => setCurrentM(currentM + 1)} disabled={currentM >= 35} className={`bg-[#EBEEF5] p-[10px] rounded-[12px] transition-all ease-in-out duration-[.3s] hover:bg-[#b8b8b8] ${currentM < 35 ? 'block' : 'hidden'}`}><GrNext /></button>
                        }
                  </div>   

              </div>
      </div>

    </div>
  )
}
