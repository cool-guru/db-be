import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { PickingSlip } from './pickingSlip.entity';

@Entity('picking_slip_dates')
export class PickingSlipDate {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => PickingSlip)
    @JoinColumn({ name: 'picking_slip_id' })
    pickingSlip: PickingSlip;

    @Column({ type: 'timestamp', nullable: true })
    printed_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    inspected_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    shipped_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    held_at: Date;
}