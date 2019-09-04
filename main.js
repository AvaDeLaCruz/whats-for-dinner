// // // recipes:
// pasta w marinara
// pasta w meat sauce
// chicken and broccolini
// gnocci w some sauce idk what yet
// chicken pot pie - homemade
// tofu stir fry
// agedashi tofu
// beef and broccoli

// tj chicken salad
// tj chicken pot pie
// tj chicken burrito bowl
// tj Burrata, Prosciutto, and Arugula Flatbread
// tj butter chicken
// tj seafood paella
// tj shrimp stir fry
// tj fresh ravioli?



$("#generate-button").on("click", function() {
  // calculate number of recipes in recipe book
  let numRecipes = Object.keys(recipeBook).length;
  // calculte random int [0,numRecipes-1]
  let rand = Math.floor(Math.random() * numRecipes);
  // get recipe title and display on page
  let recipeTitle = recipeBook[rand].Name;
  $("#recipe-title").html(recipeTitle);
  // get list of ingredients and display on page
  let ingredients = recipeBook[rand].Ingredients;
  let ul = document.createElement('ul');
  ingredients.forEach(function(ingredient){
    let li = document.createElement('li');
    li.innerText = ingredient;
    ul.append(li);
  });

  $("#recipe-ingredients").html(ul);

});






var recipeBook = [
  {
     "Name" : "Sausage and Peppers",
     "Ingredients" : [
       "Sausage",
       "Bell Peppers",
       "Bread"
     ]
   },
  {
     "Name" : "Caprese Salad",
     "Ingredients" : [
        "Small Tomatoes",
        "Mozzarella Balls",
        "Basil"
     ]
  },
  {
     "Name" : "Fried Rice",
     "Ingredients" : [
        "White Rice",
        "Egg",
        "Frozen Carrots, Peas, and Corn",
        "Sesame Oil",
        "Soy Sauce",
        "White Pepper",
        "White Onion",
        "Green Onion",
        "Garlic"
     ]
  },
  {
     "Name" : "Greek Night",
     "Ingredients" : [
        "White Rice",
        "Chicken",
        "Zucchini",
        "Yellow Squash",
        "Small Tomatoes",
        "Tzatziki",
        "Pita"
     ]
  },
  {
     "Name" : "Breakfast Sandwich",
     "Ingredients" : [
        "Eggs",
        "Bread: English Muffin, Sandwich Bread",
        "Avocado",
        "Spinach",
        "Tomatoes"
     ]
  },
  {
     "Name" : "Caprese Salad",
     "Ingredients" : [
        "Small Tomatoes",
        "Mozzarella Balls",
        "Basil"
     ]
  },
  {
     "Name" : "BBQ Chicken",
     "Ingredients" : [
        "Chicken",
        "BBQ sauce",
        "Rice",
        "Green Beans"
     ]
  },
  {
     "Name" : "Teriyaki Chicken Rice Bowl",
     "Ingredients" : [
        "Chicken",
        "Teriyaki sauce",
        "Rice",
        "Bell Peppers"
     ]
  },
  {
     "Name" : "Pasta Primavera",
     "Ingredients" : [
        "Chicken",
        "Pasta",
        "Green Beans",
        "Carrots",
        "Zucchini",
        "Yellow Squash",
        "Small Tomatoes",
        "Lemon Juice",
        "Basil and Parsley"
     ]
  },
  {
     "Name" : "Pizza",
     "Ingredients" : [
        "Pizza Dough",
        "Marinara Sauce",
        "Mozzarella",
        "Toppings: Chicken/Broccoli, Basil, Sausage/Pepper, Prosciutto/Arugula"
     ]
  },
  {
     "Name" : "Turkey Sandwich",
     "Ingredients" : [
        "Bread - Sandwich, Fresh Bread",
        "Sliced Turkey",
        "Lettuce",
        "Tomato",
        "Avocado"
     ]
  },
  {
     "Name" : "Salmon Sandwich 1",
     "Ingredients" : [
        "Everything Bagel",
        "Smoked Salmon",
        "Cream Cheese",
        "Arugula",
        "Onion",
        "Capers",
        "Dill"
     ]
  },
  {
     "Name" : "Salmon Sandwich 2",
     "Ingredients" : [
        "Fresh Bread",
        "Smoked Salmon",
        "Goat Cheese",
        "Cucumber",
        "Lemon",
        "Dill"
     ]
  },
  {
     "Name" : "Egg Salad Sandwich",
     "Ingredients" : [
        "Bread",
        "Eggs",
        "Mayo",
        "Mustard",
        "Green Onion",
        "Paprika or Dill"
     ]
  },
  {
     "Name" : "Stuffed Peppers",
     "Ingredients" : [
        "Bell Peppers",
        "Rice",
        "Ground Beef",
        "Tomato Sauce"
     ]
  },
];
