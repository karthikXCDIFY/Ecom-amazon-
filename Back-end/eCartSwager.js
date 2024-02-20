//get all code
/**
 * @swagger
 * /Role:
 *   get:
 *     tags:
 *     - Role
 *     summary: Get all roles
 *     description: Retrieve a list of all roles from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Role:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

//get by id code
/**
 * @swagger
 * /Role/{id}:
 *   get:
 *     tags:
 *     - Role
 *     summary: Get a specific role by ID
 *     description: Retrieve a role from the database based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the role to retrieve
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Role:
 *               type: object
 *       404:
 *         description: Role not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

//post code
/**
 * @swagger
 * /Role:
 *   post:
 *     tags:
 *     - Role
 *     summary: Create a new role
 *     description: Create a new role with the provided name, and auto-generate ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               RoleName:
 *                 type: string
 *                 description: The name of the new role.
 *               isactive:
 *                 type: boolean
 *                 description: The status of the new role.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the role is deleted.
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: The creation date of the role.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the role.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the role.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the role.
 *     responses:
 *       201:
 *         description: Role created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Role created successfully.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Internal Server Error.
 */

//put code
/**
 * @swagger
 * /Role/{id}:
 *   put:
 *     tags:
 *     - Role
 *     summary: Update an existing role
 *     description: Endpoint to update an existing role by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the role to be updated
 *         required: true
 *         type: integer
 *         format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               RoleName:
 *                 type: string
 *                 description: The updated name of the role.
 *               isactive:
 *                 type: boolean
 *                 description: The updated status of the role.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the role is deleted.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the role.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the role.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the role.
 *     responses:
 *       '200':
 *         description: Role updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Role updated successfully
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: RoleName is required
 *       '404':
 *         description: Role not found
 *         content:
 *           application/json:
 *             example:
 *               error: Role not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Failed to update role
 */

//delete code
/**
 * @swagger
 * /Role/{id}:
 *   delete:
 *     tags:
 *     - Role
 *     summary: Delete a role
 *     description: Delete a role based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Role ID
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Role deleted successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */


// GET all users
/**
 * @swagger
 * /User:
 *   get:
 *     tags:
 *     - User
 *     summary: Get all users
 *     description: Retrieve a list of all users from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             User:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// GET user by ID
/**
 * @swagger
 * /User/{id}:
 *   get:
 *     tags:
 *     - User
 *     summary: Get a specific user by ID
 *     description: Retrieve a user from the database based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user to retrieve
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             User:
 *               type: object
 *       404:
 *         description: User not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// POST user
/**
 * @swagger
 * /User:
 *   post:
 *     tags:
 *     - User
 *     summary: Create a new user
 *     description: Create a new user with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserName:
 *                 type: string
 *                 description: The username of the new user.
 *               Email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the new user.
 *               PhoneNumber:
 *                 type: string
 *                 description: The phone number of the new user.
 *               isactive:
 *                 type: boolean
 *                 description: The status of the new user.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the user is deleted.
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: The creation date of the user.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the user.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the user.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the user.
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: User created successfully.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Internal Server Error.
 */

// PUT user
/**
 * @swagger
 * /User/{id}:
 *   put:
 *     tags:
 *     - User
 *     summary: Update an existing user
 *     description: Update an existing user by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user to be updated
 *         required: true
 *         type: integer
 *         format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserName:
 *                 type: string
 *                 description: The updated username of the user.
 *               Email:
 *                 type: string
 *                 format: email
 *                 description: The updated email address of the user.
 *               PhoneNumber:
 *                 type: string
 *                 description: The updated phone number of the user.
 *               isactive:
 *                 type: boolean
 *                 description: The updated status of the user.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the user is deleted.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the user.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the user.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the user.
 *     responses:
 *       '200':
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User updated successfully
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: UserName is required
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               error: User not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Failed to update user
 */

// DELETE user
/**
 * @swagger
 * /User/{id}:
 *   delete:
 *     tags:
 *     - User
 *     summary: Delete a user
 *     description: Delete a user based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User ID
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */


