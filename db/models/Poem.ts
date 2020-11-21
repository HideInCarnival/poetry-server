import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript'

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
}