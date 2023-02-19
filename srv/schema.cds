using {mySchema} from '../db/schema';

service myService @(path: '/myService') {

    entity Customers as projection on mySchema.Customers;
    entity Orders    as projection on mySchema.Orders;
    entity Items     as projection on mySchema.Items;

};
