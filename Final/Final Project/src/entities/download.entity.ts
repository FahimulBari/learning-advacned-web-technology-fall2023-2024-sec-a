import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Template } from './template.entity';

@Entity('downloads')
export class Download {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, user => user.downloads)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Template, template => template.downloads)
  @JoinColumn({ name: 'template_id' })
  template: Template;
}
