const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "A linked list is a collection of:",
        answers: [
            { text: "nodes", correct: true },
            { text: "addresses", correct: false },
            { text: "classes", correct: false },
            { text: "memory variables", correct: false }
        ]
    },
    {
        question: "The address of the first node in the list is stored in a separate location, called the:",
        answers: [
            { text: "key", correct: false },
            { text: "tail", correct: false },
            { text: "head", correct: true },
            { text: "top", correct: false }
        ]
    },
    {
        question: "Because all the elements of a stack are of the same type, you can use a(n) to implement a stack.",
        answers: [
            { text: "struct", correct: false },
            { text: "record", correct: false },
            { text: "class", correct: false },
            { text: "array", correct: true }

        ]
    },
    {
        question: "The general syntax to declare a pointer variable is:",
        answers: [
            { text: "dataType &identifier", correct: false },
            { text: "dataType *identifier;", correct: true },
            { text: "&dataType identifier", correct: false },
            { text: "dataType identifier", correct: false }
        ]
    },
    {
        question: "A queue is a data structure.",
        answers: [
            { text: "First In First Out", correct: true },
            { text: "Last In First Out", correct: false },
        ]
    },
    {
        question: "Whenever a system is modeled on the First In First Out principle, are used.",
        answers: [
            { text: "stacks", correct: false },
            { text: "arrays", correct: false },
            { text: "trees", correct: false },
            { text: "queues", correct: true }
        ]
    },
    {
        question: "A binary search can be performed only on:",
        answers: [
            { text: "unordered lists", correct: false },
            { text: "ordered lists", correct: true },
            { text: "comparable lists", correct: false },
            { text: "arrays", correct: false }
        ]
    },
    {
        question: "Sequential and binary search algorithms are called search algorithms.",
        answers: [
            { text: "cumulative", correct: false },
            { text: "comparison-based", correct: true },
            { text: "compartimentalized", correct: false },
            { text: "key-based", correct: false }
        ]
    },
    {
        question: "In____ , the data is stored within the hash table and no linked structure is used.",
        answers: [
            { text: "closed addressing", correct: false },
            { text: "inverted addressing", correct: false },
            { text: "converted addressing", correct: false },
            { text: "open addressing", correct: true }
        ]
    },
    {
        question: "When we check the array locations t, (t + 1) % HTSize, (t + 2) % HTSize, . . ., (t + j) % HTSize it is called the of the hash table.",
        answers: [
            { text: "probe sequence", correct: true },
            { text: "hash value", correct: false },
            { text: "probe value", correct: false },
            { text: "kindred value", correct: false }
        ]
    },
    {
        question: "Linear probing to avoid collision for a hash table may cause problems.",
        answers: [
            { text: "storage shortage", correct: false },
            { text: "Too complicated", correct: false },
            { text: "element clustering", correct: true },
        ]
    },
    {
        question: "_____is the ability to create new data types from existing data types.",
        answers: [
            { text: "inheritance", correct: true },
            { text: "encapsulation", correct: false },
            { text: "polymorphism", correct: false },
            { text: "information hiding", correct: false }
        ]
    },
    {
        question: "___is the ability to use the same type pointer to point to pointers of different types.",
        answers: [
            { text: "overloading operators", correct: false },
            { text: "polymorphism", correct: true },
            { text: "inheritance", correct: false },
            { text: "encapsulation", correct: false }
        ]
    },
    {
        question: "The components of a class are called the____of the class.",
        answers: [
            { text: "operators", correct: false },
            { text: "objects", correct: false },
            { text: "friends", correct: false },
            { text: "members", correct: true }
        ]
    },
    {
        question: "The members of a class are classified into three categories (public, private, protected) called_____access specifiers.",
        answers: [
            { text: "function", correct: false },
            { text: "object", correct: false },
            { text: "member", correct: true },
        ]
    },
    {
        question: "A(n) ____is a data type that separates the logical properties from the implementation details.",
        answers: [
            { text: "public", correct: false },
            { text: "private", correct: false },
            { text: "protected", correct: false },
            { text: "abstract data type", correct: true }
        ]
    },
    {
        question: "To redefine a public member function of a base class in the derived class, the corresponding function in the derived class must have_____.",
        answers: [
            { text: "the same name, number, and types of parameters", correct: true },
            { text: "only the same name and types of parameters", correct: false },
            { text: "only the same name and number", correct: false },
            { text: "only the same number and types of parameters", correct: false }
        ]
    }
]