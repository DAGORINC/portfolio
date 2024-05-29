import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { styled } from '@mui/material';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const NavLeftArrowContainer = styled('div')({
    left: 0,
    zIndex: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    userSelect: 'none'
})

const NavArrow = styled('div')({
    height: 30,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    backgroundColor: 'grey',
    opacity: 0.5,
    borderRadius: 16,
    transition: 'all 0.3s',
    margin: "0 12px",
    ':hover': {
        cursor: "pointer",
        backgroundColor: '#333',
    },
    userSelect: 'none'
})


interface ProjectSwiperProps {
    images: string[],
    id: string,
    pcSlides?: boolean,
}

const ProjectSwiper: FC<ProjectSwiperProps> = ({
    images,
    id,
    pcSlides,
}) => {


    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                navigation={{
                    nextEl: ".custom_next" + id,
                    prevEl: ".custom_prev" + id
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className={`mySwiper ${pcSlides && 'pcSwiper'}`}
                style={{
                    position: 'relative',
                }}
            >
                {
                    images.map((singleImage) => (
                        <SwiperSlide
                            key={singleImage}
                            className={`${pcSlides && 'pcSwiperSlide'}`}
                        >
                            <img
                                src={singleImage}
                                alt={"Slajd"}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper >
            <NavLeftArrowContainer>
                <NavArrow className={"custom_prev" + id}>
                    <IoIosArrowBack />
                </NavArrow>

                <NavArrow className={"custom_next" + id}>
                    <IoIosArrowForward />
                </NavArrow>
            </NavLeftArrowContainer>
        </div>
    )
}

export default ProjectSwiper;