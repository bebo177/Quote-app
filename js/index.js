var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "--Oscar Wilde",
  },
  {
    quote:
      "if you can't handle me at my worst, then you don't deserve me at my best.",
    author: "--Marilyn Monroe",
  },
  { quote: "So many books, so little time.", author: "--Frank Zappa" },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "--Albert Einstein",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "--Marcus Tullius Cicero",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter",
    author: "--Bernard M. Baruch",
  },
  {
    quote:
      "Sing like there's nobody listening,\nAnd live like it's heaven on earth.",
    author: "--William W. Purkey",
  },
  {
    quote:
      " you can't fall asleep because reality is finally better than your dreams.",
    author: "--Dr. Seuss",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "--Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "--Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "--Robert Frost",
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "--J.K. Rowling",
  },
  {
    quote:
      "Don’t walk in front of me I may not follow Don’t walk behind me I may not lead\nWalk beside me just be my friend",
    author: "--Albert Camus",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "--Mark Twain",
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did",
    author: "--Maya Angelou",
  },
  {
    quote:
      'Friendship is born at the moment when one man says to another "What! You too? I thought that no one but myself ',
    author: "--C.S. Lewis",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "--Oscar Wilde",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "--Elbert Hubbard",
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "--Oscar Wilde",
  },
  {
    quote: " Hate cannot drive out hate: only love can do that.",
    author: "--Martin Luther King Jr.",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "--Mahatma Gandhi",
  },
  {
    quote: "We accept the love we think we deserve.",
    author: "--Stephen Chbosky",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "--Friedrich Nietzsche",
  },
  {
    quote:
      "I am so clever I don't understand a single word of what I am saying.",
    author: "--Oscar Wilde",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "--Ralph Waldo Emerson",
  },
  {
    quote:
      "Insanity is doing the same thing, over and over again, but expecting different results.",
    author: "--Narcotics Anonymous",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are.",
    author: "--Andre Gide",
  },
];

// function to generate quotes and author's name

var LastQuote;
function getQuotes() {
  var num;
  do {
    num = Math.floor(Math.random() * quotes.length);
  } while (num === LastQuote);
  LastQuote = num;
  document.getElementById("quote").innerHTML = quotes[num].quote;
  document.getElementById("author").innerHTML = quotes[num].author;
}
