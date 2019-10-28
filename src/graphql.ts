
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class NewUser {
    userId: number;
    username?: string;
    password?: string;
}

export abstract class IMutation {
    abstract createUser(user?: NewUser): User | Promise<User>;
}

export abstract class IQuery {
    abstract getUserById(id: number): User | Promise<User>;

    abstract getAllUsers(): User[] | Promise<User[]>;
}

export class User {
    userId: number;
    username?: string;
    password?: string;
}
