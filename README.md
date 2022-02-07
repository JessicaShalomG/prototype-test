<h1 align="center">
   Prototype Test 📖 
</h1>

`Prototype-test` is created with [Next Js](https://nextjs.org/docs/api-reference/create-next-app) comand `yarn create next-app --typescript` that creates a basic proyect using typescript


## 💾 Requirements

- [Node.js 12.22.0 or later](https://nodejs.org/en/)

## ☕️ Install and develop

1. Use the `yarn` to install all the requirements 

    ```bash
    yarn # This installs all dev requirements.
    ```

    You can explore the other commands on the file to improve your developing experience.

2. Develop - use the `yarn dev` command to start the development server and start the proyect locally, will normally start running on http://localhost:3000

    ```bash
    yarn dev # This run proyect on local 
    ```

3. Use `yarn format`  to format and make code with better style ( there is a file for .prettierrc.json where you can configure options) uses [Prettier](https://prettier.io/docs/en/index.html)

    ```bash
    yarn format # will format files using prettier
    ```

## 🗂 Structure (WIP)
```
    .
    ├── public
    ├── src
        ├── axios
        ├── components
        ├── helperFunctions
        ├── models
        ├── pages
        ├── redux
        ├── styles
        ├── views
```

- `public`: Static files and Images.
- `src`: Base code of the project.
- `axios`: axios interceptors.
- `components`: Components used for the views.
- `helperFunctions`: Functions that are shared to standarize code or style.
- `models`: Models to hold and format json responses data obtained from API requests.
- `pages`: Each page is associated with a route based on its file name (quoted from NextJs documentation).
- `redux`: Holds files needed for redux like selectors, reducers store and redux hooks to help keep a global state and make code cleaner.
- `styles`: Holds all style sheets for components and views
- `views`: Main Views components for each page.


## 🧪 Description
  I decided to use NextJs for this prototype test because it comes already configured with the basic things to start developing, suports typescript already. It reduces loading page time and user can see content faster, that also improves performance.

  I used Typescript to reduce errors and also redux to maintain a global state and manipulate it from diff views instead of having to pass props around and also to make it cleaner, for the requests i decided to use axios because its friendly and works well with react, also to make use of axios interceptors on requests and modify the response from the API to obtain desired responce with author signature and only relevant data to be used( one of the requirements). I am also using a hook provided by Next js along with axios useSWRImmutable because is also ready for typescript, it is fast and uses cache. This desitions were taken based on performance and improve user experience.

## ⭐️ Pages

1. ​`​“/”` 
   This is the main/home page that renders the search box (allows you to type in a product name in a serch box and trigger search when you click on the search icon 🔍)
2. `​“/items?search={product-to-look-for}”` 
    This will render the result view with the first four itmes found related to the word that you typed to search for (for the breadcrum i used the name of the category with the most occurrences, but i did not undestand where to get the rest of the info from and i did not reach out since I worked on it during the weekend and today wich im not sure in your country but is a holliday in México)
3. `​“/items/{product-id}”` 
    Displays the details of the product related to the id you provided(I did not undertand alot where to get the info for the breandcrum  in this part 😖)

