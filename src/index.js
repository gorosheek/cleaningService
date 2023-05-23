//noinspection JSCheckFunctionSignatures

import express from "express"
import cors from 'cors'
import router from "./routes/api-routes.js";
import generateSwagger from "./swagger/swagger.js";
import { readFile } from 'fs/promises';
import swaggerUi from "swagger-ui-express";

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());

app.use(cors(
    {
        optionsSuccessStatus: 200,
        origin: true,
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        credentials: true,
        maxAge: 3000,
        allowedHeaders: "*",
    }
));

app.use(router);
generateSwagger().then(async () => {
    const swaggerDoc = JSON.parse(await readFile("./src/swagger/swagger.json", "utf8"));
    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
})
app.listen(PORT, () => console.log(`Server start http://localhost:${PORT}`));