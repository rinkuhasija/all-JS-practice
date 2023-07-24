// Shallow Copy:
// A shallow copy creates a new object or array and copies only the references to the nested objects or arrays. It means that the new copy points to the same memory locations as the original. As a result, if you modify a nested object in the copy, it will also affect the original, and vice versa.


// Original object
const originalObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

// Shallow copy using spread operator
const shallowCopy = { ...originalObject };

// Modifying the nested object in the copy
originalObject.address.city = "San Francisco";

// Both the original and the shallow copy are affected
console.log(originalObject.address.city); // Output: "San Francisco"
console.log(shallowCopy.address.city);
console.log("\n \n");    // Output: "San Francisco"

// -----------

// Deep Copy:
// A deep copy creates a completely independent duplicate of an object or array, including all nested objects and arrays. It means that the new copy has its own memory locations for all the elements, and changes made to the deep copy do not affect the original object.

// Original object
const originalObject2 = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA",
    },
  };
  
  // Deep copy using JSON.parse and JSON.stringify
  const deepCopy = JSON.parse(JSON.stringify(originalObject2));
  
  // Modifying the nested object in the copy
  deepCopy.address.city = "San Francisco";
  
  // Only the deep copy is affected, the original remains unchanged
  console.log(originalObject2.address.city); // Output: "New York"
  console.log(deepCopy.address.city);       // Output: "San Francisco"
  





