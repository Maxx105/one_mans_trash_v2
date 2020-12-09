const Conversation = require("../models/Conversation");

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        Conversation.find(req.query)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        Conversation
            .findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    // create: function(req, res) {
    //     const conversation = new Conversation(req.body);
    //     Conversation
    //         .create(req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // create: function (req, res) {
    //     const conversation = new Conversation(req.body);
    //     conversation.save((err) => {
    //       if (err) {
    //         res.json({ message: "Error has occurred", error: true });
    //       } else {
    //         req.user.conversation.push(conversation);
    //         req.user.save((err) => {
    //           if (err) {
    //             res.json({ message: "Error has occurred", error: true });
    //           } else {
    //             res.json({ message: "Successfully sent message", error: false });
    //           }
    //         });
    //       }
    //     });
    // },
    update: function(req, res) {
        console.log(req.body)
        Conversation
            .findByIdAndUpdate( {_id: req.body._id },
            { "$push":  {"message": req.body.message} })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        
        // const conversation = new Conversation(req.body);
        // User
        //   .findByIdAndUpdate(req.body._id,
        //     { "$push": { "conversation": conversation._id } },
        //     { "new": true, "upsert": true },
        //     function (err, res) {
        //         if (err) throw err;
        //         // console.log(res);
        //     }
    }
    // create: function (req, res) {
    //     const conversation = new Conversation(req.body);
    //     conversation.save((err) => {
    //       if (err) {
    //         res.json({ message: "Error has occurred", error: true });
    //       } else {
    //         console.log(req.body)
    //         req.body.message.push(conversation);
    //         // req.body.save((err) => {
    //         //   if (err) {
    //         //     res.json({ message: "Error has occurred", error: true });
    //         //   } else {
    //         //     res.json({ message: "Successfully sent message", error: false });
    //         //   }
    //         // });
    //       }
    //     });
    //   }
//   create: function (req, res) {
//     const message = new Conversation(req.body);
//     message.save((err) => {
//       if (err) {
//         res.json({ message: "Error has occurred", error: true });
//       } else {
//         req.user.sentMessages.push(message);
//         req.user.save((err) => {
//           if (err) {
//             res.json({ message: "Error has occurred", error: true });
//           } else {
//             res.json({ message: "Successfully sent message", error: false });
//           }
//         });
//       }
//     });
//   }
};
