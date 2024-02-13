const express = require('express');
const swaggerUi = require('swagger-ui-express');
const sql = require('mssql');
const app = express();
const PORT = process.env.PORT || 3000;
const swaggerJsdoc = require('swagger-jsdoc');
//error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

// MSSQL database configuration, replace with your actual database configuration
const dbConfig = {
    user: 'K',
    password: 'karthik',
    server: 'karthik\\SQLEXPRESS',
    database: 'ECommerceDB',
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

// Connect to MSSQL database
sql.connect(dbConfig)
    .then(() => {
        console.log('Connected to MSSQL database');
    })
    .catch((err) => {
        console.error('Error connecting to MSSQL database:', err);
    });

// Swagger setup
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MSSQL ECART API',
            version: '1.0.0',
            description: 'API for performing CRUD operations on MSSQL calendar database',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Update the port if your server is running on a different port
                description: 'Local development server',
            },
        ],
    },
    apis: ['eCartSwager.js'], // Update with the actual filename or path where your route definitions are located
};


const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI at /api-docs endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());


app.get('/', (req, res) => {
    res.send({ title: "Welcome to SQL SWAGGER API" });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





//code
//role code
// GET all role
app.get('/Role', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Role`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching role:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a role by ID
app.get('/Role/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM Role WHERE id = ${ID}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        console.error('Error fetching role by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new role
app.post('/Role', async (req, res) => {
    const { RoleName, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body;
    try {
        const result = await sql.query`INSERT INTO Role (RoleName, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy) 
                                        VALUES (${RoleName}, ${isactive}, ${isdeleted}, ${createdAt}, ${updatedAt}, ${createdBy}, ${deletedBy})`;
        res.json({ message: 'Role created successfully'});
    } catch (error) {
        console.error('Error creating role:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT/UPDATE an existing role
app.put('/Role/:id', async (req, res) => {
    const Id = req.params.id;
    const { RoleName, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body; 
    try {
        const result = await sql.query`UPDATE Role SET RoleName=${RoleName}, isactive=${isactive}, isdeleted=${isdeleted}, 
                                        createdAt=${createdAt}, updatedAt=${updatedAt}, createdBy=${createdBy}, deletedBy=${deletedBy} WHERE id= ${Id}`; 
        res.json({ message: 'Role updated successfully' });
    } catch (error) {
        console.error('Error updating role:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a role
app.delete('/Role/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`DELETE FROM Role WHERE id = ${ID}`;
        res.json({ message: 'Role deleted successfully' });
    } catch (error) {
        console.error('Error deleting role:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// GET all users
app.get('/User', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM [User]`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a user by ID
app.get('/User/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM [User] WHERE id = ${ID}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new user
app.post('/User', async (req, res) => {
    const { UserName, Email, PhoneNumber, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body;
    try {
        const result = await sql.query`INSERT INTO [User] (UserName, Email, PhoneNumber, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy) 
                                        VALUES (${UserName}, ${Email}, ${PhoneNumber}, ${isactive}, ${isdeleted}, ${createdAt}, ${updatedAt}, ${createdBy}, ${deletedBy})`;
        res.json({ message: 'User created successfully'});
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT/UPDATE an existing user
app.put('/User/:id', async (req, res) => {
    const Id = req.params.id;
    const { UserName, Email, PhoneNumber, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body; 
    try {
        const result = await sql.query`UPDATE [User] SET UserName=${UserName}, Email=${Email}, PhoneNumber=${PhoneNumber}, isactive=${isactive}, isdeleted=${isdeleted}, 
                                        createdAt=${createdAt}, updatedAt=${updatedAt}, createdBy=${createdBy}, deletedBy=${deletedBy} WHERE id= ${Id}`; 
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a user
app.delete('/User/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`DELETE FROM [User] WHERE id = ${ID}`;
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//user map

// GET all user mappings
app.get('/UserMap', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM UserMap`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching user mappings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a user mapping by ID
app.get('/UserMap/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM UserMap WHERE id = ${ID}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'User mapping not found' });
        }
    } catch (error) {
        console.error('Error fetching user mapping by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new user mapping
app.post('/UserMap', async (req, res) => {
    const { UserID, RoleID, createdAt, updatedAt, createdBy, deletedBy } = req.body;
    try {
        const result = await sql.query`INSERT INTO UserMap (UserID, RoleID, createdAt, updatedAt, createdBy, deletedBy) 
                                        VALUES (${UserID}, ${RoleID}, ${createdAt}, ${updatedAt}, ${createdBy}, ${deletedBy})`;
        res.json({ message: 'User mapping created successfully'});
    } catch (error) {
        console.error('Error creating user mapping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT/UPDATE an existing user mapping
app.put('/UserMap/:id', async (req, res) => {
    const Id = req.params.id;
    const { UserID, RoleID, createdAt, updatedAt, createdBy, deletedBy } = req.body; 
    try {
        const result = await sql.query`UPDATE UserMap SET UserID=${UserID}, RoleID=${RoleID}, createdAt=${createdAt}, updatedAt=${updatedAt}, 
                                        createdBy=${createdBy}, deletedBy=${deletedBy} WHERE id= ${Id}`; 
        res.json({ message: 'User mapping updated successfully' });
    } catch (error) {
        console.error('Error updating user mapping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a user mapping
app.delete('/UserMap/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`DELETE FROM UserMap WHERE id = ${ID}`;
        res.json({ message: 'User mapping deleted successfully' });
    } catch (error) {
        console.error('Error deleting user mapping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// CRUD operations for UserCredential table
// GET all user credentials
app.get('/UserCredential', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM UserCredential`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching user credentials:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a user credential by ID
app.get('/UserCredential/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM UserCredential WHERE id = ${ID}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'User credential not found' });
        }
    } catch (error) {
        console.error('Error fetching user credential by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new user credential
app.post('/UserCredential', async (req, res) => {
    const { UserID, Password, createdAt, updatedAt, createdBy, deletedBy } = req.body;
    try {
        const result = await sql.query`INSERT INTO UserCredential (UserID, Password, createdAt, updatedAt, createdBy, deletedBy) 
                                        VALUES (${UserID}, ${Password}, ${createdAt}, ${updatedAt}, ${createdBy}, ${deletedBy})`;
        res.json({ message: 'User credential created successfully'});
    } catch (error) {
        console.error('Error creating user credential:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT/UPDATE an existing user credential
app.put('/UserCredential/:id', async (req, res) => {
    const Id = req.params.id;
    const { UserID, Password, createdAt, updatedAt, createdBy, deletedBy } = req.body; 
    try {
        const result = await sql.query`UPDATE UserCredential SET UserID=${UserID}, Password=${Password}, createdAt=${createdAt}, updatedAt=${updatedAt}, 
                                        createdBy=${createdBy}, deletedBy=${deletedBy} WHERE id= ${Id}`; 
        res.json({ message: 'User credential updated successfully' });
    } catch (error) {
        console.error('Error updating user credential:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a user credential
app.delete('/UserCredential/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`DELETE FROM UserCredential WHERE id = ${ID}`;
        res.json({ message: 'User credential deleted successfully' });
    } catch (error) {
        console.error('Error deleting user credential:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//category
// CRUD operations for Category table
// GET all categories
app.get('/Category', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Category`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a category by ID
app.get('/Category/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM Category WHERE id = ${ID}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        console.error('Error fetching category by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new category
app.post('/Category', async (req, res) => {
    const { CategoryName, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body;
    try {
        const result = await sql.query`INSERT INTO Category (CategoryName, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy) 
                                        VALUES (${CategoryName}, ${isactive}, ${isdeleted}, ${createdAt}, ${updatedAt}, ${createdBy}, ${deletedBy})`;
        res.json({ message: 'Category created successfully'});
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT/UPDATE an existing category
app.put('/Category/:id', async (req, res) => {
    const Id = req.params.id;
    const { CategoryName, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body; 
    try {
        const result = await sql.query`UPDATE Category SET CategoryName=${CategoryName}, isactive=${isactive}, isdeleted=${isdeleted}, 
                                        createdAt=${createdAt}, updatedAt=${updatedAt}, createdBy=${createdBy}, deletedBy=${deletedBy} WHERE id= ${Id}`; 
        res.json({ message: 'Category updated successfully' });
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a category
app.delete('/Category/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`DELETE FROM Category WHERE id = ${ID}`;
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// CRUD operations for Product table
// GET all products
app.get('/Product', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Product`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a product by ID
app.get('/Product/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM Product WHERE id = ${ID}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new product
app.post('/Product', async (req, res) => {
    const { ProductName, CategoryID, Price, Description, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body;
    try {
        const result = await sql.query`INSERT INTO Product (ProductName, CategoryID, Price, Description, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy) 
                                        VALUES (${ProductName}, ${CategoryID}, ${Price}, ${Description}, ${isactive}, ${isdeleted}, ${createdAt}, ${updatedAt}, ${createdBy}, ${deletedBy})`;
        res.json({ message: 'Product created successfully'});
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT/UPDATE an existing product
app.put('/Product/:id', async (req, res) => {
    const Id = req.params.id;
    const { ProductName, CategoryID, Price, Description, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body; 
    try {
        const result = await sql.query`UPDATE Product SET ProductName=${ProductName}, CategoryID=${CategoryID}, Price=${Price}, Description=${Description}, 
                                        isactive=${isactive}, isdeleted=${isdeleted}, createdAt=${createdAt}, updatedAt=${updatedAt}, createdBy=${createdBy}, deletedBy=${deletedBy} WHERE id= ${Id}`; 
        res.json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a product
app.delete('/Product/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`DELETE FROM Product WHERE id = ${ID}`;
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// CRUD operations for Product table
// GET all products
app.get('/Product', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Product`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a product by ID
app.get('/Product/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM Product WHERE id = ${ID}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new product
app.post('/Product', async (req, res) => {
    const { ProductName, CategoryID, Price, Description, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body;
    try {
        const result = await sql.query`INSERT INTO Product (ProductName, CategoryID, Price, Description, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy) 
                                        VALUES (${ProductName}, ${CategoryID}, ${Price}, ${Description}, ${isactive}, ${isdeleted}, ${createdAt}, ${updatedAt}, ${createdBy}, ${deletedBy})`;
        res.json({ message: 'Product created successfully'});
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT/UPDATE an existing product
app.put('/Product/:id', async (req, res) => {
    const Id = req.params.id;
    const { ProductName, CategoryID, Price, Description, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body; 
    try {
        const result = await sql.query`UPDATE Product SET ProductName=${ProductName}, CategoryID=${CategoryID}, Price=${Price}, Description=${Description}, 
                                        isactive=${isactive}, isdeleted=${isdeleted}, createdAt=${createdAt}, updatedAt=${updatedAt}, createdBy=${createdBy}, deletedBy=${deletedBy} WHERE id= ${Id}`; 
        res.json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a product
app.delete('/Product/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`DELETE FROM Product WHERE id = ${ID}`;
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// CRUD operations for Order table
// GET all orders
app.get('/Order', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM [Order]`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET an order by ID
app.get('/Order/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM [Order] WHERE id = ${ID}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        console.error('Error fetching order by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new order
app.post('/Order', async (req, res) => {
    const { UserID, TotalAmount, Status, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body;
    try {
        const result = await sql.query`INSERT INTO [Order] (UserID, TotalAmount, Status, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy) 
                                        VALUES (${UserID}, ${TotalAmount}, ${Status}, ${isactive}, ${isdeleted}, ${createdAt}, ${updatedAt}, ${createdBy}, ${deletedBy})`;
        res.json({ message: 'Order created successfully'});
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT/UPDATE an existing order
app.put('/Order/:id', async (req, res) => {
    const Id = req.params.id;
    const { UserID, TotalAmount, Status, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body; 
    try {
        const result = await sql.query`UPDATE [Order] SET UserID=${UserID}, TotalAmount=${TotalAmount}, Status=${Status}, isactive=${isactive}, 
                                        isdeleted=${isdeleted}, createdAt=${createdAt}, updatedAt=${updatedAt}, createdBy=${createdBy}, deletedBy=${deletedBy} WHERE id= ${Id}`; 
        res.json({ message: 'Order updated successfully' });
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE an order
app.delete('/Order/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`DELETE FROM [Order] WHERE id = ${ID}`;
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error('Error deleting order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// CRUD operations for Cart table
// GET all items in the cart
app.get('/Cart', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Cart`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching items in the cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET an item in the cart by ID
app.get('/Cart/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM Cart WHERE id = ${ID}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'Item in the cart not found' });
        }
    } catch (error) {
        console.error('Error fetching item in the cart by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new item in the cart
app.post('/Cart', async (req, res) => {
    const { UserID, ProductID, Quantity, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body;
    try {
        const result = await sql.query`INSERT INTO Cart (UserID, ProductID, Quantity, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy) 
                                        VALUES (${UserID}, ${ProductID}, ${Quantity}, ${isactive}, ${isdeleted}, ${createdAt}, ${updatedAt}, ${createdBy}, ${deletedBy})`;
        res.json({ message: 'Item added to cart successfully'});
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT/UPDATE an existing item in the cart
app.put('/Cart/:id', async (req, res) => {
    const Id = req.params.id;
    const { UserID, ProductID, Quantity, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body; 
    try {
        const result = await sql.query`UPDATE Cart SET UserID=${UserID}, ProductID=${ProductID}, Quantity=${Quantity}, isactive=${isactive}, 
                                        isdeleted=${isdeleted}, createdAt=${createdAt}, updatedAt=${updatedAt}, createdBy=${createdBy}, deletedBy=${deletedBy} WHERE id= ${Id}`; 
        res.json({ message: 'Item in cart updated successfully' });
    } catch (error) {
        console.error('Error updating item in cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE an item from the cart
app.delete('/Cart/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`DELETE FROM Cart WHERE id = ${ID}`;
        res.json({ message: 'Item removed from cart successfully' });
    } catch (error) {
        console.error('Error deleting item from cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// CRUD operations for Payment table
// GET all payments
app.get('/Payment', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Payment`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching payments:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a payment by ID
app.get('/Payment/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM Payment WHERE id = ${ID}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'Payment not found' });
        }
    } catch (error) {
        console.error('Error fetching payment by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new payment
app.post('/Payment', async (req, res) => {
    const { OrderID, Amount, PaymentMethod, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body;
    try {
        const result = await sql.query`INSERT INTO Payment (OrderID, Amount, PaymentMethod, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy) 
                                        VALUES (${OrderID}, ${Amount}, ${PaymentMethod}, ${isactive}, ${isdeleted}, ${createdAt}, ${updatedAt}, ${createdBy}, ${deletedBy})`;
        res.json({ message: 'Payment created successfully'});
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT/UPDATE an existing payment
app.put('/Payment/:id', async (req, res) => {
    const Id = req.params.id;
    const { OrderID, Amount, PaymentMethod, isactive, isdeleted, createdAt, updatedAt, createdBy, deletedBy } = req.body; 
    try {
        const result = await sql.query`UPDATE Payment SET OrderID=${OrderID}, Amount=${Amount}, PaymentMethod=${PaymentMethod}, isactive=${isactive}, 
                                        isdeleted=${isdeleted}, createdAt=${createdAt}, updatedAt=${updatedAt}, createdBy=${createdBy}, deletedBy=${deletedBy} WHERE id= ${Id}`; 
        res.json({ message: 'Payment updated successfully' });
    } catch (error) {
        console.error('Error updating payment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a payment
app.delete('/Payment/:id', async (req, res) => {
    const ID = req.params.id;
    try {
        const result = await sql.query`DELETE FROM Payment WHERE id = ${ID}`;
        res.json({ message: 'Payment deleted successfully' });
    } catch (error) {
        console.error('Error deleting payment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// GET all brands
app.get('/Brands', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Brands`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching brands:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a brand by ID
app.get('/Brands/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM Brands WHERE Id = ${id}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'Brand not found' });
        }
    } catch (error) {
        console.error('Error fetching brand by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new brand
app.post('/Brands', async (req, res) => {
    const { ImageUrl, AltText, Name } = req.body;
    try {
        const result = await sql.query`INSERT INTO Brands (ImageUrl, AltText, Name) 
                                        VALUES (${ImageUrl}, ${AltText}, ${Name})`;
        res.json({ message: 'Brand created successfully'});
    } catch (error) {
        console.error('Error creating brand:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT/UPDATE an existing brand
app.put('/Brands/:id', async (req, res) => {
    const id = req.params.id;
    const { ImageUrl, AltText, Name } = req.body; 
    try {
        const result = await sql.query`UPDATE Brands SET ImageUrl=${ImageUrl}, AltText=${AltText}, Name=${Name} WHERE Id= ${id}`; 
        res.json({ message: 'Brand updated successfully' });
    } catch (error) {
        console.error('Error updating brand:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a brand
app.delete('/Brands/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await sql.query`DELETE FROM Brands WHERE Id = ${id}`;
        res.json({ message: 'Brand deleted successfully' });
    } catch (error) {
        console.error('Error deleting brand:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET all categories
app.get('/categories', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM categories`;
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a category by ID
app.get('/categories/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await sql.query`SELECT * FROM categories WHERE id = ${id}`;
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        console.error('Error fetching category by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new category
app.post('/categories', async (req, res) => {
    const { image_url, alt_text, title } = req.body;
    try {
        const result = await sql.query`INSERT INTO categories (image_url, alt_text, title) 
                                        VALUES (${image_url}, ${alt_text}, ${title})`;
        res.json({ message: 'Category created successfully'});
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT/UPDATE an existing category
app.put('/categories/:id', async (req, res) => {
    const id = req.params.id;
    const { image_url, alt_text, title } = req.body; 
    try {
        const result = await sql.query`UPDATE categories SET image_url=${image_url}, alt_text=${alt_text}, title=${title} WHERE id= ${id}`; 
        res.json({ message: 'Category updated successfully' });
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a category
app.delete('/categories/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await sql.query`DELETE FROM categories WHERE id = ${id}`;
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


const jwt = require('jsonwebtoken');
// JWT secret key
const jwtKey = "e-comm";

// Login endpoint

// Login endpoint
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ error: "Email or password missing" });
        }
        
        // Connect to MSSQL database
        const pool = await sql.connect(dbConfig);

        // Query to find user by email and password
        const result = await pool.request()
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, password)
            .query('SELECT * FROM LOGIN WHERE Email = @email AND Password = @password');

        // Assuming the result contains the user if found
        const user = result.recordset[0];
        

        if (!user) {
            return res.status(401).json({ error: "No User found" });
        }

        // Generate JWT token
        const token = jwt.sign({ user }, jwtKey, { expiresIn: "48h" });

        res.json({ user,auth:token });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});



// Signup endpoint
/// Create a new user (POST)
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ error: "Email or password missing" });
        }
        
        // Connect to MSSQL database
        const pool = await sql.connect(dbConfig);

        // Insert the new user into the database
        const result = await pool.request()
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, password)
            .query('INSERT INTO LOGIN (Email, Password) VALUES (@email, @password)');
        
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});
