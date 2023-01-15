const notes = [];

function saveNote(content, id) {
  if ( id >0 && content!=" ")   //check for not zero and note is not empty
  {
    notes.push({content, id});//pust it to the note array
    }
    else
    {
        console.log("empty note"); //error note
        return
    }
  
}

saveNote("Pick up groceries", 1); 
saveNote("Do laundry", 2);
saveNote(" ", 3);
console.log(notes);

//--------------------
//getnote by ID
//--------------------
function getNote(id) 
{
    for ( let index=0; index<notes.length; index++ ) 
    {
       if( notes[index].id==id)
        {
           
            return notes[index];
        }
    }
  }
  let firstNote = getNote(2);
  console.log(firstNote);

  //------------------
  //Logout NOTES
  //--------------------
  function logOutNotesFormatted() 
  {
  let temparr=[];
    let entries = Object.entries(notes)
    for ( let index=0; index<notes.length; index++ ) 
    {
      temparr.push("The note with id:" +notes[index].id+ " has the following note text:" +notes[index].content)
    }

    return temparr;
    
    }
  console.log(logOutNotesFormatted());

  
  
  
 
  
