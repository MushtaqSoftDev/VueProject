# Classes:
# strikeout:
We use class in our shopping list app for good user experience. We add class in list item [li].
We set strikeout: item.purchased in our list item [li] and in main.js file in data() property we set purchased: true/false in items and in style.css file we set class:strikeout style as line-through means
the user has an ability to make a line on an item after purchasing.
Whenever purchased is true means the user buy that item otherwise false.

# priority:
We add priority: item.highPriority in list item [li] and in our main.js file we add highPriority=true/false in items and in saveItem() methods we add this highPriority property to allow the user to set the priority of new items that user want to add as a normal product or highPriority product and in our style.css file we set .priority color: as like orange as user click on high priority checkbox the new product color is.

# togglePurchased(item) 
We set a method togglePurchased(item) that allow user to interact with items to make it purchase or not.The user has an ability to strikeout the product that he has purchased the product and make the product line-through property and whenever he want to unmark that property.

# Components
Components are the building blocks of an app.
We make directory "components" and make a file "ProductDisplay.js" and pass the whole data from index.html and main.js into ProductDisplay.js. But first we have to create our first component called 'product-display' and make his instance in index.html.
By adding components in our app we made a lot time saving just only to make instance of our component and it will cover whole code, and each compoenent working independently. 