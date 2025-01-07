import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PickingSlip } from '../entities/pickingSlip.entity';

@Injectable()
export class PickingSlipService {
    constructor(
        @InjectRepository(PickingSlip)
        private pickingSlipRepository: Repository<PickingSlip>,
    ) {}

    async findAll(status?: string, offset?: number, pageSize?: number): Promise<any[]> {
        const query = this.pickingSlipRepository.createQueryBuilder('picking_slip')
            .leftJoinAndSelect('picking_slip.items', 'items')
            .leftJoinAndSelect('picking_slip.dates', 'psd')
            .orderBy('picking_slip.created_at', 'DESC');

        if (status) {
            console.log('status', status);
            switch (status) {
                case "not printed":
                    query.andWhere('psd.printed_at IS NULL')
                        .andWhere('psd.inspected_at IS NULL')
                        .andWhere('psd.shipped_at IS NULL')
                        .andWhere('psd.held_at IS NULL')
                        .take(3);
                    break;
                case 'printed':
                    query.andWhere('psd.printed_at IS NOT NULL')
                        .andWhere('psd.inspected_at IS NULL')
                        .andWhere('psd.shipped_at IS NULL')
                        .andWhere('psd.held_at IS NULL')
                        .take(3);
                    break;
                case 'held':
                    query.andWhere('psd.held_at IS NOT NULL');
                    break;
                default:
                    throw new Error('Invalid status');
            }
        }

        if (offset !== undefined && pageSize !== undefined) {
            query.skip(offset).take(pageSize);
        }

        const slips = await query.getMany();

        return slips.map((slip) => ({
        order_id: slip.order_id,
        picking_slip_id: slip.id,
        picking_slip_status: this.getPickingSlipStatus(slip.dates),
        has_pre_order_item: slip.items.some(item => item.is_pre_order),
        }));
    }

    private getPickingSlipStatus(dates: any): string {
        if (dates === null) {
            return 'unknown';
        }
        if (!dates.printed_at && !dates.inspected_at && !dates.shipped_at && !dates.held_at) {
            return 'not printed';
        }
        if (dates.printed_at && !dates.inspected_at && !dates.shipped_at && !dates.held_at) {
            return 'printed';
        }
        if (dates.held_at) {
            return 'held';
        }
        return 'unknown';
    }
}