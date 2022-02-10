import { Person } from 'src/person/entities/person';
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';

@Entity()
export class Property {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public tenant: string;

    @Column()
    public rented: boolean;

    @Column()
    public rentAmount: number;

    @Column()
    public location: string;

    @Column()
    public photo: string;

    public constructor(name: string, rentAmount: number, location: string, photo: string, rented: boolean, tenant: string){
        this.location = location
        this.name = name
        this.rentAmount = rentAmount
        this.photo = photo
        this.rented = rented
        this.tenant = tenant
    }

    @ManyToOne(type => Person, person => person.properties)
    person: Person
}
