# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project. 

1.1
ReactDOM.render creates a new instance of the Cart component and renders it in the #root div.

1.2
Semantic UI does a lot of the work for me so I don't have to worry about making the styling from scratch. However, since I don't understand how Semantic UI works, I am limited by what features/functionality it provides and I can't customize it beyond the customizations they provide by default.

1.3
If we put onClick={addToCart(counter)}, React would call addToCart(counter) while rendering the component in order to initialize the onClick function and then nothing would happen when the component's button was clicked (unless the return value of addToCart(counter) was a function). If I didn't need to pass in an argument, I could just use onClick={addToCart} but because I need to pass in counter and then set the counter in render to the return value of the function call, I have to use onClick={() => counter = addToCart(counter)}.

1.4
(a) I used the map feature to map each product in the ProductData to a Product component.

(b) Pulling data from an object allows for more flexibility since I can just update one file and it will update the website. It also means we could pull in external data from another source (like an API) to dynamically update the website with new data.

2.0
An example would be the clap button on Medium. It would need state to keep track of how many clicks have been registered.

2.1
We accomplish parent-to-child communication using props. To accomplish child-to-parent communication, we have to use a function passed into the child from the parent through props that updates the parent's state. We can't use the same mechanism because props are only passed one way (from parent to child).

2.2
Iterate through the list to see if any of the items in the dictionary have a productName that matches the product that was clicked. If one is found, implement the count of that item. If not add a new item to the list with the productName, price, and count of 1 for that product.