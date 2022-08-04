# 2 variations of composition examples for React and JavaScript

Please consider supporting my work so I can continue to bring you high
quality content! It's only a buck to you, but it means the world to me.

## You can give me a buck or more with this link ❤️

🔗 https://bit.ly/3vFO8sO

## Ok, so I see some code, now what?

To run the code, clone it down, cd into the base folder, and run

```
yarn && yarn dev
```

Open the code in VS Code and a browser set to http://localhost:3000

---

### The first type of composition is found in the ui/forms folder

- /text-field/index.jsx
- /with-validation.jsx

This is classical composition via a _higher order function_. We _pass_ in the Component we want decorated with a validator. The component that we pass in just has to have a value and an onChange for it to work.

You can find examples of simple validators in plain JavaScript in the /modules/validations.js file.

---

### The second type of composition is found in the ui/button folder

- /index.jsx
- /small.jsx

This is the variant pattern, or the decoration pattern, a type of "inheritance" I learned from writing LISP years ago. The "base class" Button contains all the logic, and the common presentation "logic", in our case Tailwind"

The variant "class" _decorates_ the "base class" with additional logic or presenation "logic", which in our case would be the styles. Anything the variant doesn't need to access, is just passed through, or \*delegated" to the "base class".first-letter:

Remember, this is essentially a pattern out of my own head based on a "dead" language that had no idea what JavaScript, CSS, or HTML would be. So I have to use words that aren't actually correct for what we are doing today, thus all the damn quotes! 😁

---

### I also gave you a second example of this pattern!

- /text-field/index.jsx
- /integer-field/index.jsx

The IntegerField decorates the TextField to make it only accept 0-9

---

Please consider supporting my work so I can continue to bring you high
quality content! It's only a buck to you, but it means the world to me.

## You can give me a buck or more with this link ❤️

🔗 https://bit.ly/3vFO8sO
