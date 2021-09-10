import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReadingsService } from './reading.service';
import { Reading } from './reading.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reading])],
  providers: [ReadingsService],
})
export class ReadingModule {}
