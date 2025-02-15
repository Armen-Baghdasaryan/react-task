import { ICar } from "../interfaces/cars.interface";

import nissan_1 from "/src/assets/images/nissan-1.webp"
import nissan_2 from "/src/assets/images/nissan-2.webp"
import nissan_3 from "/src/assets/images/nissan-3.webp"
import nissan_4 from "/src/assets/images/nissan-4.webp"
import nissan_5 from "/src/assets/images/nissan-5.webp"
import nissan_6 from "/src/assets/images/nissan-6.webp"
import camry_1 from "/src/assets/images/camry-1.webp"
import camry_2 from "/src/assets/images/camry-2.webp"
import camry_3 from "/src/assets/images/camry-3.webp"

export const carsData: ICar[] = [
    {
        model: 'Nissan Tiida',
        year: '2008',
        price: '$ 5600',
        description: 'About Nissan Description',
        isUrgently: true,
        images: [nissan_1, nissan_2, nissan_3, nissan_4, nissan_5, nissan_6]
    },
    {
        model: 'Toyota Camry',
        year: '2023',
        price: '$ 28000',
        description: 'About Toyota Description. More Description about ...',
        isUrgently: false,
        images: [camry_1, camry_2, camry_3]
    },
];