import React, { useEffect, useState } from 'react'
import { Header } from '../../Header/Header'
import { useParams } from 'react-router-dom'
import { Rating } from '../../ul/Rating'
import ReactPlayer from 'react-player'
import { FilmSim } from '../../FilmSim/FilmSim'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Loader } from '../../ul/Loader/Loader'
import { FilmService } from '../../service/Film.Service'
import { useQueries, useQuery } from 'react-query'

export const FilmPage = () => {
    const { id } = useParams()

    const [slidesPerView, setSlidesPerView] = useState(5);

    useEffect(() => {
      const handleResize = () => {
  
        if (window.innerWidth >= 950) {
          setSlidesPerView(5);
        } else if (window.innerWidth >= 750) {
          setSlidesPerView(4);
        } else if (window.innerWidth >= 550) {
          setSlidesPerView(3)
        } else if (window.innerWidth >= 450) {
          setSlidesPerView(2)
        } else {
          setSlidesPerView(1)
        }
      };
  
          handleResize();
          window.addEventListener('resize', handleResize);
        
          return () => {
              window.removeEventListener('resize', handleResize);
          };
      }, []);

     // react query 

     const filmPage = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`;

     const poster = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=POSTER&page=1`;
 
     const video = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`;
 
     const budget = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`;
 
     const simi = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`;


     const queries = [
        { queryKey: ['filmPage', id], queryFn: () => FilmService.getFilmPages(filmPage) },
        { queryKey: ['filmPoster', id], queryFn: () => FilmService.getPosters(poster) },
        { queryKey: ['filmVideo', id], queryFn: () => FilmService.getVideos(video) },
        { queryKey: ['filmBudget', id], queryFn: () => FilmService.getBudget(budget) },
        { queryKey: ['filmSimi', id], queryFn: () => FilmService.getSimis(simi) },
    ];

    const results = useQueries(queries, {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    });

    const isError = results.some((result) => result.isError);
    const isLoading = results.some((result) => result.isLoading);

    if (isError) {
        return <div className='absolute flex items-center justify-center w-[100%] h-[100%] text-[white]'><div>Произошла ошибка при загрузке данных</div></div>;
    }

    if (isLoading) {
        return <div className='absolute flex items-center justify-center w-[100%] h-[100%] text-[white]'><Loader /></div>
    }

    const [data, posters, videoF, budgetF, simis] = results.map((result) => result.data);

  return (
    <div>
        <Header />

            <main>
                <section className='flex flex-col justify-center items-center overflow-hidden'>
                    <div className="back-main absolute top-[80px] rounded-rad z-[-1] bg-cover bg-no-repeat bg-center h-[800px] max-w-[1200px] w-[100%]
                    after:content-[''] after:absolute after:left-0 after:bottom-[-12px] after:w-[100%] after:h-[720px]"
                    style={{
                        backgroundImage: `url(${posters && posters.items && posters?.items?.[0]?.imageUrl})`
                    }}></div>
                        <div className="container">
                            <div className="mt-[400px]">

                                <div className='px-filmPx flex flex-col justify-center items-center'>
                                    <h1 className='titleFg text-[#EBEEF5] text-titleF font-semibold leading-[70px] mr-[auto]'>{data?.nameRu}</h1>

                                    <div className="flex-film mt-mtF flex items-start gap-filmPage">
                                        <img src={data?.posterUrl} alt="film" className='max-w-imgW w-[100%] h-imgH object-cover object-center rounded-[24px]' />

                                        <div className="flex flex-col gap-[24px]">
                                            
                                            <div className="flex flex-col gap-[20px]">
                                                <h2 className='text-[#EBEEF5] text-[24px] font-bold leading-[32px]'>Description</h2>
                                                <p className='text-[#8E95A9] text-[20px] font-normal leading-[32px] max-w-[480px] w-[100%]'>{data?.description}</p>
                                            </div>

                                            <div>
                                             <Rating filmR={data} />
                                            </div>

                                            <div className="grid-main grid">

                                                <div className="grid-type grid-card flex flex-col gap-[8px]">
                                                    <h3 className='text-[#767E94] text-[16px] font-normal leading-[24px]'>Type</h3>
                                                    <span className='text-[#C3C8D4] text-[20px] font-normal leading-[32px]'>{data?.type}</span>
                                                </div>

                                                <div className="grid-type grid-card flex flex-col gap-[8px]">
                                                    <h3 className='text-[#767E94] text-[16px] font-normal leading-[24px]'>Release Date</h3>
                                                    <span className='text-[#C3C8D4] text-[20px] font-normal leading-[32px]'>{data?.year}</span>
                                                </div>

                                                <div className="grid-type grid-card flex flex-col gap-[8px]">
                                                    <h3 className='text-[#767E94] text-[16px] font-normal leading-[24px]'>Run time</h3>
                                                    <span className='text-[#C3C8D4] text-[20px] font-normal leading-[32px]'>{data?.filmLength} min</span>
                                                </div>

                                                <div className="grid-type grid-card flex flex-col gap-[8px]">
                                                    <h3 className='text-[#767E94] text-[16px] font-normal leading-[24px]'>Genres</h3>
                                                    <span className='text-[#C3C8D4] text-[20px] font-normal leading-[32px] max-w-[340px] w-[100%]'>{data?.genres?.map(gen => ` ${gen.genre}`)}</span>
                                                </div>

                                                <div className="grid-type grid-card flex flex-col gap-[8px]">
                                                    <h3 className='text-[#767E94] text-[16px] font-normal leading-[24px]'>Сountry</h3>
                                                    <span className='text-[#C3C8D4] text-[20px] font-normal leading-[32px] max-w-[340px] w-[100%]'>{data?.countries?.map(con => ` ${con.country}`)}</span>
                                                </div>

                                                <div className="grid-type grid-card flex flex-col gap-[8px]">
                                                    <h3 className='text-[#767E94] text-[16px] font-normal leading-[24px]'>Budget</h3>
                                                    <span className='text-[#C3C8D4] text-[20px] font-normal leading-[32px] max-w-[340px] w-[100%]'> {budgetF?.items[0]?.amount ? Intl.NumberFormat().format(budgetF?.items[0]?.amount) : 'N/A'} $</span>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>

                                        <div className="my-[100px] max-w-[1000px] w-[100%] mx-[auto] h-video rounded-[12px]">
                                            {videoF?.items && videoF?.items?.[0] && (
                                                <ReactPlayer controls={true} url={videoF?.items?.[0].url} width='100%' height='100%' />
                                            )}
                                        </div>

                                        <div className="simi pb-[100px]">
                                            <h2 className='text-titleSlide text-[#EBEEF5] font-semibold leading-[30px]'>Похожие фильмы на "{data?.nameRu}"</h2>


                                            {simis?.items?.length ? <Swiper
                                                className='mt-[70px]'
                                                spaceBetween={20}
                                                slidesPerView={slidesPerView}
                                                >

                                                {simis?.items?.map(filmSim => (
                                                    <SwiperSlide key={filmSim.filmId}>
                                                        <FilmSim  filmSim={filmSim} />
                                                    </SwiperSlide>
                                                ))}
                                  
                                            </Swiper> : <div className='relative left-[25px]'><Loader /></div>}
                                           
                                        </div>

                            </div>
                        </div>
                </section>
            </main>

    </div>
  )
}
