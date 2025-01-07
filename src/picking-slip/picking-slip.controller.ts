import { Controller, Get, Query } from '@nestjs/common';
import { PickingSlipService } from './picking-slip.service';

@Controller('picking-slips')
export class PickingSlipController {
    constructor(private readonly pickingSlipService: PickingSlipService) {}

    @Get()
    async getPickingSlips(
        @Query('status') status?: string,
        @Query('page') page?: number,
        @Query('pageSize') pageSize?: number,
    ): Promise<any[]> {
        const offset = (page - 1) * pageSize;
        return this.pickingSlipService.findAll(status, offset, pageSize);
    }
}
