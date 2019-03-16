# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project. 

1.1
ReactDOM.render creates a new instance of the Cart component and renders it in the #root div.

1.2
Semantic UI does a lot of the work for me so I don't have to worry about making the styling from scratch. However, since I don't understand how Semantic UI works, I am limited by what features/functionality it provides and I can't customize it beyond the customizations they provide by default.

1.3
If we put onClick={addToCart(counter)}, React would call addToCart(counter) while rendering the component in order to initialize the onClick function and then nothing would happen when the component's button was clicked (unless the return value of addToCart(counter) was a function). If I didn't need to pass in an argument, I could just use onClick={addToCart} but because I need to pass in counter and then set the counter in render to the return value of the function call, I have to use onClick={() => counter = addToCart(counter)}.

1.4