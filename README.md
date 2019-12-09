Project Description
----------
- A web app made using Django and Javascript simulating a restaurant ordering system. Users can browse the restaurant’s menu, add items to their cart, and submit their orders. Meanwhile, the restaurant owners can add and update menu items (using the Django Admin interface), and view orders that have been placed (using page in the interface). Styling is done using Bootstrap.

Current Progress
----------------
![Alt Text](https://media.giphy.com/media/SxFc3MMdpCDxoEUlkj/giphy.gif)

- Adding Items: Using Django Admin, site administrators can add, update, and remove items on the menu.
- Registration, Login, Logout: Site users can register for the web application with a username, password, first name, last name, and email address.
- Shopping Cart: Once logged in, users see a representation of the restaurant’s menu, where they can add items (along with toppings or extras, if appropriate) to their virtual “shopping cart.” The contents of the shopping are saved even if a user closes the window, or logs out and logs back in again.
- Placing an Order: Once there is at least one item in a user’s shopping cart, users can place an order, whereby the user is asked to confirm the items in the shopping cart.
- Viewing Orders: Site administrators can view any orders that have already been placed. Site users can see their history of orders by navigating to the same page.

Things to do
------------
- implement stripe API to the checkout section
- allow for coupon codes
- host website on heroku to let YOU try it out!!!

Extra
-----
Full Video demonstration : https://youtu.be/c-sa5OqlkhQ
