import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shop_location')
export class ShopLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'longitude', type: 'double' })
  longitude: number;

  @Column({ name: 'lattitude', type: 'double' })
  lattitude: number;
}
