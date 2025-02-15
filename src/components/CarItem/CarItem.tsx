import { ICar } from '../../interfaces/cars.interface'
import './car-item.scss'

interface PageProps {
    car: ICar
    onImgClick: (images: string[]) => void
}

function CarItem({ car, onImgClick }: PageProps) {
    return (
        <div className="car_item">
            <img alt='img' src={car.images[0]} onClick={() => onImgClick(car.images)} />
            <h4 className='car_price'>{car.price}</h4>
            {car.isUrgently &&
                <div onClick={() => console.log('click')} className='car_urgently'>
                    Urgently
                </div>
            }
            <p className='car_model'>{car.model}, {car.year} y.</p>
            <p className='car_description'>{car.description}</p>
        </div>
    )
}

export default CarItem
