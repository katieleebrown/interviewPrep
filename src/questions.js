export default [
    {
        id: 1,
        question: 'Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one instead of the other?',
        answer: `forEach executes a function once for each element in an array, while map returns a new array with the results of calling a function on every element in the array. Map is great for transforming an array in place. If you're manipulating the elements of an array, this is the way to go. It also allows you to chain methods. I generally use forEach when I either want to keep the original array, am trying to reduce memory use, or am building components.`
    },
    {
        id: 2,
        question: 'Can you give an example for destructuring an object or an array?',
        answer: 'React props are a great example - you send props through, and in your component you can either take in (props) or destructure props so you can reference those individual key-value pairs like ({ title, color, onClick }). For me, this helps me to make sure I know all of the elements coming in one by one, and am not passing unnecessary props through components.'
    },
    {
        id: 3,
        question: 'Can you give an example of a curry function and why this syntax offers an advantage?',
        answer: 'Currying is a way of translating a function, f(a,b,c) into f(a)(b)(c) and often used to get partials of a function.'
    },
    {
        id: 4,
        question: 'Can you name two programming paradigms important for JavaScript app developers?',
        answer: 'Imperative and Declarative. Imperative (or procedural) covers OOP, procedural programming, and parallel processing. Declarative (or functional) covers logic, functional, and database programming. JS is a multi-paradigm language, meaning it supports both OOP with prototypal inheritance as well as functional programming.'
    },
    {
        id: 5,
        question: 'Consider HTML5 as an open web platform. What are the building blocks of HTML5?',
        answer: 'Tags, Elements, and Attributes. Tags: labels for the brackets letting the browser know what kind of element is being rendered. Elements: the entirety of the tag from opening to closing bracket. Attributes: properties of an element that help us define specific information.'
    },
    {
        id: 6,
        question: 'Describe BFC (Block Formatting Context) and how it works.',
        answer: `Block Formatting Context is part of the visual CSS rendering of a page. It is the region in which the layout of block boxes occurs and in which floats interact with other elements. Generally this relates to best practices for how you code your elements so nested blocks don't overflow.This generally isn't a concern outside of floats.`
    },
    {
        id: 7,
        question: 'Describe event bubbling.',
        answer: 'When you have events (like onClick) on nested elements (like a button inside of a div), the event on the child triggers before the event on the parent.'
    },
    {
        id: 8,
        question: 'Describe z-index and how stacking context is formed.',
        answer: 'Z-index is a CSS property used to stack items intentionally. The highest z-index number goes on top, followed by the next highest and so on. '
    },
    {
        id: 9,
        question: 'Difference between document load event and document DOMContentLoaded event?',
        answer: 'Document load event fires once the whole page has loaded, including dependent resources like stylesheets and images. DOMContentLoaded fires as soon as the DOM has loaded, not waiting for the additional resources'
    },
    {
        id: 10,
        question: 'Describe the difference between setImmediate() vs setTimeout()?',
        answer: 'setImmediate() runs independent of the event loop, and uses an API that schedules callbacks to execute after the poll phase. setTimeout() schedules a script to run after a minimum threshold of time (in ms) has elapsed.setImmediate will always run before any timers if scheduled within an I/O cycle, independently of how many timers are present'
    }
]