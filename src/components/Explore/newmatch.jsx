import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
const DefaultSlider = () => {
  return (
    <>
       
        <div className="col-lg-4 col-sm-6">
          <div className="panel">
            <div className="panel-header">
              <h5>Default Swiper</h5>
            </div>
            <div className="panel-body">
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="default-swiper"
              >
                <SwiperSlide className="" style={{height:"200px"}}>
                  <img src="https://www.w3schools.com/w3images/avatar2.png" alt="image" style={{width:"100%",height:"200px"}}/>
                </SwiperSlide>
              </Swiper>
            </div>
            
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="panel">
            <div className="panel-header">
              <h5>Default Swiper</h5>
            </div>
            <div className="panel-body">
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="default-swiper"
              >
                <SwiperSlide className="" style={{height:"200px"}}>
                  <img src="https://www.w3schools.com/w3images/avatar2.png" alt="image" style={{width:"100%",height:"200px"}}/>
                </SwiperSlide>
              </Swiper>
            </div>
            
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="panel">
            <div className="panel-header">
              <h5>Default Swiper</h5>
            </div>
            <div className="panel-body">
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="default-swiper"
              >
                <SwiperSlide className="" style={{height:"200px"}}>
                  <img src="https://www.w3schools.com/w3images/avatar2.png" alt="image" style={{width:"100%",height:"200px"}}/>
                </SwiperSlide>
              </Swiper>
            </div>
            
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="panel">
            <div className="panel-header">
              <h5>Default Swiper</h5>
            </div>
            <div className="panel-body">
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="default-swiper"
              >
                <SwiperSlide className="" style={{height:"200px"}}>
                  <img src="https://www.w3schools.com/w3images/avatar2.png" alt="image" style={{width:"100%",height:"200px"}}/>
                </SwiperSlide>
              </Swiper>
            </div>
            
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="panel">
            <div className="panel-header">
              <h5>Default Swiper</h5>
            </div>
            <div className="panel-body">
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="default-swiper"
              >
                <SwiperSlide className="" style={{height:"200px"}}>
                  <img src="https://www.w3schools.com/w3images/avatar2.png" alt="image" style={{width:"100%",height:"200px"}}/>
                </SwiperSlide>
              </Swiper>
            </div>
            
          </div>
        </div>
    </>
  );
};

export default DefaultSlider;
