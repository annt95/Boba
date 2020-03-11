namespace Admin.Northwind {
    export enum Gender {
        Male = 1,
        Female = 2
    }
    Serenity.Decorators.registerEnumType(Gender, 'Admin.Northwind.Gender', 'Admin.Northwind.Entities.Gender');
}
