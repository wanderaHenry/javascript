//constants related to chicks
const CHICK_PRICE = 1650; // UGX price per chick
const MAX_STARTER_CHICKS = 100;
const MAX_RETURNING_CHICKS = 500;
const MAX_FEED_BAGS = 2;
const FEED_PAYMENT_PERIOD_MONTHS = 2;
//farmer
let isApproved = false;
let farmerName = "Wandera henry";
let farmerAge = 25;
let isRegistered = true;
//user roles in the system.
const ROLE_BROODER_MANAGER = "brooder_manager";
const ROLE_SALES_REP = "sales_rep";
const ROLE_CUSTOMER = "customer";

//chick types
const TYPE_LAYER = "layer";
const TYPE_BROILER = "broiler";

// chick breeds
const BREED_LOCAL = "local";
const BREED_EXOTIC = "exotic";

//farmer types
const FARMER_TYPE_STARTER = "starter";
const FARMER_TYPE_RETURNING = "returning";

//variable objects to be assigned
// chick in stock,
// chick record,
// customer,
// chick request,
// sales representative

//roles of the brooder manager
// Receives the request for chicks from young farmers and approves those requests.
// On approving therequest,
// the stock number of chicks reduces.
// Sees all young farmers who have taken their chicks
//objects;
let farmerInfo = {
  isApproved: false,
  name: "Wandera henry",
  age: 25,
  isRegistered: true,
};

//array of chick types
let chickType = ["local", "exotic", "layer", "broiler"];
let farmerNames = ["henry", "anyango"];

let chickStock = {
  type: TYPE_BROILER,
  breed: BREED_EXOTIC,
  quantity: 500,
  ageInDays: 5,
  dateAdded: "2025-06-02",
};
//indices in arrays start from 0
//mutable data types
if (farmerAge >= 20 && farmerAge <= 30) {
  console.log("Eligible for chick request.");
}
