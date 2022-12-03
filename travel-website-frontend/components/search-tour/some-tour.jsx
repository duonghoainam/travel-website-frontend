
import React from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react'
import NewsCard from '@components/news-card/news-card';
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);
export default function SomeTour() {
   return (      
        <div className="some-tour__wrapper">
            <Swiper 
            spaceBetween={20}
            className="carousel" 
            slidesPerView={1}
            pagination={{
              clickable: true
            }}
            breakpoints={{
                768: {
                    slidesPerView: 1
                },
                1024: {
                    slidesPerView: 2
                },
                1440: {
                    slidesPerView: 3
                },
                1920: {
                    slidesPerView: 4
                }
            }}>
            <SwiperSlide className="card">
                <NewsCard
                    url="https://www.dealstreetasia.com/stories/cj-international-asia-kk-fund-jv-296381"
                    banner={
                        'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                    }
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="https://www.dealstreetasia.com/stories/cj-international-asia-kk-fund-jv-296381"
                    banner={
                        'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                    }
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="https://www.dealstreetasia.com/stories/cj-international-asia-kk-fund-jv-296381"
                    banner={
                        'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                    }
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="https://www.dealstreetasia.com/stories/cj-international-asia-kk-fund-jv-296381"
                    banner={
                        'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                    }
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="https://www.dealstreetasia.com/stories/cj-international-asia-kk-fund-jv-296381"
                    banner={
                        'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                    }
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="https://www.dealstreetasia.com/stories/cj-international-asia-kk-fund-jv-296381"
                    banner={
                        'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                    }
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="https://www.dealstreetasia.com/stories/cj-international-asia-kk-fund-jv-296381"
                    banner={
                        'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                    }
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="https://www.dealstreetasia.com/stories/cj-international-asia-kk-fund-jv-296381"
                    banner={
                        'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                    }
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="https://www.dealstreetasia.com/stories/cj-international-asia-kk-fund-jv-296381"
                    banner={
                        'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                    }
                />
            </SwiperSlide>
            <SwiperSlide className="card">
                <NewsCard
                    url="https://www.dealstreetasia.com/stories/cj-international-asia-kk-fund-jv-296381"
                    banner={
                        'https://www.saigontourist.net/uploads/destination/NuocNgoai/Nam-Phi/Boulders-Beach_548075986.jpg'
                    }
                />
            </SwiperSlide>
            </Swiper>
            </div>
   );
}
