export const questionData = {
  hardQuestions: [
    {
      question: "What are the different data types present in Javascript?",
      answer: "String, Number, BigInt, Boolean, Undefined, Null, Object",
    },
    {
      question: "Explain Hoisting in javascript",
      answer:
        "Hoisting is the default behavior of javascript where all the variable and function declarations are moved to the top. This means that regardless of where the variables and functions are declared, they are moved to the top of the scope.",
    },
    {
      question: 'What is the difference between the "==" and "===" operators?',
      answer:
        'Both are comparison operators. The difference between them is that "==" is used to compare values only while "===" is used to compare both values and types.',
    },
    {
      question: "What does npm stand for?",
      answer: "Node Package Manager",
    },
    {
      question: "What is responsive design?",
      answer:
        "Responsive design is a web development technique that creates websites compatible with multiple devices with different screen sizes. Responsive websites are designed to look good on both desktop and mobile devices.",
    },
    {
      question: "What are undeclared and undefined variables?",
      answer: `Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.

        Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.`,
    },
    {
      question: "Which symbol is used for comments in Javascript?",
      answer: `// for Single line comments and

      /* Multi
      
      Line
      
      Comment
      
      */`,
    },
    {
      question: "How can the style/class of an element be changed?",
      answer: `It can be done in the following way:

      document.getElementById("myText"). style. fontSize = "20";
      or
      
      document. getElementById ("myText"). className = "anyclass";`,
    },
  ],
  mediumQuestions: [],
  easyQuestions: [],
}
