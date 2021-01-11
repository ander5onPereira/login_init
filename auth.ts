import bcrypt from "bcryptjs";
import passportLocal from "passport-local";
//bcrypt.hashSync("stringParaGerarHash");
const LocalStrategy = passportLocal.Strategy;
const users = [
  {
    _id: "1",
    username: "adm",
    password: "$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW",
    email: "anderson.carro.95@gmail.com",
  },
];

module.exports = (passport: any) => {
  function findUser(username: string) {
    //usar banco
    return users.find((item) => item.username === username);
  }
  function findUserById(id: string) {
    //usar banco
    return users.find((item) => item._id === id);
  }
  passport.serializeUser((user: any, done: any) => {
    done(null, user._id);
  });
  passport.deserializeUser((id: any, done: any) => {
    try {
      const user = findUserById(id);
      return done(null, user);
    } catch (error) {
      console.log(error.message);
      return done(error, null);
    }
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      (username, password, done) => {
        try {
          const user = findUser(username);
          if (!user) return done(null, false);

          const isValid = bcrypt.compareSync(password, user.password);
          if (!isValid) return done(null, false);

          return done(null, user);
        } catch (error) {
          console.log(error.message);
          return done(error, false);
        }
      }
    )
  );
};
