var snacks = [{
    name: 'Nos',
    type: 'Energy Drink',
    container: 'Tin Can',
    flavor: 'Pineapple',
    nutritionFacts: {
        calories: 100,
        totalFat: 0 + 'g',
        sodium: 200 + 'mg',
        totalCarb: 27 + 'g',
        sugars: 27 + 'g',
        protein: 0 + 'g'
    },
    servings: {
        total: 2,
        size: '8 fl. oz'
    },
    ingredients: ['carbonated water', 'high fructose corn syrup', 'citric acid', 'sodium citrate', 'sodium hexametaphosphate (preservative)', 'natural flavors', 'taurine', 'caffeine',
        'gum arabic', 'potassium sorbate (preservative)', 'ester gum', 'sucralose', 'yellow #5', 'inositol', 'calcium disodium edta (perservative)', 'pryidoxine hydrochloride (VIT. B6)',
        'yellow #5', 'guarana extract', 'cyanocobalamin (VIT. B12)'],
        delicious: true
},
{
    name: 'Fritos',
    type: 'Corn Chip',
    container: 'Bag',
    flavor: 'Original',
    nutritionFacts: {
        calories: 160,
        totalFat: 10 + 'g',
        sodium: 170 + 'mg',
        totalCarb: 16 + 'g',
        sugars: 0 + 'g',
        protein: 2 + 'g'
    },
    servings: {
        total: 2,
        size: '28g'
    },
    ingredients: ['corn', 'corn oil', 'salt'],
    delicious: true
}];

var snackOptions ={
    munchies: snacks[1],
    drink: snacks[0]
};