// GET all user mappings
/**
 * @swagger
 * /UserMap:
 *   get:
 *     tags:
 *     - UserMap
 *     summary: Get all user mappings
 *     description: Retrieve a list of all user mappings from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             UserMap:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// GET user mapping by ID
/**
 * @swagger
 * /UserMap/{id}:
 *   get:
 *     tags:
 *     - UserMap
 *     summary: Get a specific user mapping by ID
 *     description: Retrieve a user mapping from the database based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user mapping to retrieve
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             UserMap:
 *               type: object
 *       404:
 *         description: User mapping not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// POST user mapping
/**
 * @swagger
 * /UserMap:
 *   post:
 *     tags:
 *     - UserMap
 *     summary: Create a new user mapping
 *     description: Create a new user mapping with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID:
 *                 type: integer
 *                 description: The ID of the user.
 *               RoleID:
 *                 type: integer
 *                 description: The ID of the role.
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: The creation date of the user mapping.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the user mapping.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the user mapping.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the user mapping.
 *     responses:
 *       201:
 *         description: User mapping created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: User mapping created successfully.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Internal Server Error.
 */

// PUT user mapping
/**
 * @swagger
 * /UserMap/{id}:
 *   put:
 *     tags:
 *     - UserMap
 *     summary: Update an existing user mapping
 *     description: Update an existing user mapping by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user mapping to be updated
 *         required: true
 *         type: integer
 *         format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID:
 *                 type: integer
 *                 description: The updated ID of the user.
 *               RoleID:
 *                 type: integer
 *                 description: The updated ID of the role.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the user mapping.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the user mapping.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the user mapping.
 *     responses:
 *       '200':
 *         description: User mapping updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User mapping updated successfully
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: UserID and RoleID are required
 *       '404':
 *         description: User mapping not found
 *         content:
 *           application/json:
 *             example:
 *               error: User mapping not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Failed to update user mapping
 */

// DELETE user mapping
/**
 * @swagger
 * /UserMap/{id}:
 *   delete:
 *     tags:
 *     - UserMap
 *     summary: Delete a user mapping
 *     description: Delete a user mapping based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User mapping ID
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: User mapping deleted successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// GET all user credentials
/**
 * @swagger
 * /UserCredential:
 *   get:
 *     tags:
 *     - UserCredential
 *     summary: Get all user credentials
 *     description: Retrieve a list of all user credentials from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             UserCredential:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// GET user credential by ID
/**
 * @swagger
 * /UserCredential/{id}:
 *   get:
 *     tags:
 *     - UserCredential
 *     summary: Get a specific user credential by ID
 *     description: Retrieve a user credential from the database based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user credential to retrieve
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             UserCredential:
 *               type: object
 *       404:
 *         description: User credential not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// POST user credential
/**
 * @swagger
 * /UserCredential:
 *   post:
 *     tags:
 *     - UserCredential
 *     summary: Create a new user credential
 *     description: Create a new user credential with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID:
 *                 type: integer
 *                 description: The ID of the user.
 *               Password:
 *                 type: string
 *                 description: The password of the user credential.
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: The creation date of the user credential.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the user credential.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the user credential.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the user credential.
 *     responses:
 *       201:
 *         description: User credential created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: User credential created successfully.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Internal Server Error.
 */

// PUT user credential
/**
 * @swagger
 * /UserCredential/{id}:
 *   put:
 *     tags:
 *     - UserCredential
 *     summary: Update an existing user credential
 *     description: Update an existing user credential by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user credential to be updated
 *         required: true
 *         type: integer
 *         format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID:
 *                 type: integer
 *                 description: The updated ID of the user.
 *               Password:
 *                 type: string
 *                 description: The updated password of the user credential.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the user credential.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the user credential.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the user credential.
 *     responses:
 *       '200':
 *         description: User credential updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User credential updated successfully
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: UserID and Password are required
 *       '404':
 *         description: User credential not found
 *         content:
 *           application/json:
 *             example:
 *               error: User credential not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Failed to update user credential
 */

// DELETE user credential
/**
 * @swagger
 * /UserCredential/{id}:
 *   delete:
 *     tags:
 *     - UserCredential
 *     summary: Delete a user credential
 *     description: Delete a user credential based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User credential ID
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: User credential deleted successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// GET all categories
/**
 * @swagger
 * /Category:
 *   get:
 *     tags:
 *     - Category
 *     summary: Get all categories
 *     description: Retrieve a list of all categories from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Category:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// GET category by ID
/**
 * @swagger
 * /Category/{id}:
 *   get:
 *     tags:
 *     - Category
 *     summary: Get a specific category by ID
 *     description: Retrieve a category from the database based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the category to retrieve
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Category:
 *               type: object
 *       404:
 *         description: Category not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// POST category
/**
 * @swagger
 * /Category:
 *   post:
 *     tags:
 *     - Category
 *     summary: Create a new category
 *     description: Create a new category with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CategoryName:
 *                 type: string
 *                 description: The name of the new category.
 *               isactive:
 *                 type: boolean
 *                 description: The status of the new category.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the category is deleted.
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: The creation date of the category.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the category.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the category.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the category.
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Category created successfully.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Internal Server Error.
 */

