import { NewsDetailsCard } from '@components/admin/news/news-details';
import { DashboardLayout } from '@components/layouts/dashboard-layout';
import MainLayout from '@components/layouts/main-layout';
import { Box, Container } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import ScrollToTop from '@components/scroll-to-top/scroll-to-top';
import Hexagon from '@components/common/hexagon';
import HexagonImage from '@components/hexagon-image/hexagon-image';
import SomeTour from '@components/search-tour/some-tour';
import IconHexagonSmall from '@components/icons/ic-hexagon-small';
const NewsDetail = () => {
   const router = useRouter();
   const { newId } = router.query;

   return (
    <>
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
                        <h2 data-aos-delay="500">13/06/2022</h2>
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
                                 <p>Brunei</p>
                              </div>
                           </div>
                        </h3>
                     </div>
                    </div>
                </div>
            </div>
            <p className="blog-detail-text">
               We are passionate about travel and sharing the world`&#39;`s wonders on the leisure travel side, and providing corporate travelers hi-touch services to facilitate their business travel needs.
               The Service Professional customer oriented consultation providing hassle free travel. Email capabilities for convenience and prompt booking and information. Creative but persistent approach to search for the most appropriate travel arrangements and identifying the best possible value. Our travel consultants are friendly, professional, and experienced in accommodating both the seasoned traveler and those new to the world of travel. With our “ Know How “, and as a sales agent for almost all major international airlines in Jordan, we do not only offer competitive prices to our customer, but we are also able to pass on very competitive prices and a maximum opportunity for choices and flexibility. The Value With our “ Know How “, and as a sales agent for almost all major international airlines in Jordan, we do not only offer competitive prices to our customer, but we are also able to pass on very competitive prices and a maximum opportunity for choices and flexibility.
            </p>

            <iframe
               className='blog-detail-video'
               width={780}
               height={600}
               style={{margin: "20px auto", display: 'block'}}
               src={`https://www.youtube.com/embed/bjt1jZfTCBc`}
               // src={`https://www.youtube.com/v/${item.data.youtube_link}`}
               title={`https://www.youtube.com/embed/bjt1jZfTCBc`}
            ></iframe>

            <p className="blog-detail-text">
                We are passionate about travel and sharing the world`&#39;`s wonders on the leisure travel side, and providing corporate travelers hi-touch services to facilitate their business travel needs.
                The Service Professional customer oriented consultation providing hassle free travel. Email capabilities for convenience and prompt booking and information. Creative but persistent approach to search for the most appropriate travel arrangements and identifying the best possible value. Our travel consultants are friendly, professional, and experienced in accommodating both the seasoned traveler and those new to the world of travel. With our “ Know How “, and as a sales agent for almost all major international airlines in Jordan, we do not only offer competitive prices to our customer, but we are also able to pass on very competitive prices and a maximum opportunity for choices and flexibility. The Value With our “ Know How “, and as a sales agent for almost all major international airlines in Jordan, we do not only offer competitive prices to our customer, but we are also able to pass on very competitive prices and a maximum opportunity for choices and flexibility.
                {newId}
            </p>
            
            <img className='blog-detail-image' rel="" src="https://wiki-travel.com.vn/uploads/picture/camnhi-221501111520-Cong-vien-Quoc-gia-Ulu-Temburong.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>
            <ScrollToTop></ScrollToTop>
            <h2 style={{margin:20}}>more blog</h2>
            <SomeTour sx={{marginBottom: 20}}/>
    </>
   );
};
NewsDetail.Layout = MainLayout;
export default NewsDetail;
