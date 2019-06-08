const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const vendorSchema = new Schema(
  {
    vendor_id: Number,
    name: String,
    logo: String,
    desc: String,
    shop_url: String,
    vendor_name: String
  },
);

const Vendor = mongoose.model("Vendor", vendorSchema);

// Vendor.create(
//   {
//     vendor_id: 2,
//     name: "Angeli di Varano",
//     logo:
//       "https://www.lovelyancona.it/wp-content/uploads/2017/04/angeli-di-varano.jpg",
//     desc: "Best wine in town",
//     shop_url: "angeli-di-varano",
//     products: [
//       {
//         product_id: "0",
//         name: "red wine",
//         desc: "good red wine",
//         price: "10€",
//         img:
//           "https://www.wineilvino.it/wp-content/uploads/2017/03/Rosso-conero-primo-di-tre-angeli-di-varano.jpg",
//         product_url: "red-wine",
//         weight: "1kg"
//       },
//       {
//         product_id: "1",
//         name: "white wine",
//         desc: "very good white wine",
//         price: "6€",
//         img:
//           "https://www.wineilvino.it/wp-content/uploads/2017/03/Rosso-conero-primo-di-tre-angeli-di-varano.jpg",
//         product_url: "white-wine",
//         weight: "1kg"
//       },
//       {
//         product_id: "2",
//         name: "rosè wine",
//         desc: "very good rosè wine",
//         price: "16€",
//         img:
//           "https://www.wineilvino.it/wp-content/uploads/2017/03/Rosso-conero-primo-di-tre-angeli-di-varano.jpg",
//         product_url: "rose-wine",
//         weight: "1kg"
//       }
//     ]
//   },
//   function(err, small) {
//     if (err) return handleError(err);
//     // saved!
//   }
// );

module.exports = Vendor;