// PUT category
/**
 * @swagger
 * /Category/{id}:
 *   put:
 *     tags:
 *     - Category
 *     summary: Update an existing category
 *     description: Update an existing category by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the category to be updated
 *         required: true
 *         type: integer
 *         format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CategoryName:
 *                 type: string
 *                 description: The updated name of the category.
 *               isactive:
 *                 type: boolean
 *                 description: The updated status of the category.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the category is deleted.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the category.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the category.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the category.
 *     responses:
 *       '200':
 *         description: Category updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Category updated successfully
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: CategoryName is required
 *       '404':
 *         description: Category not found
 *         content:
 *           application/json:
 *             example:
 *               error: Category not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Failed to update category
 */

// DELETE category
/**
 * @swagger
 * /Category/{id}:
 *   delete:
 *     tags:
 *     - Category
 *     summary: Delete a category
 *     description: Delete a category based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category ID
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */


// GET all products
/**
 * @swagger
 * /Product:
 *   get:
 *     tags:
 *     - Product
 *     summary: Get all products
 *     description: Retrieve a list of all products from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Product:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// GET product by ID
/**
 * @swagger
 * /Product/{id}:
 *   get:
 *     tags:
 *     - Product
 *     summary: Get a specific product by ID
 *     description: Retrieve a product from the database based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the product to retrieve
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Product:
 *               type: object
 *       404:
 *         description: Product not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// POST product
/**
 * @swagger
 * /Product:
 *   post:
 *     tags:
 *     - Product
 *     summary: Create a new product
 *     description: Create a new product with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProductName:
 *                 type: string
 *                 description: The name of the new product.
 *               CategoryID:
 *                 type: integer
 *                 description: The ID of the category to which the product belongs.
 *               Price:
 *                 type: number
 *                 description: The price of the product.
 *               Description:
 *                 type: string
 *                 description: The description of the product.
 *               isactive:
 *                 type: boolean
 *                 description: The status of the product.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the product is deleted.
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: The creation date of the product.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the product.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the product.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the product.
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Product created successfully.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Internal Server Error.
 */

// PUT product
/**
 * @swagger
 * /Product/{id}:
 *   put:
 *     tags:
 *     - Product
 *     summary: Update an existing product
 *     description: Update an existing product by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the product to be updated
 *         required: true
 *         type: integer
 *         format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProductName:
 *                 type: string
 *                 description: The updated name of the product.
 *               CategoryID:
 *                 type: integer
 *                 description: The updated ID of the category to which the product belongs.
 *               Price:
 *                 type: number
 *                 description: The updated price of the product.
 *               Description:
 *                 type: string
 *                 description: The updated description of the product.
 *               isactive:
 *                 type: boolean
 *                 description: The updated status of the product.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the product is deleted.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the product.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the product.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the product.
 *     responses:
 *       '200':
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Product updated successfully
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: ProductName is required
 *       '404':
 *         description: Product not found
 *         content:
 *           application/json:
 *             example:
 *               error: Product not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Failed to update product
 */

// DELETE product
/**
 * @swagger
 * /Product/{id}:
 *   delete:
 *     tags:
 *     - Product
 *     summary: Delete a product
 *     description: Delete a product based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Product ID
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// GET all orders
/**
 * @swagger
 * /Order:
 *   get:
 *     tags:
 *     - Order
 *     summary: Get all orders
 *     description: Retrieve a list of all orders from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Order:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// GET order by ID
/**
 * @swagger
 * /Order/{id}:
 *   get:
 *     tags:
 *     - Order
 *     summary: Get a specific order by ID
 *     description: Retrieve an order from the database based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the order to retrieve
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Order:
 *               type: object
 *       404:
 *         description: Order not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// POST order
/**
 * @swagger
 * /Order:
 *   post:
 *     tags:
 *     - Order
 *     summary: Create a new order
 *     description: Create a new order with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID:
 *                 type: integer
 *                 description: The ID of the user placing the order.
 *               TotalAmount:
 *                 type: number
 *                 description: The total amount of the order.
 *               Status:
 *                 type: string
 *                 description: The status of the order.
 *               isactive:
 *                 type: boolean
 *                 description: The status of the order.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the order is deleted.
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: The creation date of the order.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the order.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the order.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the order.
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Order created successfully.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Internal Server Error.
 */

