import cds from '@sap/cds'
console.log(cds.env.folders)
/*
export default cds.service.impl(async function () {
    const { Customers, Orders, OrderItems } = this.entities;
    this.before('READ', Customers, async req => {
        console.log('\nHandler: before - Event: READ - Entity: Customers');
        await cds.run(req.query)
            .then(data => {
                data.forEach(customer => {
                    if (customer.segment === 'NEW') {
                        throw 'New customer'
                    }
                    console.log(customer)
                });
            })
            .catch(err => { console.log(err) });
    }).on('READ', Customers, async req => {
        console.log('\nHandler: on - Event: READ - Entity: Customers')
        const customers = await cds.run(req.query)
            .then(data => {
                data.forEach(customer => {
                    customer.name = 'On ' + customer.name;
                }); return data;
            });
        console.log(customers)
        return customers;
    }).after('READ', Customers, customers => {
        console.log('\nHandler: after - Event: READ - Entity: Customers');
        console.log(customers);
        customers.forEach(customer => {
            customer.name = customer.name + ' After';
        })
        return customers;
    });
});
*/
/*
// using service extension 
class myService extends cds.ApplicationService {

    async init() {

        const { Customers, Orders, OrderItems } = this.entities;

        this.before('READ', 'Customers', async req => {
            console.log('\nHandler: before - Event: READ - Entity: Customers')
            console.log(req.entity)
            const customers = await cds.read(req.entity)
            console.log(customers)
            return customers;
        });

        this.on('READ', 'Customers', async req => {
            console.log('\nHandler: on - Event: READ - Entity: Customers')
            console.log(req.entity);
            const customers = await cds.read(req.entity);
            console.log(customers)
            return customers;
        });

        this.after('READ', 'Customers', customers => {
            console.log('\nHandler: after - Event: READ - Entity: Customers')
            console.log(customers)
            return customers;
        });

        this.on('READ', 'Orders', async req => {
            console.log('\nHandler: on - Event: READ - Entity: Orders')
            console.log(req.target.name);
            const orders = await cds.read(req.target);
            return orders;
        });

        this.on('READ', 'OrderItems', async req => {
            console.log('\nHandler: on - Event: READ - Entity: OrderItems')
            console.log(req.target.name);
            const orderitems = await cds.read(req.target);
            return orderitems;
        });

        await super.init();

    }
}

export default myService;
*/
/*
// Using cds.service.impl
export default cds.service.impl((srv) => {

    const { Customers, Orders, Items } = srv.entities;
    //console.log(Customers, Orders, Items);

    srv.on('READ', 'Customers', async req => {
        console.log(req.target.name)
        const customers = await SELECT.from(req.target);
        //customers.forEach(customer => {
        //customer.name = customer.name + ' Test';
        //});
        //console.log(customers);
        return customers;
    });

    srv.on('READ', 'Orders', async req => {
        console.log(req.target.name)
        const orders = await SELECT.from(req.target);
        return orders;
    });

    srv.on('READ', 'OrderItems', async req => {
        console.log(req.target.name)
        const orderitems = await SELECT.from(req.target);
        return orderitems;
    });

});
*/ 