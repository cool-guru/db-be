import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { PickingSlipItem } from './pickingSlipItem.entity';
import { PickingSlipDate } from './pickingSlipDate.entity';

@Entity('picking_slips')
export class PickingSlip {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order_id: number;

    @Column({ type: 'timestamp' })
    created_at: Date;

    @OneToMany(() => PickingSlipItem, (item) => item.pickingSlip)
    items: PickingSlipItem[];

    @OneToOne(() => PickingSlipDate, (date) => date.pickingSlip)
    dates: PickingSlipDate;
}