// PUT order
/**
 * @swagger
 * /Order/{id}:
 *   put:
 *     tags:
 *     - Order
 *     summary: Update an existing order
 *     description: Update an existing order by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the order to be updated
 *         required: true
 *         type: integer
 *         format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID:
 *                 type: integer
 *                 description: The updated ID of the user placing the order.
 *               TotalAmount:
 *                 type: number
 *                 description: The updated total amount of the order.
 *               Status:
 *                 type: string
 *                 description: The updated status of the order.
 *               isactive:
 *                 type: boolean
 *                 description: The updated status of the order.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the order is deleted.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the order.
 *               createdBy:
 *                 type: string
 *                 description: The user who created the order.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the order.
 *     responses:
 *       '200':
 *         description: Order updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Order updated successfully
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: UserID and TotalAmount are required
 *       '404':
 *         description: Order not found
 *         content:
 *           application/json:
 *             example:
 *               error: Order not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Failed to update order
 */

// DELETE order
/**
 * @swagger
 * /Order/{id}:
 *   delete:
 *     tags:
 *     - Order
 *     summary: Delete an order
 *     description: Delete an order based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Order ID
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */




// GET all items in the cart
/**
 * @swagger
 * /Cart:
 *   get:
 *     tags:
 *     - Cart
 *     summary: Get all items in the cart
 *     description: Retrieve a list of all items in the cart from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Cart:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// GET item in the cart by ID
/**
 * @swagger
 * /Cart/{id}:
 *   get:
 *     tags:
 *     - Cart
 *     summary: Get a specific item in the cart by ID
 *     description: Retrieve an item in the cart from the database based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the item in the cart to retrieve
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Cart:
 *               type: object
 *       404:
 *         description: Item in the cart not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// POST item to the cart
/**
 * @swagger
 * /Cart:
 *   post:
 *     tags:
 *     - Cart
 *     summary: Add a new item to the cart
 *     description: Add a new item to the cart with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID:
 *                 type: integer
 *                 description: The ID of the user adding the item to the cart.
 *               ProductID:
 *                 type: integer
 *                 description: The ID of the product being added to the cart.
 *               Quantity:
 *                 type: integer
 *                 description: The quantity of the product being added to the cart.
 *               isactive:
 *                 type: boolean
 *                 description: The status of the item in the cart.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the item in the cart is deleted.
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: The creation date of the item in the cart.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the item in the cart.
 *               createdBy:
 *                 type: string
 *                 description: The user who added the item to the cart.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the item from the cart.
 *     responses:
 *       201:
 *         description: Item added to the cart successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Item added to the cart successfully.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Internal Server Error.
 */

// PUT item in the cart
/**
 * @swagger
 * /Cart/{id}:
 *   put:
 *     tags:
 *     - Cart
 *     summary: Update an existing item in the cart
 *     description: Update an existing item in the cart by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the item in the cart to be updated
 *         required: true
 *         type: integer
 *         format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID:
 *                 type: integer
 *                 description: The updated ID of the user adding the item to the cart.
 *               ProductID:
 *                 type: integer
 *                 description: The updated ID of the product being added to the cart.
 *               Quantity:
 *                 type: integer
 *                 description: The updated quantity of the product being added to the cart.
 *               isactive:
 *                 type: boolean
 *                 description: The updated status of the item in the cart.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the item in the cart is deleted.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the item in the cart.
 *               createdBy:
 *                 type: string
 *                 description: The user who added the item to the cart.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the item from the cart.
 *     responses:
 *       '200':
 *         description: Item in the cart updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Item in the cart updated successfully
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: UserID, ProductID, and Quantity are required
 *       '404':
 *         description: Item in the cart not found
 *         content:
 *           application/json:
 *             example:
 *               error: Item in the cart not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Failed to update item in the cart
 */

// DELETE item from the cart
/**
 * @swagger
 * /Cart/{id}:
 *   delete:
 *     tags:
 *     - Cart
 *     summary: Delete an item from the cart
 *     description: Delete an item from the cart based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the item in the cart to be deleted
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Item deleted from the cart successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */


