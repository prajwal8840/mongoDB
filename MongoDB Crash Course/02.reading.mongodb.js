use("ecommerce");

// db.products.find({ name: "wireless Mouse" });

// db.products.find({ category: "Electronics" });

// db.products.find({ price: { $lt: 5000 } });

// db.products.find({ price: { $gt: 50000 } });

// db.products.find({ price: { $gte: 1000, $lte: 50000 } });

// db.products.find({
//   $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }],
// });

// db.products.find({}, { name: 1, price: 1, _id: 0 });

db.products.find().sort({ price: -1 }).limit(2);
