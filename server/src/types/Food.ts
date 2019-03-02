export class Food {
  constructor(
    public id: string = '',
    public name: string = '',
    public description: string = '',
    public price: number = -1,
    public place: any = {},
    public menus: any = []
  ) {}
}