// GET all payments
/**
 * @swagger
 * /Payment:
 *   get:
 *     tags:
 *     - Payment
 *     summary: Get all payments
 *     description: Retrieve a list of all payments from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Payment:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// GET payment by ID
/**
 * @swagger
 * /Payment/{id}:
 *   get:
 *     tags:
 *     - Payment
 *     summary: Get a specific payment by ID
 *     description: Retrieve a payment from the database based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the payment to retrieve
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Payment:
 *               type: object
 *       404:
 *         description: Payment not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

// POST payment
/**
 * @swagger
 * /Payment:
 *   post:
 *     tags:
 *     - Payment
 *     summary: Record a new payment
 *     description: Record a new payment with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               OrderID:
 *                 type: integer
 *                 description: The ID of the order for which the payment is made.
 *               Amount:
 *                 type: number
 *                 description: The amount of the payment.
 *               PaymentMethod:
 *                 type: string
 *                 description: The method used for the payment.
 *               isactive:
 *                 type: boolean
 *                 description: The status of the payment.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the payment is deleted.
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: The creation date of the payment.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the payment.
 *               createdBy:
 *                 type: string
 *                 description: The user who recorded the payment.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the payment.
 *     responses:
 *       201:
 *         description: Payment recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Payment recorded successfully.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Internal Server Error.
 */

// PUT payment
/**
 * @swagger
 * /Payment/{id}:
 *   put:
 *     tags:
 *     - Payment
 *     summary: Update an existing payment
 *     description: Update an existing payment by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the payment to be updated
 *         required: true
 *         type: integer
 *         format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               OrderID:
 *                 type: integer
 *                 description: The updated ID of the order for which the payment is made.
 *               Amount:
 *                 type: number
 *                 description: The updated amount of the payment.
 *               PaymentMethod:
 *                 type: string
 *                 description: The updated method used for the payment.
 *               isactive:
 *                 type: boolean
 *                 description: The updated status of the payment.
 *               isdeleted:
 *                 type: boolean
 *                 description: Indicates if the payment is deleted.
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: The last update date of the payment.
 *               createdBy:
 *                 type: string
 *                 description: The user who recorded the payment.
 *               deletedBy:
 *                 type: string
 *                 description: The user who deleted the payment.
 *     responses:
 *       '200':
 *         description: Payment updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Payment updated successfully
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: OrderID and Amount are required
 *       '404':
 *         description: Payment not found
 *         content:
 *           application/json:
 *             example:
 *               error: Payment not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Failed to update payment
 */

// DELETE payment
/**
 * @swagger
 * /Payment/{id}:
 *   delete:
 *     tags:
 *     - Payment
 *     summary: Delete a payment
 *     description: Delete a payment based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Payment ID
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Payment deleted successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */


//brands

//get all brands
/**
 * @swagger
 * /Brands:
 *   get:
 *     tags:
 *     - Brands
 *     summary: Get all brands
 *     description: Retrieve a list of all brands from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Brands:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   Id:
 *                     type: integer
 *                   ImageUrl:
 *                     type: string
 *                   AltText:
 *                     type: string
 *                   Name:
 *                     type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

//get by id code
/**
 * @swagger
 * /Brands/{id}:
 *   get:
 *     tags:
 *     - Brands
 *     summary: Get a specific brand by ID
 *     description: Retrieve a brand from the database based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the brand to retrieve
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             Brand:
 *               type: object
 *               properties:
 *                 Id:
 *                   type: integer
 *                 ImageUrl:
 *                   type: string
 *                 AltText:
 *                   type: string
 *                 Name:
 *                   type: string
 *       404:
 *         description: Brand not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

//post code
/**
 * @swagger
 * /Brands:
 *   post:
 *     tags:
 *     - Brands
 *     summary: Create a new brand
 *     description: Create a new brand with the provided image URL, alt text, and name.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ImageUrl:
 *                 type: string
 *                 description: The URL of the brand image.
 *               AltText:
 *                 type: string
 *                 description: The alt text for the brand image.
 *               Name:
 *                 type: string
 *                 description: The name of the brand.
 *     responses:
 *       201:
 *         description: Brand created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Brand created successfully.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Internal Server Error.
 */

//put code
/**
 * @swagger
 * /Brands/{id}:
 *   put:
 *     tags:
 *     - Brands
 *     summary: Update an existing brand
 *     description: Endpoint to update an existing brand by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the brand to be updated
 *         required: true
 *         type: integer
 *         format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ImageUrl:
 *                 type: string
 *                 description: The updated URL of the brand image.
 *               AltText:
 *                 type: string
 *                 description: The updated alt text for the brand image.
 *               Name:
 *                 type: string
 *                 description: The updated name of the brand.
 *     responses:
 *       '200':
 *         description: Brand updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Brand updated successfully
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: ImageUrl is required
 *       '404':
 *         description: Brand not found
 *         content:
 *           application/json:
 *             example:
 *               error: Brand not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Failed to update brand
 */

