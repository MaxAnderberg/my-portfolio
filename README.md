<img width="100%" src="/images/Screenshot 2021-09-14 at 14.11.25.png"/>

# My Portfolio

My personal portfolio page built with Gatsby, React and SASS. 

## Demo

You can find my hosted portfolio over at [www.maxanderberg.se]()

# Run it locally

Below you'll find instructions to run the website locally or to deploy it on a server of your choice. Feel free to use this repo as a template for your own portfolio.

In order to make the process as smooth as possible I suggest that you start with setting up a contentful account: 

1. Go to [Contentful](https://www.contentful.com/) and register for an acocunt and create a space
2. Now you will need a content model that looks something like this: <br> <img src="/images/Screenshot 2021-09-14 at 14.51.24.png"/>
3. Find the Space id and your access token for this space in settings and save these somewhere handy, you'll need them in a minute

> Note that you will have to create posts in contentful in order for the portfolio page to be able to display anything.

Now that you got contentful up and running you can start setting up your local development:

1. Clone the repo
2. Run the following command in your terminal to install the depencencies: <br> `npm install`
3. create a `.env.development` and a `.env.production` file in the root directory: <br> ```
SPACE_ID=<Your Contentful Space ID>
ACCESS_TOKEN=<Your Contentful ACCESS TOKEN>```
5. Install the [Gatsby CLI](https://www.npmjs.com/package/gatsby):<br>`npm install -g gatsby-cli
`
4. start the development server: <br>`gatsby development`

That's it! The server should now be running on `http://localhost:8000/`.
