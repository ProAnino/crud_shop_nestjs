import { BadRequest } from "src/shared/errors";

export class User {
    id: number
    firstName?: string
    lastName?: string
    email: string
    isAdmin: boolean

    constructor(id: number,
        firstName: string,
        lastName: string,
        email: string,
        isAdmin: boolean) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isAdmin = isAdmin;
    }

    public static create(id: number,
        firstName: string,
        lastName: string,
        email: string,
        isAdmin: boolean) {
        if (id == null) {
            throw new BadRequest('No id, no user');
        }
        if (email == null) {
            throw new BadRequest('No email, no user');
        }
        return new User(id, firstName, lastName, email, isAdmin);
    }
}