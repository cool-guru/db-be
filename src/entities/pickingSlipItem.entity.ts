import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { PickingSlip } from './pickingSlip.entity';

@Entity('picking_slip_items')
export class PickingSlipItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    picking_slip_id: number;

    @Column()
    is_pre_order: boolean;

    @ManyToOne(() => PickingSlip, (slip) => slip.items)
    @JoinColumn({ name: 'picking_slip_id' })
    pickingSlip: PickingSlip;

}