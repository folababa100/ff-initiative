require('./config/config')
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const moment = require('moment');
// eslint-disable-next-line
const {mongoose} = require('./db/mongoose');
const keys = require('./config/keys')
const { ObjectID } = require('mongodb');
const {Product} = require('./models/product');
const {User} = require('./models/user');
const {authenticate} = require('./middleware/authenticate');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleSecret,
    callbackURL: 'http://localhost:3001/auth/google/callback'
  },
    accessToken => {
      console.log(accessToken)
    }
))

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, x-auth',);
  res.setHeader('Cache-Control', 'no-cache');
  next();
})

app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password', 'fullName', 'phoneNumber']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken()
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e)
  });
});

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

app.get('/auth/google/callback', passport.authenticate('google'))

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

app.post('/users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });
  }).catch((e) => {
    res.status(400).send(e)
  });
});

app.delete('/users/me/token', authenticate, (req, res) => {
  req.user.removeToken().then(() => {
    res.status(200).send();
  }, () => {
    res.status(400).send();
  });
});

app.post('/products', authenticate, (req, res) => {
  var product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    seller: req.user.fullName,
    _creator: req.user._id
  });

  product.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/products', (req, res) => {
  Product.find().then((products) => {
    res.send({products})
  }, (e) => {
    res.status(400).send(e);
  });
});

// app.get('/products', authenticate, (req, res) => {
//   Product.find({
//     _creator: req.user._id
//   }).then((products) => {
//     res.send({products})
//   }, (e) => {
//     res.status(400).send(e);
//   });
// });

app.get('/products/:id', authenticate, (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Product.findById({
    _id: id,
    _creator: req.user._id
  }).then((product) => {
    if (!product) {
      return res.status(404).send()

    }
    res.send({product})
  }).catch((e) => {
    res.status(400).send(e)
  })
});


app.delete('/products/:id', authenticate, (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Product.findOneAndRemove({
    _id: id,
    _creator: req.user._id
  }).then((product) => {
    if (!product) {
      return res.status(404).send()
    }

    res.send({product})
  }).catch((e) => {
    res.status(400).send(e)
  })
});

app.patch('/products/:id', authenticate, (req, res) => {
  var id = req.params.id;

  var body = _.pick(req.body, ['name', 'body', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = moment().valueOf();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Product.findOneAndUpdate({
    _id: id,
    _creator: req.user._id
  }, {$set: body}, {new: true}).then((product) => {
    if (!product) {
      return res.status(404).send()
    }

    res.send({product})
  }).catch((e) => {
    res.status(400).send()
  })

})

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});

module.exports = {app}
