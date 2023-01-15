let name1 = gettFullname('thiru', 'ramsay', true, 'male')
//console.log("Mrs"+name1+".");

let name2 = gettFullname('sathya', 'sivakumar', true, 'female')
//console.log("mrs"+name2+".");

let name3 = gettFullname('aadhu', 'thiru', false, 'male')
let name4 = gettFullname('Aaraa', 'thiru', false, 'female')
//console.log("no");

function gettFullname (firstname, surname, useFormalName, gender) 
{
let flname;
    if (useFormalName == true && gender == 'male')
    {
        flname=firstname+surname;
        console.log("Mrs " +flname);
        return

    } 
    else if (useFormalName == true && gender == 'female')
    {

        flname=firstname+surname;
        console.log("Miss " +flname);
        return

    }
    else
    {
        flname=firstname+surname;
        console.log(flname);
    }

}

