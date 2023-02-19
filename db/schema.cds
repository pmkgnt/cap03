namespace mySchema;

type Segment  : String(20) enum {
    Premium    = 'PRE';
    Extended   = 'EXT';
    Regular    = 'REG';
    New        = 'NEW';
};

type Category : String(20) enum {
    Vegetables = 'VEG';
    Fruits     = 'FRU';
    Dairy      = 'DAI';
    Meat       = 'NON';
    SeaFood    = 'SEA';
}

entity Customers {
    key id       : Integer;
        name     : String(30);
        gender   : String(10) enum {
            male   = 'M';
            famale = 'F';
        };
        location : String(30);
        segment  : Segment;
        Orders   : Composition of many Orders
                       on Orders.customer = $self;
}

entity Products {
    key id       : String(30);
        name     : String(60);
        category : Category;
        price    : Decimal(6, 2);
}

entity Orders {
    key id          : Integer;
        description : String(60);
        date        : Date;
        customer    : Association to one Customers;
        Items       : Composition of many Items
                          on Items.order = $self;
}

entity Items {
    key id       : Integer;
    key order    : Association to one Orders;
        product  : Association to one Products;
        quantity : Integer;
}
