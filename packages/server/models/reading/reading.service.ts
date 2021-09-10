import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reading } from './reading.entity';

@Injectable()
export class ReadingsService {
  constructor(
    @InjectRepository(Reading)
    private readingsRepository: Repository<Reading>,
  ) {}

  async count(): Promise<{ count: number }> {
    const count = await this.readingsRepository.count();
    return { count: count };
  }
}
