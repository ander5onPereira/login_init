import express from "express";
import passport from "passport";
const router = express.Router();

router.get("/", (req, res, next) => {
  if (req.query.fail) {
    res.status(200).json({ status: "Usuario e/ou senha inválidos!" });
  } else {
    res.status(200).json({ status: "TELA LOGIN" });
  }
  //res.render("login", { message: null });
});
router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login?fail=true",
  })
);

module.exports = router;
