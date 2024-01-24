# How to setup tailwind css

Step 1.Run these commands

```
npm install -D tailwindcss
npx tailwindcss init
```

Step 2. A tailwind.config.js file will be created and in the `content: ["*.html"]` to include one file
`content: ["./src/**/*.{html,js}"],`, to
include multiple files.

Step 3.Create a file in src/input.css and add below code

```@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4. Execute the below command

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Upon execution, a Output.css file will get created in src

Step 5.Add the link of output.css in your main index.html
