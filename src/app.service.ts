import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ShopLocation } from './shop-location.entity';

@Injectable()
export class AppService {

  constructor(
    @Inject('SHOPLOCATION_REPOSITORY')
    private readonly shopLocationRepository: Repository<ShopLocation>,
  ) { }

  async getLocations(params: any): Promise<object[]> {
    const shopLocations = await this.shopLocationRepository
      .query('select name, (6371 * ACOS(COS(RADIANS(' + params.lat +
        ')) * COS(RADIANS(`lattitude`)) * COS(RADIANS(' + params.long +
        ') - RADIANS(`longitude`)) + SIN(RADIANS(' + params.lat +
        ')) * SIN(RADIANS(`lattitude`)))) AS distance from shop_location;');
    return shopLocations;
  }
}
