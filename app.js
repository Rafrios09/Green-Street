//Newsletter
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/subscribe", (req, res) => {
  const { email, js } = req.body;
  console.log(req.body);

  const mcData = {
    members: [
      {
        email_address: email,
        status: "pending",
      },
    ],
  };

  const mcDataPost = JSON.stringify(mcData);

  const options = {
    url: "https://us21.api.mailchimp.com/3.0/lists/a0a071384b",
    method: "POST",
    headers: {
      Authorization: process.env.API_KEY,
    },
    body: mcDataPost,
  };

  if (email) {
    request(options, (err, response, body) => {
      if (err) {
        res.json({ error: err });
      } else {
        if (js) {
          res.sendStatus(200);
        } else {
          res.redirect("/success.html");
        }
      }
    });
  } else {
    res.status(404).send({ message: "Failed" });
  }
});

const PORT = process.env.PORT || 80;

app.listen(PORT, console.log("Server started!"));
