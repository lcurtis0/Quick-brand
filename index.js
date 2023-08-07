

function writesvgfile(filename,inputdata){
    fs.writeFile(filename,inputdata)
        .then(()=> console.log("Your file has been tested and created!"))
        .catch ((error)=> console.log("Something went wrong " + error))
    
}



function createDocument(text, children = []) {
    // TODO: Create a new Header
    const newcolor = new ColorItem(); 
    // TODO: Create new TaskListItems from the provided tasks
    const newTaskListItems = items.map(items => {
      return new TaskListItem([items.text], items.hexdecimal); 
    })
    // TODO: Add TaskListItems to a new TaskList
    const newTaskList = new TaskList(TaskListItems);

    return `<svg viewbox="0 0 200 300">

    ${answers.shape}
    

    </svg>
    `;




