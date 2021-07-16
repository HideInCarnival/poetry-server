import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany } from 'sequelize-typescript'
import { Poem } from './Poem'


@Table({
  tableName: 'poet'
})
export class Poet extends Model<Poet> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column(DataType.TEXT)
  introduction: string;

  @Column
  nationality: string;

  @HasMany(() => Poem )
  poems: Poem[];
}