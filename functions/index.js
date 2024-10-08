const functions = require("firebase-functions"); // 1st Gen functions
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.countBooks = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      res.status(200).send({count});
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});

exports.capitalizeBookData = functions.firestore
    .document("books/{bookId}")
    .onCreate(async (snap, context) => {
      const data = snap.data();

      if (data.name) {
        const capitalizedData = {
          name: data.name.toUpperCase(),
          isbn: data.isbn,
        };

        console.log("Original Data:", data);
        console.log("Capitalized Data:", capitalizedData);

        return snap.ref.set(capitalizedData, {merge: true});
      } else {
        console.error("No 'name' field found in document:", snap.id);
      }
    });
