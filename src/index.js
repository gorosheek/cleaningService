import express from "express"
import cors from 'cors'
import router from "./routes/api-routes.js";
import swaggerDocs from "./swagger/swagger.js";

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

app.listen(PORT, () => {
    console.log(`Server start http://localhost:${PORT}`);
    swaggerDocs(app);
});
