import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' }) // Defina o tipo da coluna aqui
    name: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 }) // Exemplo para um preço decimal
    price: number;

    // Outras propriedades e métodos da entidade...
}
export default Product