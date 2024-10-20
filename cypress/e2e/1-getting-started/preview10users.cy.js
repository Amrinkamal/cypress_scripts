// cypress/integration/json_to_csv.spec.js
import Papa from 'papaparse';

describe('Convert JSON to CSV', () => {
  it('should convert JSON object to CSV and save it', () => {
    // Your JSON data
    const jsonData = [
        {
          "id": 0,
          "name": "Elijah",
          "city": "Austin",
          "age": 78,
          "friends": [
            {
              "name": "Michelle",
              "hobbies": [
                "Watching Sports",
                "Reading",
                "Skiing & Snowboarding"
              ]
            },
            {
              "name": "Robert",
              "hobbies": [
                "Traveling",
                "Video Games"
              ]
            }
          ]
        },
        {
          "id": 1,
          "name": "Noah",
          "city": "Boston",
          "age": 97,
          "friends": [
            {
              "name": "Oliver",
              "hobbies": [
                "Watching Sports",
                "Skiing & Snowboarding",
                "Collecting"
              ]
            },
            {
              "name": "Olivia",
              "hobbies": [
                "Running",
                "Music",
                "Woodworking"
              ]
            },
            {
              "name": "Robert",
              "hobbies": [
                "Woodworking",
                "Calligraphy",
                "Genealogy"
              ]
            },
            {
              "name": "Ava",
              "hobbies": [
                "Walking",
                "Church Activities"
              ]
            },
            {
              "name": "Michael",
              "hobbies": [
                "Music",
                "Church Activities"
              ]
            },
            {
              "name": "Michael",
              "hobbies": [
                "Martial Arts",
                "Painting",
                "Jewelry Making"
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Evy",
          "city": "San Diego",
          "age": 48,
          "friends": [
            {
              "name": "Joe",
              "hobbies": [
                "Reading",
                "Volunteer Work"
              ]
            },
            {
              "name": "Joe",
              "hobbies": [
                "Genealogy",
                "Golf"
              ]
            },
            {
              "name": "Oliver",
              "hobbies": [
                "Collecting",
                "Writing",
                "Bicycling"
              ]
            },
            {
              "name": "Liam",
              "hobbies": [
                "Church Activities",
                "Jewelry Making"
              ]
            },
            {
              "name": "Amelia",
              "hobbies": [
                "Calligraphy",
                "Dancing"
              ]
            }
          ]
        },
        {
          "id": 3,
          "name": "Oliver",
          "city": "St. Louis",
          "age": 39,
          "friends": [
            {
              "name": "Mateo",
              "hobbies": [
                "Watching Sports",
                "Gardening"
              ]
            },
            {
              "name": "Nora",
              "hobbies": [
                "Traveling",
                "Team Sports"
              ]
            },
            {
              "name": "Ava",
              "hobbies": [
                "Church Activities",
                "Running"
              ]
            },
            {
              "name": "Amelia",
              "hobbies": [
                "Gardening",
                "Board Games",
                "Watching Sports"
              ]
            },
            {
              "name": "Leo",
              "hobbies": [
                "Martial Arts",
                "Video Games",
                "Reading"
              ]
            }
          ]
        },
        {
          "id": 4,
          "name": "Michael",
          "city": "St. Louis",
          "age": 95,
          "friends": [
            {
              "name": "Mateo",
              "hobbies": [
                "Movie Watching",
                "Collecting"
              ]
            },
            {
              "name": "Chris",
              "hobbies": [
                "Housework",
                "Bicycling",
                "Collecting"
              ]
            }
          ]
        },
        {
          "id": 5,
          "name": "Michael",
          "city": "Portland",
          "age": 19,
          "friends": [
            {
              "name": "Jack",
              "hobbies": [
                "Painting",
                "Television"
              ]
            },
            {
              "name": "Oliver",
              "hobbies": [
                "Walking",
                "Watching Sports",
                "Movie Watching"
              ]
            },
            {
              "name": "Charlotte",
              "hobbies": [
                "Podcasts",
                "Jewelry Making"
              ]
            },
            {
              "name": "Elijah",
              "hobbies": [
                "Eating Out",
                "Painting"
              ]
            }
          ]
        },
        {
          "id": 6,
          "name": "Lucas",
          "city": "Austin",
          "age": 76,
          "friends": [
            {
              "name": "John",
              "hobbies": [
                "Genealogy",
                "Cooking"
              ]
            },
            {
              "name": "John",
              "hobbies": [
                "Socializing",
                "Yoga"
              ]
            }
          ]
        },
        {
          "id": 7,
          "name": "Michelle",
          "city": "San Antonio",
          "age": 25,
          "friends": [
            {
              "name": "Jack",
              "hobbies": [
                "Music",
                "Golf"
              ]
            },
            {
              "name": "Daniel",
              "hobbies": [
                "Socializing",
                "Housework",
                "Walking"
              ]
            },
            {
              "name": "Robert",
              "hobbies": [
                "Collecting",
                "Walking"
              ]
            },
            {
              "name": "Nora",
              "hobbies": [
                "Painting",
                "Church Activities"
              ]
            },
            {
              "name": "Mia",
              "hobbies": [
                "Running",
                "Painting"
              ]
            }
          ]
        },
        {
          "id": 8,
          "name": "Emily",
          "city": "Austin",
          "age": 61,
          "friends": [
            {
              "name": "Nora",
              "hobbies": [
                "Bicycling",
                "Skiing & Snowboarding",
                "Watching Sports"
              ]
            },
            {
              "name": "Ava",
              "hobbies": [
                "Writing",
                "Reading",
                "Collecting"
              ]
            },
            {
              "name": "Amelia",
              "hobbies": [
                "Eating Out",
                "Watching Sports"
              ]
            },
            {
              "name": "Daniel",
              "hobbies": [
                "Skiing & Snowboarding",
                "Martial Arts",
                "Writing"
              ]
            },
            {
              "name": "Zoey",
              "hobbies": [
                "Board Games",
                "Tennis"
              ]
            }
          ]
        },
        {
          "id": 9,
          "name": "Liam",
          "city": "New Orleans",
          "age": 33,
          "friends": [
            {
              "name": "Chloe",
              "hobbies": [
                "Traveling",
                "Bicycling",
                "Shopping"
              ]
            },
            {
              "name": "Evy",
              "hobbies": [
                "Eating Out",
                "Watching Sports"
              ]
            },
            {
              "name": "Grace",
              "hobbies": [
                "Jewelry Making",
                "Yoga",
                "Podcasts"
              ]
            }
          ]
        }
      ];
      // Iterate through each object and count keys
    jsonData.forEach((item, index) => {
        // Count keys in the main object
        const keyCount = Object.keys(item).length;
  
        // Log the result for the current object
        cy.log(`Object ${index} has ${keyCount} keys.`);
  
        // Optionally: Check if the number of keys meets your expectations
        // Example assertion (adjust as needed)
        expect(keyCount).to.be.greaterThan(0);
      });

    // Flatten the JSON data
    const flattenedData = jsonData.map(person => ({
      id: person.id,
      name: person.name,
      city: person.city,
      age: person.age,
      friends: person.friends.map(friend => ({
        friendName: friend.name,
        friendHobbies: friend.hobbies.join(', ')
      }))
    }));

    // Convert JSON to CSV
    const csv = Papa.unparse(flattenedData, {
      header: true,
      delimiter: ",",
      columns: [
        "id",
        "name",
        "city",
        "age",
        "friends.friendName",
        "friends.friendHobbies"
      ]
    });

    // Log CSV data to console
    cy.log(csv);

    // Save CSV to file
    cy.writeFile('cypress/fixtures/data.csv', csv);

    jsonData.forEach((item, index) => {
        // Count keys in the main object
        const keyCount = Object.keys(item).length;
  
        // Log the result for the current object
        cy.log(`Object ${index} has ${keyCount} keys.`);
  
        // Optionally: Check if the number of keys meets your expectations
        // Example assertion (adjust as needed)
        expect(keyCount).to.be.greaterThan(0);
      });

    
  });

 
});


it('should count the number of items in the JSON file', () => {
    // Load the JSON file from fixtures
    cy.fixture('data.json').then((data) => {
      // Count the number of items in the JSON array
      const itemCount = data.length;
      // Log the count to the console
      cy.log(`Number of items in JSON file: ${itemCount}`);
      
      // Optional: Add an assertion to validate the count
      expect(itemCount).to.be.greaterThan(0); // Example assertion
    });
    
  });