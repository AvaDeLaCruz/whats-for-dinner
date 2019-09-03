// // // recipes:
// // sausage and pepper sandwich
// smoked salmon sandwich
// turkey sandwich
// // caprese salad
// chicken salad
// egg salad
// pasta primavera
// pasta w marinara
// pasta w meat sauce
// tj fresh ravioli?
// chicken and broccolini
// gnocci w some sauce idk what yet
// fried rice
// bbq chicken w rice and green beans
// terriaki chicken rice bowl w peppers
// chicken pot pie - frozen or homemade
// tofu stir fry
// tj shrimp stir fry
// agedashi tofu
// beef and broccoli
// greek night
// pizza
// tj chicken burrito bowl
// egg sandwich
// tj Burrata, Prosciutto, and Arugula Flatbread
// stuffed peppers
// tj butter chicken
// tj seafood paella


var recipeBook = [
   {
      "Name" : "Sausage and Pepper Sandwich",
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
   }
];


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
