import { Header } from './components/Header/Header'
import { Search } from './components/ul/Search'
import { FilmsAll } from './components/FilmsAll/FilmsAll'
import React, { useEffect, useState } from 'react'
import { FilmService } from './components/service/Film.Service';
import { useQuery } from 'react-query';
import { ModalSearch } from './components/ModalSearch/ModalSearch';
import { OpenM } from './components/ul/OpenM';

function App() {
   
  return (
    <div>

        <Header />

        <ModalSearch />

        <main>

            <section className='mt-[80px]'>
                <div className="container">
                    <div className='flex flex-col text-center items-center justify-center'>
                        <h1 className='text-[#EBEEF5] text-title leading-[80px] font-semibold'>MovieTop</h1>
                        <p className='text-[#EBEEF5] text-text leading-[24px] font-normal mt-[20px] mb-[50px]'>Lots of movies, TV series, anime for every taste!</p>
                        <OpenM />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="min-h-[50vh] relative">
                        <FilmsAll />
                    </div>
                </div>
            </section>

        </main>

    </div>
  )
}

export default App
