import { useEffect, useState } from "react";
import './slider-modal.scss';

import closeIcon from "/src/assets/icons/arrow-close.svg";
import arrowLeft from "/src/assets/icons/arrow-left.svg";

interface PageProps {
    images: string[];
    open: boolean;
    close: () => void;
}

const SliderModal = ({ images, open, close }: PageProps) => {
    const [src, setSrc] = useState<string | null>(null);
    const [imgIndex, setImgIndex] = useState<number>(0);
    const [isFading, setIsFading] = useState<boolean>(false);

    useEffect(() => {
        setSrc(images[0] || null);
        setImgIndex(0)
    }, [images]);

    useEffect(() => {
        setIsFading(true)

        setTimeout(() => {
            setSrc(images[imgIndex])
            setIsFading(false);
        }, 200)
    }, [imgIndex])

    const onSlideImgClick = (index: number) => {
        setImgIndex(index);
    };

    const handleSlide = (action: string) => {
        action === 'next' ? setImgIndex((prev: number) => prev + 1) : setImgIndex((prev: number) => prev - 1)
    }

    return (
        <div className={`modal_wrapper ${open ? "modal_open" : ""}`}>
            <div className="modal_content">
                <img className="modal_close" width={32} height={32} alt="icon" src={closeIcon} onClick={close} />
                <div className="modal_slider">
                    <p className="slider_count">{imgIndex + 1}/{images.length}</p>
                    <div className="slider_main">
                        <img width={32} height={32} src={arrowLeft} alt="arrow" className={`slider_arrow ${imgIndex === 0 ? 'slider_arrow-disabled' : ''}`} onClick={() => handleSlide('prev')} />
                        {src && (
                            <div>
                                <img className={`slider_main_img ${isFading ? "fade-out" : "fade-in"}`} src={src} alt="main-img" />
                            </div>
                        )}
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