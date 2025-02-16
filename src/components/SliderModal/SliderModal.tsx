import { useState } from "react";
import './slider-modal.scss';

import closeIcon from "/src/assets/icons/arrow-close.svg";
import arrowLeft from "/src/assets/icons/arrow-left.svg";

interface PageProps {
    images: string[];
    open: boolean;
    close: () => void;
}

const SliderModal = ({ images, open, close }: PageProps) => {
    const [imgIndex, setImgIndex] = useState<number>(0);
    const [isFading, setIsFading] = useState<boolean>(false);
    const [startTouch, setStartTouch] = useState<number>(0);
    const [isSwiping, setIsSwiping] = useState<boolean>(false);

    const changeImages = (index: number) => {
        setIsFading(true)

        setTimeout(() => {
            setImgIndex(index)
            setIsFading(false);
        }, 200)
    }

    const onSlideImgClick = (index: number) => {
        changeImages(index)
    };

    const handleSlide = (action: string) => {
        action === 'next' ? changeImages(imgIndex + 1) : changeImages(imgIndex - 1)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        const touchStart = e.touches[0].clientX;
        setStartTouch(touchStart);
        setIsSwiping(false);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const touchMove = e.touches[0].clientX;
        if (startTouch) {
            const swipeDistance = touchMove - startTouch;
            if (Math.abs(swipeDistance) > 50 && !isSwiping) {
                setIsSwiping(true);
                if (swipeDistance > 0 && imgIndex > 0) {
                    changeImages(imgIndex - 1)
                } else if (swipeDistance < 0 && imgIndex < images.length - 1) {
                    changeImages(imgIndex + 1)
                }
            }
        }
    };

    const handleTouchEnd = () => {
        setIsSwiping(false);
    };

    return (
        <div className={`modal_wrapper ${open ? "modal_open" : ""}`}>
            <div className="modal_content">
                <img className="modal_close" width={32} height={32} alt="icon" src={closeIcon} onClick={() => {
                    close()
                    setImgIndex(0)
                }} />
                <div className="modal_slider">
                    <p className="slider_count">{imgIndex + 1}/{images.length}</p>
                    <div className="slider_main">
                        <img width={32} height={32} src={arrowLeft} alt="arrow" className={`slider_arrow ${imgIndex === 0 ? 'slider_arrow-disabled' : ''}`} onClick={() => handleSlide('prev')} />
                        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className="main_img_container">
                            <img className={`slider_main_img ${isFading ? "fade-out" : "fade-in"}`} src={images[imgIndex || 0]} alt="main-img" />
                        </div>
                        <img width={32} height={32} src={arrowLeft} alt="arrow" className={`slider_arrow slider_arrow-next ${imgIndex === images.length - 1 ? 'slider_arrow-disabled' : ''}`} onClick={() => handleSlide('next')} />
                    </div>
                    <div className="slider_images">
                        <div className="images_inner">
                            {images?.map((path, idx) => (
                                <div key={idx} className="slider_img">
                                    <img src={path} alt="slide-img" className={imgIndex === idx ? "active" : ""} onClick={() => onSlideImgClick(idx)} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderModal;