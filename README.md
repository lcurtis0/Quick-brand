# Quick-brand


├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions   

- ask input and list questions on index.js 

- make init function that has a .then that send the info to a function in shapes.js file [generateMarkdown(answers)]

- In Shapes.js make function for each shape and color and return the value (cordanates) for each shape

- In shapes.test.js use describe and it to test the shape value (arrange,act, assert)

const shape = new Triangle();
shape.setColor("blue"); 
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

------------------------------------------------------------

class ForumItem {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}

class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }
}

const newPost = new BlogPost(
  'John Doe',
  'My Fourth Post',
  'Dogs, cats, and snakes are super cute!',
  '12/19/2021'
);

- If input was not a six digit number or color variety then throw error in Shape.js

class BlogPost {
  // Instantiates a BlogPost and validates input.
  constructor(title, text, author, createdOn) {
    if (title.length < 3) {
      throw new Error('`title` must contain at least 3 characters.');
    }

    if (text.length < 3) {
      throw new Error('`text` must contain at least 3 characters.');
    }

    // author must contain at least 3 characters, only have letters, numbers, and underscore. Author must begin with a
    // letter.
    if (!/[a-z][a-z0-9_]{2,}/i.test(author)) {
      throw new Error(`Invalid author "${author}"`);
    }
  }
}


- Finally have svg file created with 

<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>