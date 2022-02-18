export class Car {
  constructor(private _speed2: number) {}

  public get speed2(): number {
    return this._speed2;
  }

  public set speed2(speed2: number) {
    this._speed2 = speed2;
  }
}
