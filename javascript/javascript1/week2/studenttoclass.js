const class07Students = ["thiru","sathya","aaraa","aadhu"];

addStudentToClass("hh")
addStudentToClass("sathya")
addStudentToClass("Queen")
addStudentToClass("")
addStudentToClass("KING")
addStudentToClass("hooh")

function addStudentToClass(studentName) 
{
 
    if(studentName == "")
    {
        console.log("you cant add an empty string")//check for empty string
        return
      
    }
   
   if (class07Students.length >= 6) //check the length of the students
   {
     //check if the queen and king among the list
     if (studentName != "Queen" && studentName != "KING")
     {
        console.log("Cannot add more students to class,It exceeds the class limit count!")
       return
     }
    
   } 
     //checks if already the student in the class
     if (class07Students.includes(studentName))
     {
        console.log("student " +studentName+ " is already in the class");
        return
      }
      class07Students.push(studentName) //add to the class
  }


  function getNumberOfStudents() //get total number of students
  {
    return class07Students.length
  }
  
  let TotalnumberOfStudent = getNumberOfStudents();
  console.log("Total Number Of Students in the class: " +TotalnumberOfStudent);