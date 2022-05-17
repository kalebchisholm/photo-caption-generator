# photo-caption-generator

This application is an online photo caption generator for social media posts built for the Fall 2022 Shopify Front End Intern Challenge. It lets users enter topics, themes/genres, nouns, short sentences or even hashtags revolving around their photos and returns captions that would best suit them. The Photo Caption Generator provides a clean and easy way for users to get caption ideas for their next social media posts. Check out photo-caption-generator [here](https://photo-caption-generator.vercel.app/).

## How it was Built
The application was built using [React](https://reactjs.org/) and [ChakraUI](https://chakra-ui.com/) and uses the [OpenAI API](https://openai.com/api/) which provides access to GPT-3. 

## How it Works
The application runs client-side and does not have a backend server. Upon user prompt submissions, the app will make an asynchronous request to the "text-currie-001" engine and deliver its response back to the user.

OpenAI provides a convenient alternative to using fetch. The API request is made using:

```javascript

  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
      apiKey: process.env.REACT_APP_YOUR_API_KEY
  });
  
  const openai = new OpenAIApi(configuration)
  
  openai.createCompletion("text-curie-001", {
    prompt: 'this is an example prompt',
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response) => {
      // handle response
    })

```

The app is delivered to the user using React and is made clean and simple by utilizing the ChakraUI library.

## Features
* Input works on themes/genres, nouns, short sentences that describe the context of the photo, and hashtags.
* Displays all generated caption results in a list sorted from newest (top) to oldest (bottom).
* Presets for common photo themes/genres are available for ease of use.

## Running the App
1. Clone the repository ```git clone https://github.com/Kaleb-Chisholm/photo-caption-generator.git```
2. Navigate into the newly cloned repository and install dependencies using ```npm ci```
3. Run the app using ```npm start```
4. Go to localhost:3000 in your web browser

Important Note: You will need a ```.env``` file located in the root directory where you place your OpenAI API Secret Key. 

## Wishlist (To-do)
These are the things I would like to improve upon the app if I had the time to carry out:
1. Utilize local storage to save responses if the user leaves or reloads the page.
2. Utilize Redux (or Contexts) to mitigate prop drilling.
3. Add a light/dark mode toggle feature.
4. Add animations using [Framer Motion](https://www.framer.com/motion/)
5. Allow the user which GPT-3 engine they would like to use for their captions.


## Note
When using Google Chrome as a web-browser, an error is displayed in the terminal stating: ```Refused to set unsafe header "User-Agent"```. It does not effect the functionality of the app and for the purposes of this app, should not pose any security issues. This error message also appears in Microsoft Edge but does not appear in Firefox's console. No other browsers were tested.
