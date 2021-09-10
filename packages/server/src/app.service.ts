import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCount(): { count: number } {
    return { count: 100 };
  }
}
