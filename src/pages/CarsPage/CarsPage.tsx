import { useState } from "react";
import CarItem from "../../components/CarItem/CarItem";
import SliderModal from "../../components/SliderModal/SliderModal";
import { ICar } from "../../interfaces/cars.interface";
import './cars-page.scss'

interface PageProps {
    arr: ICar[] | null;
}

const CarsPage = ({ arr }: PageProps) => {
    const [currentImages, setCurrentImages] = useState<string[]>([])
    const [open, setOpen] = useState(false)

    const onImgClick = (images: string[]) => {
        setCurrentImages(images)
        modalOpen()
    }

    const modalOpen = () => {
        setOpen(true)
    }

    const modalClose = () => {
        setOpen(false)
    }

    return (
        <>
            <div className="cars_page_wrapper">
                <div className="car_items">
                    {arr?.map((car: ICar, index: number) => (
                        <CarItem key={index} car={car} onImgClick={onImgClick} />
                    ))}
                </div>

            </div>
            <SliderModal images={currentImages} open={open} close={modalClose} />
        </>
    );
};

export default CarsPage;
