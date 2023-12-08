# typeScriptBasics
learning typescript

- TypeScript is being converted into JavaScript - a dev tool; helps you to write better JavaScript Code / wrapper around the JavaScript
- You can use file.ts oder file.tsx (used for components in react)
- playground > typescriptlang.org
- you can install typescript globally but if you have a concrete project f.ex. react, a seperate config is needed to specify exactly what you want in your project
    - look at typescript website for config 
    - click on playground and there you find Config
- install TypeScript globally > (sudo) npm install -g typescript
- start TypeScript compiler > npx tsc (npx = node package executer)
- Types - all of them are types > cf. docs/Basics 
    - number
    - string
    - boolean

    - null
    - undefined
    - void

    - object
    - array
    - tuples

    - Don't use > Any
    - Never
    - Unkown 
- syntax > let variableName: type = value; // But typescript also infers the type from the first value you attribute to a variable without defining the type
- typescript makes sense when working with a team
    a) function parameters > static type makes sure that a function will only accept values of the defines types
    b) know that a function will return a certain type
- once you have defined a variable type (f.ex. let greetings: string), if then you try to apply a method with greetings.method, the IDE (vs code) will only propose string methods
- number: javascript does not hat integer and float - you always define them as numerber
- any keyword > not a good practice because it will take out the static typing
- typescript in real projects
    1. Terminal> tsc --init // This will create a tsconfig.json   
    - You have a lot of options - same as you can find on typescript website under tsconfig
    2. setup a node.js project with npm init
    3. create an index.html // get the basic boilerplate code by tapping "!" and tab
    4. load a script file in the body of the html 
    5. create 2 folder which you normally find in any frontend project
        - mkdir src // for source code > create file index.ts
        - mkdir dist // for distribution package > create file index.js
    6. now ts compiler must know that it has to distribute the compiled ts code into the ./dist/index.js file
        - in tsconfig
        - "outDir": "./dist"
        - start compiler with> tsc -w index.ts // the option -w puts the compiler in watch mode which includes then the tsconfig.json > but other options of the compiler also do
    7. Start a server on localhost where I can run the project > a lot of packages available for that with node.js > we run lite-server
        - npm install lite-server
        - start server on localhost > in package.json > add scrip start lite-server
        - or install a vs code package called "live server" > right click on index.html
    8. Use console in browser
        - right click > inspect
        - 


