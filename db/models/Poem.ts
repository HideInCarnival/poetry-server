import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Poet } from './Poet'


@Table({
  tableName: 'poem'
})
export class Poem extends Model<Poem> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;


  @Column
  title: string;

  @Column
  author: string;

  @Column(DataType.TEXT)
  article: string;

  @Column
  created: Date

  @ForeignKey(() => Poet)
  @Column
  author_id: number;

  @BelongsTo(() => Poet)
  poet: Poet
}