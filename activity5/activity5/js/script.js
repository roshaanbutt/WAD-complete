var currentPerson = 0; 
var persons = [
    {
        info : "Ahmed",
        comments : [ 
            "comment something",
            "abc some comment"
        ],
    },
	
	
	{
        info : "Waseem",
        comments : [ 
            "def comment",
            "ahn some comment"
        ],
    },
	
	
	{
        info : "Talha",
        comments : [ 
            "no commments"
        ],
    }
];

displaycomment();


function addComment()
{
    document.getElementById('message').innerHTML = "";
	
    if(document.getElementById('comment').value == "")
	{
        document.getElementById('message').innerHTML = "Please enter comment text.";
    }
	
	else
	{
        var newindex = persons[currentPerson].comments.length; //currentperson: index
        persons[currentPerson].comments[newindex] = document.getElementById('comment').value;
        document.getElementById('comment').value = "";
        displaycomment();
    }
    
}


function displaycomment()
{
    document.getElementById('comment-list').innerHTML = "";
    document.getElementById('person-info').innerHTML = persons[currentPerson].info;
	
    for(var i=0; i<persons[currentPerson].comments.length; i++)
	{        
        document.getElementById('comment-list').innerHTML = document.getElementById('comment-list').innerHTML + "<li>"+ persons[currentPerson].comments[i] +"</li>";
    }
}


function nextPerson()
{
    currentPerson++;
	
    if(currentPerson == persons.length)
	{
        currentPerson = 0;
    }
	
    document.getElementById('person-info').innerHTML = persons[currentPerson].info;
    displaycomment();
  //  console.log(currentPerson);
}