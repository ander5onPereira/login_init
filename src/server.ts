import express from "express";
import "./database/conection";
import passport from "passport";
import session from "express-session";

//import * as LoginRouter from "./routes/login";
require("../auth")(passport);

function authenticationMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

var loginRoutes = require("./routes/login");

const app = express();

app.use(
  session({
    secret: "123",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/login", loginRoutes);
app.get("/user", authenticationMiddleware, (req, res, next) => {
  res.json({ message: "USER" });
});
app.get("/", authenticationMiddleware, (req, res, next) => {
  res.json({ message: "INDEX" });
});
app.listen(3000);
