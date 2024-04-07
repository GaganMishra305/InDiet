from tensorflow.keras.utils import load_img,img_to_array
from tensorflow.keras.models import load_model
from keras.optimizers import SGD

s = """Apple Pie,~2.5 calories per gram
Baby Back Ribs,~3.5 calories per gram
Baklava,~5 calories per gram
Beef Carpaccio,~2 calories per gram
Beef Tartare,~2.5 calories per gram
Beet Salad,~0.5 calories per gram
Beignets,~3.5 calories per gram
Bibimbap,~1.5 calories per gram
Bread Pudding,~2.5 calories per gram
Breakfast Burrito,~2 calories per gram
Bruschetta,~1 calorie per gram
Caesar Salad,~0.5 calories per gram
Cannoli,~3.5 calories per gram
Caprese Salad,~1 calorie per gram
Carrot Cake: ~3.5 calories per gram
Ceviche: ~0.5 calories per gram
Cheese Plate: ~3.5 calories per gram
Cheesecake: ~3.5 calories per gram
Chicken Curry: ~1.5 calories per gram
Chicken Quesadilla: ~2.5 calories per gram
Chicken Wings: ~3 calories per gram
Chocolate Cake: ~4 calories per gram
Chocolate Mousse: ~3 calories per gram
Churros: ~4 calories per gram
Clam Chowder: ~1.5 calories per gram
Club Sandwich: ~2.5 calories per gram
Crab Cakes: ~2 calories per gram
Creme Brulee: ~3.5 calories per gram
Croque Madame: ~3 calories per gram
Cupcakes: ~3.5 calories per gram
Deviled Eggs: ~1 calorie per gram
Donuts: ~4 calories per gram
Dumplings: ~2.5 calories per gram
Edamame: ~1 calorie per gram
Eggs Benedict: ~2.5 calories per gram
Escargots: ~1 calorie per gram
Falafel: ~2 calories per gram
Filet Mignon: ~2.5 calories per gram
Fish and Chips: ~2.5 calories per gram
Foie Gras: ~4.5 calories per gram
French Fries: ~3.5 calories per gram
French Onion Soup: ~1 calorie per gram
French Toast: ~2 calories per gram
Fried Calamari: ~2.5 calories per gram
Fried Rice: ~1.5 calories per gram
Frozen Yogurt: ~1 calorie per gram
Garlic Bread: ~4 calories per gram
Gnocchi: ~1.5 calories per gram
Greek Salad: ~0.5 calories per gram
Grilled Cheese Sandwich: ~3 calories per gram
Grilled Salmon: ~2 calories per gram
Guacamole: ~2 calories per gram
Gyoza: ~2 calories per gram
Hamburger: ~3.5 calories per gram
Hot and Sour Soup: ~0.5 calories per gram
Hot Dog: ~3.5 calories per gram
Huevos Rancheros: ~2 calories per gram
Hummus: ~1.5 calories per gram
Ice Cream: ~2 calories per gram
Lasagna: ~1.5 calories per gram
Lobster Bisque: ~1 calorie per gram
Lobster Roll Sandwich: ~2.5 calories per gram
Macaroni and Cheese: ~3 calories per gram
Macarons: ~4 calories per gram
Miso Soup: ~0.5 calories per gram
Mussels: ~0.5 calories per gram
Nachos: ~2.5 calories per gram
Omelette: ~1.5 calories per gram
Onion Rings: ~2.5 calories per gram
Oysters: ~0.5 calories per gram
Pad Thai: ~2 calories per gram
Paella: ~1.5 calories per gram
Pancakes: ~2 calories per gram
Panna Cotta: ~3.5 calories per gram
Peking Duck: ~4 calories per gram
Pho: ~1 calorie per gram
Pizza: ~2.5 calories per gram
Pork Chop: ~2.5 calories per gram
Poutine: ~2.5 calories per gram
Prime Rib: ~2.5 calories per gram
Pulled Pork Sandwich: ~2.5 calories per gram
Ramen: ~1 calorie per gram
Ravioli: ~1.5 calories per gram
Red Velvet Cake: ~4 calories per gram
Risotto: ~1.5 calories per gram
Samosa: ~2 calories per gram
Sashimi: ~1 calorie per gram
Scallops: ~1 calorie per gram
Seaweed Salad: ~0.5 calories per gram
Shrimp and Grits: ~2 calories per gram
Spaghetti Bolognese: ~1.5 calories per gram
Spaghetti Carbonara: ~2 calories per gram
Spring Rolls: ~1.5 calories per gram
Steak: ~2.5 calories per gram
Strawberry Shortcake: ~3.5 calories per gram
Sushi: ~1 calorie per gram
Tacos: ~2 calories per gram
Takoyaki: ~2.5 calories per gram
Tiramisu: ~3 calories per gram
Tuna Tartare: ~1.5 calories per gram
Waffles: ~2 calories per gram
"""
calories = s.splitlines()
s = "These values are approximations and can vary based on factors such as ingredients and cooking methods."
values = [
    {"name": "Apple pie", "score": 7.674},
    {"name": "Baby back ribs", "score": 61.785},
    {"name": "Baklava", "score": 45.3},
    {"name": "Beef carpaccio", "score": 0},
    {"name": "Beef tartare", "score": 100},
    {"name": "Beet salad", "score": 50.3215},
    {"name": "Beignets", "score": 38.172},
    {"name": "Bibimbap", "score": 100},
    {"name": "Bread pudding", "score": 33.1005},
    {"name": "Breakfast burrito", "score": 42.4635},
    {"name": "Bruschetta", "score": 100},
    {"name": "Caesar salad", "score": 38.9},
    {"name": "Cannoli", "score": 15.969},
    {"name": "Caprese salad", "score": 44.419},
    {"name": "Carrot cake", "score": 0},
    {"name": "Ceviche", "score": 100},
    {"name": "Cheesecake", "score": 4.984},
    {"name": "Cheese plate", "score": 0},
    {"name": "Chicken curry", "score": 100},
    {"name": "Chicken quesadilla", "score": 44.8},
    {"name": "Chicken wings", "score": 44.92},
    {"name": "Chocolate cake", "score": 0},
    {"name": "Chocolate mousse", "score": 15.428},
    {"name": "Churros", "score": 42.2},
    {"name": "Clam chowder", "score": 45.9795},
    {"name": "Club sandwich", "score": 100},
    {"name": "Crab cakes", "score": 43.058},
    {"name": "Creme brulee", "score": 100},
    {"name": "Croque madame", "score": 21.875},
    {"name": "Cup cakes", "score": 8.639},
    {"name": "Deviled eggs", "score": 27.29},
    {"name": "Donuts", "score": 1.177},
    {"name": "Dumplings", "score": 54.4595},
    {"name": "Edamame", "score": 69.5485},
    {"name": "Eggs benedict", "score": 100},
    {"name": "Escargots", "score": 100},
    {"name": "Falafel", "score": 18.536},
    {"name": "Filet mignon", "score": 49.44},
    {"name": "Fish and chips", "score": 60.0},
    {"name": "Foie gras", "score": 6.813},
    {"name": "French fries", "score": 39.2535},
    {"name": "French onion soup", "score": 100},
    {"name": "French toast", "score": 44.0465},
    {"name": "Fried calamari", "score": 100},
    {"name": "Fried rice", "score": 39.316},
    {"name": "Frozen yogurt", "score": 34.66},
    {"name": "Garlic bread", "score": 20.834},
    {"name": "Gnocchi", "score": 48.176},
    {"name": "Greek salad", "score": 54.049},
    {"name": "Grilled cheese sandwich", "score": 36.04},
    {"name": "Grilled salmon", "score": 71.9135},
    {"name": "Guacamole", "score": 49.271},
    {"name": "Gyoza", "score": 100},
    {"name": "Hamburger", "score": 39.7435},
    {"name": "Hot and sour soup", "score": 100},
    {"name": "Hot dog", "score": 54.41},
    {"name": "Huevos rancheros", "score": 100},
    {"name": "Hummus", "score": 22.408},
    {"name": "Ice cream", "score": 29.724},
    {"name": "Lasagna", "score": 54.1585},
    {"name": "Lobster bisque", "score": 100},
    {"name": "Lobster roll sandwich", "score": 100},
    {"name": "Macaroni and cheese", "score": 48.5985},
    {"name": "Macarons", "score": 100},
    {"name": "Miso soup", "score": 60.172},
    {"name": "Mussels", "score": 100},
    {"name": "Nachos", "score": 100},
    {"name": "Omelette", "score": 58.44},
    {"name": "Onion rings", "score": 29.84},
    {"name": "Oysters", "score": 100},
    {"name": "Pad thai", "score": 43.65},
    {"name": "Paella", "score": 22.2175},
    {"name": "Pancakes", "score": 32.935},
    {"name": "Panna cotta", "score": 30.1},
    {"name": "Peking duck", "score": 100},
    {"name": "Pho", "score": 100},
    {"name": "Pizza", "score": 38.0215},
    {"name": "Pork chop", "score": 100},
    {"name": "Poutine", "score": 20.585},
    {"name": "Prime rib", "score": 93.75},
    {"name": "Pulled pork sandwich", "score": 72.2545},
    {"name": "Ramen", "score": 37.2375},
    {"name": "Ravioli", "score": 39.765},
    {"name": "Red velvet cake", "score": 100},
    {"name": "Risotto", "score": 25.0425},
    {"name": "Samosa", "score": 100},
    {"name": "Sashimi", "score": 100},
    {"name": "Scallops", "score": 71.6055},
    {"name": "Seaweed salad", "score": 60.175},
    {"name": "Shrimp and grits", "score": 53.4535},
    {"name": "Spaghetti bolognese", "score": 51.414}
]


model = load_model('models/model_food_101.h5', compile=False)
opt = SGD(lr=.1, momentum=.9)
model.compile(optimizer=opt, loss='categorical_crossentropy', metrics=['accuracy'])
