 //creates the date 
 var currentDate = new Date ();
 var Month = currentDate.getMonth() + 1;
 var Day = currentDate.getDate(); 
 var Year = currentDate.getFullYear();
 var formattedDate = `${month}/${day}/${year}';
 setText("lblDate", formattedDate);
 
 //creates the reference number  need to modify for when the question database is empty
var RefNumberList = (getColumn("QuestionDatabase", "ReferenceNumber"));
var RefNumber = RefNumberList.length;
console.log("RefNumber" + RefNumber);
var QuestionList = [];
var QuestionRefNumberList = [1, 2, 3];
var QuestionID = 0

//go home
function Home(ButtonName) {
  setScreen("homescreen");
}


//The following function will search the database for a specific reference number and return the id
function UpdateQuestionDatabase() {
  readRecords("QuestionDatabase", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      console.log(records[i].id + ': ' + records[i].Status);
      console.log(records[i].id + ': ' + records[i].ReferenceNumber);
      if (records[i].ReferenceNumber==RefNumber) {
        updateRecord("QuestionDatabase", {id:records[i].id,
        Email:records[i].Email,
        Name:records[i].Name, Question:records[i].Question,
        DateSubmitted:records[i].DateSubmitted,
        ReferenceNumber:records[i].ReferenceNumber,
        Status:'answered'}, function(record, success) {
          
        });
        
        }
      }
    })
  
}

onEvent("tipbutton", "click", function( ) {
	setScreen("tipscreen");
});
onEvent("resourcebutton", "click", function( ) {
  setScreen("resourcescreen");
});
onEvent("backbutton", "click", function( ) {
  setScreen("homescreen"); 
});
onEvent("socialtipsbackbn", "click", function( ) {
  setScreen("tipscreen");
});
onEvent("socialtipshomebn", "click", function( ) {
  setScreen("homescreen");
});
onEvent("resourcebackbn", "click", function( ) {
  setScreen("homescreen");
});
onEvent("AutisticSelfAdvocacyBTN", "click", function( ) {
  open("https://autisticadvocacy.org/");
});
onEvent("bookbn", "click", function( ) {
  open("https://docs.google.com/spreadsheets/d/1gBQHTVyrZZ8v6C-2dvwe6yoEM05j_FBD28RW9N6N0oE/edit#gid=0");
});
onEvent("oar", "click", function( ) {
  open("https://researchautism.org/");
});
onEvent("aane", "click", function( ) {
  open("https://www.aane.org/");
});
onEvent("yaleautismstudy", "click", function( ) {
  open("https://medicine.yale.edu/childstudy/research/autism-and-neurodevelopment/");
});
onEvent("comcastsphere", "click", function( ) {
  open("https://comcastcentercampus.com/universal-sphere/");
});
onEvent("certifiedautismcenters", "click", function( ) {
  open("https://certifiedautismcenter.com/");
});
onEvent("socialbutton", "click", function( ) {
  setScreen("socialtipsscreen");
});
onEvent("organizingbackbn", "click", function( ) {
  setScreen("tipscreen");
});
onEvent("organizingtipshomebn", "click", function( ) {
  setScreen("homescreen");
});
onEvent("organization", "click", function( ) {
  setScreen("organizingtips");
});
onEvent("homebuttonquestion", "click", function( ) {
  setScreen("homescreen"); //questions are saved to database
});
onEvent("questionsanswersbn", "click", function( ) {
  setScreen("Q&ATitleScreen");
});
onEvent("questionsbn", "click", function( ) {
  setScreen("QuestionsScreen");
});
onEvent("qbackbn", "click", function( ) {
  setScreen("Q&ATitleScreen");
});
onEvent("submit_bn", "click", function( ) {
  RefNumber = RefNumber + 1;
  createRecord("QuestionDatabase", {Email:(getText("email_input")),Name:(getText("name_input")),Question:(getText("question_input")), 
  DateSubmitted:(getText("lblDate")), Status:"submitted", ReferenceNumber:RefNumber}, function(record) {
    
  });
  showElement("submitted");
  hideElement("submit_bn");
  showElement("anotherbn");
});
onEvent("anotherbn", "click", function( ) {
  setText("question_input", "");
  hideElement("submitted");
  hideElement("anotherbn");
  showElement("submit_bn");
});
onEvent("answersbn", "click", function( ) {
  readRecords("QuestionDatabase", {}, function(records) {
    for (var i =0; i < records.length; i++) {
    if ((records[i]).Status == "submitted") {
      appendItem(QuestionList, (records[i]).Question);
      appendItem(QuestionRefNumberList, records[i].ReferenceNumber);
      console.log(records[i].id + ': ' + records[i].Question);
    }
   
      
    }
    setProperty("dropdown1", "options", QuestionList);
  });
  setScreen("AnswerScreen");
  showElement("submitanswerbn");
  hideElement("submitted2");
});
onEvent("submitanswerbn", "click", function( ) {
  //this piece of code creates a record in the answerdatabase
  createRecord("AnswerDatabase", {Name:(getText("name_input2")), 
  Answer:(getText("text_area3")), DateSubmitted:formattedDate,
  Email:(getText("email_input2")),
  ReferenceNumber:RefNumber}, function(record) {
     
  });
  //this piece of code is going to update the questiondatabase
  UpdateQuestionDatabase();
  showElement("submitted2");
  hideElement("submitanswerbn");
  
});
//Resources Screen - with drop down menus
onEvent("OrganizationsDD", "change", function( ) {
  if (__ == __) {
    
  }
  open("https://autisticadvocacy.org");
});