//delete code
/**
 * @swagger
 * /Brands/{id}:
 *   delete:
 *     tags:
 *     - Brands
 *     summary: Delete a brand
 *     description: Delete a brand based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Brand ID
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Brand deleted successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */



//get all categories
/**
 * @swagger
 * /categories:
 *   get:
 *     tags:
 *     - Categories
 *     summary: Get all categories
 *     description: Retrieve a list of all categories from the database.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             categories:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   image_url:
 *                     type: string
 *                   alt_text:
 *                     type: string
 *                   title:
 *                     type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

//get by id code
/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     tags:
 *     - Categories
 *     summary: Get a specific category by ID
 *     description: Retrieve a category from the database based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the category to retrieve
 *         required: true
 *         type: integer
 *         format: int32
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             category:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 image_url:
 *                   type: string
 *                 alt_text:
 *                   type: string
 *                 title:
 *                   type: string
 *       404:
 *         description: Category not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */

//post code
/**
 * @swagger
 * /categories:
 *   post:
 *     tags:
 *     - Categories
 *     summary: Create a new category
 *     description: Create a new category with the provided image URL, alt text, and title.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image_url:
 *                 type: string
 *                 description: The URL of the category image.
 *               alt_text:
 *                 type: string
 *                 description: The alt text for the category image.
 *               title:
 *                 type: string
 *                 description: The title of the category.
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Category created successfully.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Internal Server Error.
 */

//put code
/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     tags:
 *     - Categories
 *     summary: Update an existing category
 *     description: Endpoint to update an existing category by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the category to be updated
 *         required: true
 *         type: integer
 *         format: int32
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image_url:
 *                 type: string
 *                 description: The updated URL of the category image.
 *               alt_text:
 *                 type: string
 *                 description: The updated alt text for the category image.
 *               title:
 *                 type: string
 *                 description: The updated title of the category.
 *     responses:
 *       '200':
 *         description: Category updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Category updated successfully
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               error: image_url is required
 *       '404':
 *         description: Category not found
 *         content:
 *           application/json:
 *             example:
 *               error: Category not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               error: Failed to update category
 */

//delete code
/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     tags:
 *     - Categories
 *     summary: Delete a category
 *     description: Delete a category based on the provided ID.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category ID
 *         required: true
 *         type: integer
 *         format: int32
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */


/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - AuthenticationLogin
 *     summary: Authenticate user
 *     description: Authenticate a user by email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user.
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *     responses:
 *       200:
 *         description: Successfully authenticated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   description: The authenticated user's details (excluding password).
 *                 auth:
 *                   type: string
 *                   description: JWT token for authentication.
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 *                   description: Email or password missing.
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 *                   description: No User found or incorrect email/password combination.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 *                   description: Something went wrong during authentication.
 */




/**
 * @swagger
 * /signup:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Authenticate user
 *     description: Authenticate a user by email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user.
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *     responses:
 *       200:
 *         description: Successfully authenticated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   description: The authenticated user's details (excluding password).
 *                 auth:
 *                   type: string
 *                   description: JWT token for authentication.
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 *                   description: Email or password missing.
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 *                   description: No User found or incorrect email/password combination.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 *                   description: Something went wrong during authentication.
 */


//purchase and payment
/**
 * @swagger
 * /api/purchase:
 *   post:
 *     tags:
 *       - Purchase
 *     summary: Handle purchase
 *     description: Handle the purchase process by inserting shipping details and payment information into the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               shippingDetails:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                     description: The first name of the recipient.
 *                   lastName:
 *                     type: string
 *                     description: The last name of the recipient.
 *                   street:
 *                     type: string
 *                     description: The street address for shipping.
 *                   city:
 *                     type: string
 *                     description: The city for shipping.
 *                   state:
 *                     type: string
 *                     description: The state for shipping.
 *                   pinCode:
 *                     type: string
 *                     description: The pin code for shipping.
 *               paymentInformation:
 *                 type: object
 *                 properties:
 *                   creditCardNo:
 *                     type: string
 *                     description: The credit card number for payment.
 *                   expiryDate:
 *                     type: string
 *                     format: date
 *                     description: The expiry date of the credit card.
 *                   ccv:
 *                     type: string
 *                     description: The CCV code of the credit card.
 *     responses:
 *       200:
 *         description: Purchase successful
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Purchase successful
 *       500:
 *         description: Internal Server Error
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Internal server error
 */
