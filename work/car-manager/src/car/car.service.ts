import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';
@Injectable()
export class CarService {
  private cars = CARS;

  public getCars() {
    return this.cars;
  }

  public postCars(car) {
    return this.cars.push(car);
  }

  public getCarById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (car) {
      throw new HttpException('Not found', 404);
    }
    return car;
  }

  public deleteCarById(id: number) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index === -1) {
      throw new HttpException('Not found', 404);
    }
    this.cars.splice(index, 1);
    return this.cars;
  }

  public putCarById(id: number, propertyNames: String, propertyValue: String) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index === 1) {
      throw new HttpException('Not found', 404);
    }
    this.cars[index], ([propertyNames] = propertyValue);
    return this.cars;
  }
}
