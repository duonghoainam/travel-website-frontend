import AnimatedAppearText from '@components/animated-appear-text/animated-appear-text';
import Hexagon from '@components/common/hexagon';
import IconHexagonSmall from '@components/icons/ic-hexagon-small';
import MainLayout from '@components/layouts/main-layout';
import NewsCard from '@components/news-card/news-card';
import TourCard from '@components/tour-card/tour-card';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import SearchTour from '@components/search-tour/search-tour';

const Tours = () => {
   useEffect(() => {
      const text = new AnimatedAppearText([['Latest&nbsp']]);
   }, []);
   const [news, setNews] = useState([]);
   return (
      <>
         <Head>
            <title>YOURTOUR</title>
            <meta name="description" content="YOURTOUR" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main style={{ height: 'auto' }}>
            <div className="news-banner__container">
               <div className="about-us-banner__hexagon-container">
                  <div className="news-banner__hexagon__inner">
                     <div
                        className="news-banner__hexagon-group hexagon-group"
                        data-aos="zoom-in"
                     >
                        <Hexagon className="hex1" />
                        <Hexagon className="hex2" size="s" />
                        <Hexagon className="hex3" size="m" />
                     </div>
                     <div
                        className="news-banner__hexagon-group2 hexagon-group2"
                        data-aos="zoom-in"
                     >
                        <Hexagon className="hex1" size="s" />
                        <Hexagon className="hex2" size="m" />
                     </div>
                  </div>
               </div>
               <div className="container-full">
                  <div className="news-banner__inner">
                     <div className="news-banner__title" data-aos="fade-up">
                        <h2 data-aos-delay="500">Tour</h2>
                        <div className="icon">
                           <IconHexagonSmall width={28} height={32} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="news">
                  <div className="container-full">
                  <div className="news__inner">
                     <div className="news__title">
                        <h3>
                           <div className="wordContainer">
                              <div className="word">
                                 <p>Let&apos;s choose</p>
                              </div>
                           </div>
                        </h3>
                     </div>

                     <SearchTour />

                     <div className="tour-grid">
                        {/* <NewsCard
                           url="/tour/1"
                           banner={
                              'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                           }
                        />
                        <NewsCard
                           url="/tour/1"
                           banner={
                              'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                           }
                        />
                        <NewsCard
                           url="/tour/1"
                           banner={
                              'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                           }
                        />
                        <NewsCard
                           url="/tour/1"
                           banner={
                              'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                           }
                        /> */}
                         <TourCard
                           url="/tour/1"
                           banner={
                              'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                           }
                        />
                         <TourCard
                           url="/tour/1"
                           banner={
                              'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                           }
                        />
                         <TourCard
                           url="/tour/1"
                           banner={
                              'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                           }
                        />
                         <TourCard
                           url="/tour/1"
                           banner={
                              'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                           }
                        />
                        {news.length > 0 &&
                           news.map((item, idx) => (
                              <NewsCard key={idx} data={item.attributes} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
            <div className="load-more-post">
               <span data-magnetic>
                  <div className="load-more-post_button">LOAD MORE POST</div>
               </span>
            </div>
         </main>
      </>
   );
};
Tours.Layout = MainLayout;

export default Tours;
