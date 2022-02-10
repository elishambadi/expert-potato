import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from "typeorm";
import { Property } from '../../property/entities/property'

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private name: string;

    @Column()
    private gender: string;

    @Column()
    private race: string;

    @Column()
    private occupation: string;

    public constructor(name: string, gender: string, race: string, occupation: string){
        this.name = name;
        this.gender = gender;
        this.race = race;
        this.occupation = occupation;
    }

    // Relationships
    @OneToMany(type => Property, property => property.tenant)
    properties: Property[]


}
