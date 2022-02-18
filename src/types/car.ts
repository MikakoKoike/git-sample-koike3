export class Car {
  constructor(private _speed3: number) {}

  public get speed3(): number {
    return this._speed3;
  }

  public set speed3(speed3: number) {
    this._speed3 = speed3;
  }
}
