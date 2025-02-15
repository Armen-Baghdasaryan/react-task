import CarsPage from "./pages/CarsPage/CarsPage"
import { carsData } from "./services/cars.service"

function App() {
  const cars = carsData

  return (
    <div className="container">
      <CarsPage arr={cars} />
    </div>
  )
}

export default App
