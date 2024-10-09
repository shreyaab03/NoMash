const functions = require("firebase-functions");
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

exports.getBooksAPI = functions.https.onRequest(async (req, res) => {
  try {
    const booksCollection = await admin.firestore().collection("books").get();
    const books = booksCollection.docs.map(doc => doc.data());
    res.status(200).json(books);
  } catch (error) {
    res.status(500).send("Error fetching books: " + error.message);
  }
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
