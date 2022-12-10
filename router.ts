import { Express } from 'express';
import authRouter from './auth/router';
import taxiServiceRouter from './taxiService/router';


const router = (app: Express) => {
    app.get("/", (req, res) => {
        res.json({
            message: "its working"
        });
    });
    app.use("/auth", authRouter);
    app.use("/taxiService", taxiServiceRouter);

}
export default router;