/**
 * @swagger
 *    components:
 *      schemas:
 *        Notification:
 *          type: object
 *          required:
 *            - user_id
 *            - recipient_type
 *            - message
 *            - is_read
 *          properties:
 *            user_id:
 *              type: string
 *              description: The user Id of the user that will receive the notification.
 *            recipient_type:
 *              type: string
 *              description: type of receipient(customer, provider, admin).
 *           message:
 *              type: string
 *              description: The max number of guests provided by the provider of the event
 *           type:
 *              type: string
 *              description: The max number of guests provided by the provider of the event
 *            is_read:
 *              type: string
 *              description: The price of the event      
 */

/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Create a new event
 *     tags: [events]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: The created event.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       500:
 *         description: server error
 *
 */

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: get the list of all events
 *     tags: [events]
 *     responses:
 *       200:
 *         description: all the  events.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       500:
 *         description: server error
 *
 */

/**
 * @swagger
 * tags:
 * /api/events/{id}:
 *   get:
 *     summary: Get event by ID.
 *     description: Get event by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: event ID
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: event not found
 *       '500':
 *         description: Internal server error
 */

