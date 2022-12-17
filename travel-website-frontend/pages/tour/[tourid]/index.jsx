import { TourDetailsCard } from '@components/admin/news/news-details';
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
const TourDetail = () => {
   const router = useRouter();
   const { tourid } = router.query;

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
                                 <p>Lalak Forest</p>
                              </div>
                           </div>
                        </h3>
                     </div>
                    </div>
                </div>
            </div>
            <div className="tour-info">
               <div className='tour-row'>
                  <div className="blog-detail-text">THỜI GIAN:<b> 6 ngày 5 đêm</b></div>
                  <div className="blog-detail-text">PHƯƠNG TIỆN:<b> Hàng Không Vietnam Airlines</b></div>
               </div>
               <div className='tour-row'>
                  <div className="blog-detail-text">ĐIỂM XUẤT PHÁT:<b> TP. Hồ Chí Minh</b></div>
                  <div className="blog-detail-text">ĐIỂM ĐẾN:<b> Hà Nội - Hạ Long - Ninh Bình - Sapa</b></div>
               </div>
               <div className='tour-bill-table'>
                  <div className='row tour-table-header'>
                     <div className='tour-table-text'><b>KHỞI HÀNH</b></div>
                     <div className='tour-table-text'><b>MÃ TOUR</b></div>
                     <div className='tour-table-text'><b>GIÁ NGƯỜI LỚN</b></div>
                     <div className='tour-table-text'><b>GIÁ TRẺ EM</b></div>
                     <div className='tour-table-text'></div>
                  </div>
                  <br></br>

                  <hr styled={{borderTop: "3px dashed #bbb"}}></hr>
                  <br></br>
                  <div className='row tour-list-item'>
                     <h2 className='tour-table-text'>02/01/2023</h2>
                     <h2 className='tour-table-text'>STN084-2023-00151</h2>
                     <h2 className='tour-table-text'>10.979.000</h2>
                     <h2 className='tour-table-text'>7.000.000</h2>
                     <a href='/booking' className='tour-table-button'>ĐẶT NGAY</a>
                  </div>
                  <br></br>
                  <div className='row tour-list-item'>
                     <h2 className='tour-table-text'>02/01/2023</h2>
                     <h2 className='tour-table-text'>STN084-2023-00151</h2>
                     <h2 className='tour-table-text'>10.979.000</h2>
                     <h2 className='tour-table-text'>7.000.000</h2>
                     <a href='/booking' className='tour-table-button'>ĐẶT NGAY</a>
                  </div>
                  <br></br>
                  <div className='row tour-list-item'>
                     <h2 className='tour-table-text'>02/01/2023</h2>
                     <h2 className='tour-table-text'>STN084-2023-00151</h2>
                     <h2 className='tour-table-text'>10.979.000</h2>
                     <h2 className='tour-table-text'>7.000.000</h2>
                     <a href='/booking' className='tour-table-button'>ĐẶT NGAY</a>
                  </div>
               </div>
               <div className='blog-detail-text'>
                  <b>Tour này có gì hay</b>,<br/>
                  - Khởi hành (thứ 2): 2, 9/1; 6, 13, 20, 27/2;  6, 13, 20, 27/3/2023 <br/>
                  - Chiêm ngưỡng động Thiên Cung, các hòn Đỉnh Hương - Trống Mái (Gà Chọi)- Chó Đá.<br/>
                  - Tham quan khu du lịch Tràng An - nơi có cảnh quan ngoạn mục với hệ thống sông, suối chảy tràn trong các thung lũng, các hang xuyên thủy động và các dãy núi đá vôi trùng điệp<br/>
                  - Tham quan cột mốc biên giới và cửa khẩu quốc tế Lào Cai.
               </div>
            </div>

            <iframe
               className='blog-detail-video'
               width={780}
               height={600}
               style={{margin: "20px auto", display: 'block'}}
               src={`https://www.youtube.com/embed/diO662cf_Go`}
               // src={`https://www.youtube.com/v/${item.data.youtube_link}`}
               title={`https://www.youtube.com/embed/bjt1jZfTCBc`}
            ></iframe>

            <p className="blog-detail-text">
            <b>NGÀY 01: TP. HCM - HÀ NỘI - NINH BÌNH (Ăn trưa, chiều)</b>
            Buổi sáng, quý khách tập trung tại Cổng D1 - Ga đi trong nước - SB.Tân Sơn Nhất. HDV Lữ hành Saigontourist đón quý khách và hỗ trợ làm thủ tục. <b>Khởi hành ra Hà Nội (chuyến bay VN240 lúc 7h hoặc 8h30)</b>. Đáp xuống sân bay Nội Bài, xe đưa đoàn theo đường cao tốc đến Ninh Bình, viếng chùa Bái Đính, tham quan <b>Khu du lịch Tràng An</b> - có cảnh quan ngoạn mục với hệ thống sông, suối chảy tràn trong các thung lũng, các hang xuyên thủy động, các dãy núi đá vôi trùng điệp. KDL nằm trong quần thể danh thắng Tràng An đã được UNESCO công nhận di sản hỗn hợp đầu tiên của Việt Nam và khu vực ĐNÁ (đạt cả hai tiêu chí về văn hóa và thiên nhiên). Buổi tối, đoàn tự do khám phá <b>phố cổ Hoa Lư</b>, ngắm <b>tháp Chùa Bạc</b> lung linh ánh đèn soi bóng bên <b>hồ Kỳ Lân</b>. Nghỉ đêm tại Ninh Bình.
            </p>

            <img className='blog-detail-image' rel="" src="https://saigontourist.net/uploads/destination/TrongNuoc/Ninhbinh/Trang-An-Ninh-Binh-Vietnam_333452378.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>
            
            <p className="blog-detail-text">
            <b>NGÀY 02 : NINH BÌNH - HẠ LONG (Ăn sáng, trưa, chiều)</b>
            Buổi sáng, đoàn khởi hành đi Hải Phòng, tiếp tục theo đường cao tốc đến Hạ Long. Quý khách lên thuyền du ngoạn vịnh Hạ Long - một trong 7 kỳ quan thiên nhiên mới của thế giới, chiêm ngưỡng động Thiên Cung, các hòn Đỉnh Hương - Trống Mái (Gà Chọi)- Chó Đá.
            - Lựa chọn (tự túc chi phí di chuyển & tham quan): Tham quan Quần thể Du lịch - Giải trí Sun World Hạ Long Park, gồm 2 khu công viên vui chơi ven <b>biển Bãi Cháy và  trên núi Ba Đèo</b> - được kết nối với nhau bởi hệ thống cáp treo vượt biển Nữ Hoàng đạt 2 kỷ lục thế giới (cabin có sức chứa lớn nhất thế giới và cáp treo có trụ cao nhất thế giới so với mặt đất). Trải nghiệm trò chơi mạo hiểm,  Vòng quay Mặt Trời - một trong những vòng quay cao nhất thế giới,...{tourid}
            </p>
            
            <img className='blog-detail-image' rel="" src="https://saigontourist.net/uploads/destination/TrongNuoc/Halong/Ha%20Long%20bay_561711448.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>
            
            <p className="blog-detail-text">
            <b>NGÀY 03 : HẠ LONG - HÀ NỘI (Ăn sáng, trưa, chiều)</b>
            Buổi sáng, xe đưa dạo quanh tuyến đường mới ven biển Hạ Long - từ <b>bãi tắm nhân tạo Sunworld</b> đền khu vực Hòn Gai, ngắm nhìn khu đô thị với những công trình hiện đại: Cung quy hoạch - hội chợ - triển lãm, tham quan Bảo tàng Quảng Ninh, ... Khởi hành về Hà Nội, tham quan Hoàng Thành Thăng Long, ngắm cột cờ Hà Nội. Buổi tối, đoàn tự do dạo quanh hồ Hoàn Kiếm, tham quan “36 phố phường”- khu phố cổ với những ngành nghề đặc trưng và truyền thống của cư dân Thủ đô. Nghỉ đêm tại Hà Nội.
            </p>

            <img className='blog-detail-image' rel="" src="https://saigontourist.net/uploads/destination/TrongNuoc/Hanoi/HaNoi_HoangThanhThangLong_514162882.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>

            <p className="blog-detail-text">
            <b>NGÀY 04 : HÀ NỘI - SAPA (Ăn sáng, trưa, chiều)</b>
            Buổi sáng, đoàn đến viếng <b>Lăng Bác</b>. Khởi hành đi Sapa, đoàn tự do tham quan <b>nhà thờ đá, dạo chợ Sapa</b>... Nghỉ đêm tại Sapa.  
            </p>

            <img className='blog-detail-image' rel="" src="https://saigontourist.net/uploads/destination/TrongNuoc/mienbac/sapa/Sapa-City_619336676.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>

            <p className="blog-detail-text">
            <b>NGÀY 05: SAPA - FANSIPAN - LÀO CAI (Ăn sáng, trưa, chiều)</b>
            Buổi sáng, đoàn đến Nhà ga cáp treo <b>Fansipan</b>, quý khách tự do tham quan khu vực vườn hoa, chợ phiên...
            - Lựa chọn (tự túc chi phí tham quan) : Trải nghiệm hệ thống cáp treo 3 dây hiện đại với cảm giác đi giữa biển mây. Viếng khu tâm linh Fanpsian, vượt gần 600 bậc thang, chinh phục “Nóc nhà Đông Dương” - đỉnh Fansipan 3,143m.
            Buổi chiều, đoàn tham quan Khu <b>du lịch Cổng Trời</b>. Xe đón đoàn về Lào Cai. Nghỉ đêm tại Lào Cai. 
            </p>

            <img className='blog-detail-image' rel="" src="https://saigontourist.net/uploads/destination/TrongNuoc/mienbac/Lao-cai/Vietnam-International-borders-in-Lao-Cai_654848203.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>

            <p className="blog-detail-text">
            <b>NGÀY 06: LÀO CAI - ĐỀN HÙNG - NỘI BÀI - TP.HCM (Ăn sáng, trưa)</b>
            Đoàn tham quan cột mốc biên giới và cửa khẩu quốc tế Lào Cai. Khởi hành về Phú Thọ, đoàn viếng Khu di tích <b>Đền Hùng - thăm đền Hạ, đền Trung, đền Thượng, lăng Vua Hùng</b>. Xe đưa đoàn ra SB Nội Bài, về TP. Hồ Chí Minh (chuyến bay VN219 lúc 19h). Kết thúc chương trình .
            </p>

            <img className='blog-detail-image' rel="" src="https://saigontourist.net/uploads/destination/TrongNuoc/mienbac/Phu-tho/Hung-King-Temple-Phu-Tho-Province_617054405.jpg" title="Công viên quốc gia Ulu Temburong" alt="Công viên quốc gia Ulu Temburong"/>

            <p className="blog-detail-text">
            <b>Ghi chú:</b><br/>
            -  Tuân thủ 5K. Áp dụng quy định TIÊM CHỦNG & KẾT QUẢ TEST COVID  theo quy định hiện hành của từng địa phương.<br/>
            - Trường hợp trong đoàn có phát sinh ca nghi nhiễm hoặc nhiễm covid 19, quý khách có trách nhiệm phối hợp với Saigontourist và chính quyền địa phương để thực hiện các biện pháp cách ly hoặc điều trị theo quy định.<br/>
            - Các chi phí phát sinh trong quá trình cách ly điều trị, sẽ không nằm trong chi phí tour, quý khách tự túc chi phí phát sinh<br/>
            - Điểm tham quan có thể sắp xếp lại cho phù hợp mà vẫn bảo đảm đầy đủ nội dung của từng chương trình.<br/>
            - Giờ bay có thể bị thay đổi bởi hãng hàng không
            </p>

            
            <ScrollToTop></ScrollToTop>
            <h2 style={{margin:20}}>more blog</h2>
            <SomeTour/>
    </>
   );
};
TourDetail.Layout = MainLayout;
export default TourDetail;
