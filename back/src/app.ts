import "express-async-errors";
import express from "express";
import errorHandler from "./errors/index";
import usersRoutes from "./routes/users.routes";
import contactsRoutes from "./routes/contacts.routes";
import loginRoutes from "./routes/login.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/contacts", contactsRoutes);

app.use("/login", loginRoutes);

app.use(errorHandler);

export default app;
