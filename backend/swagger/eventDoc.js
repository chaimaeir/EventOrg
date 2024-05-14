/**
 * @swagger
 *    components:
 *      schemas:
 *        Event:
 *          type: object
 *          required:
 *            - name
 *            - type
 *            - description
 *            - guestNumber
 *            - price
 *            - pictures
 *            - venue
 *            - city
 *            - theme
 *            - foodMenu
 *            - drinksMenu
 *          properties:
 *            type:
 *              type: string
 *              description: The type of the event.
 *            description:
 *              type: string
 *              description: The description of the event.
 *            guestNumber:
 *              type: number
 *              description: The max number of guests provided by the provider of the evnt
 *            price:
 *              type: number
 *              description: The price of the event
 *            pictures:
 *                type: array
 *                items:
 *                 type: string
 *                 format: binary
 *            venue:
 *              type: string
 *              description: The venue of the event.
 *            city:
 *              type: string
 *              description: The city of the provider.
 *            theme:
 *              type: string
 *              description: The theme of the event(classic, traditional...)
 *            foodMenu:
 *              type: array
 *              items:
 *                  type: string
 *              description: menu of food available for this event.
 *            drinksMenu:
 *              type: array
 *              items:
 *                  type: string
 *              description: drinks menu available for this event.
 *            
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

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     summary: Create a new event
 *     tags: [events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
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