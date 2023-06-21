import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Cleaning service",
            version: "1.0.0",
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: [
        "./src/routes/order-router.js",
        "./src/routes/customer-router.js",
        "./src/schemas/Order.*.js",
        "./src/schemas/Customer.*.js"
    ],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app) {
    app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get("/doc.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
}

export default swaggerDocs;