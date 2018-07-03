// SHEET IDS

// Robustified Index Master: 1sEjzhq96me6aaQLIBqY6Wfgy9D6VrKhtHL9eUoqyT2Q
// Test Rig iQA: 1-5Vf4LbGOI29eVabBluk8WoHg5-8qJkzhgazLdLtVDE



function myCopyOps() {
  
  var drafts = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Event Queue");
  var temp = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Temp Queue");
  var dArray = drafts.getRange("a1:j300").getValues();  // sets up an array of the Event Queue sheet
  var iMaster = SpreadsheetApp.openById("1sEjzhq96me6aaQLIBqY6Wfgy9D6VrKhtHL9eUoqyT2Q"); // find Robustified
 
  var rec = iMaster.getSheetByName("Event ID");
  var ePfull = rec.getRange("a3:as1999").getValues(); // creates an array of Event ID
  var cLib = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Copy Library");
  var test = cLib.getRange("A1:O1").getValues();
  
  
var print = 2
  
  for (var c = 0; c< 1990; c++){ // adding the archived copy library
    
    if(ePfull[c][51] == "Archive"){
      
      
      cLib.getRange(print,2).setValue(ePfull[c][18]);
      cLib.getRange(print,3).setValue(ePfull[c][0]);
      cLib.getRange(print,4).setValue(ePfull[c][1]);
      cLib.getRange(print,5).setValue(ePfull[c][2]);
      cLib.getRange(print,6).setValue(ePfull[c][11]);
      cLib.getRange(print,7).setValue(ePfull[c][6]);
      cLib.getRange(print,8).setValue(ePfull[c][5]);
      cLib.getRange(print,9).setValue(ePfull[c][12]);
      cLib.getRange(print,10).setValue(ePfull[c][14]);
      cLib.getRange(print,11).setValue(ePfull[c][32]);
      cLib.getRange(print,12).setValue(ePfull[c][34]);
      cLib.getRange(print,13).setValue(ePfull[c][48]);
      cLib.getRange(print,14).setValue(ePfull[c][53]);
      
      var print = print+1;
  
  }
  
  }
  
  for (var i = 0; i < 300; i++){
    
    var dest = dArray[i][2];
   
    if (dest == "Push to QA"){
      
    var eID = dArray[i-7][0];
    var cGreet = dArray[i-3][2];
    var cHead = dArray[i-4][2];
    var cBody = dArray[i-2][2]; // picking up the key variables; ID, Header, Greeting and Body
    
      
     
      Logger.log(eID);
      Logger.log(cGreet);
      
     
      
      rec.getRange(eID+2,33).setValue(cHead);
      rec.getRange(eID+2,34).setValue(cGreet);
      rec.getRange(eID+2,35).setValue(cBody);
      rec.getRange(eID+2,32).setValue("Drafted"); // writing to the master database
      
      var converter1 = i/10;
      var c3 = parseInt(converter1);
      var c2 = c3*10;
      
      Logger.log(c2);
     
      
      drafts.getRange((c2)+2,1).clearContent();
      drafts.getRange((c2)+2,2).clearContent();
      drafts.getRange((c2)+2,3).clearContent();
      drafts.getRange((c2)+2,4).clearContent();
      drafts.getRange((c2)+2,5).clearContent();
      drafts.getRange((c2)+2,6).clearContent();
      drafts.getRange((c2)+4,2).clearContent();
      drafts.getRange((c2)+4,4).clearContent();
      drafts.getRange((c2)+4,5).clearContent();
      drafts.getRange((c2)+4,6).clearContent();
      drafts.getRange((c2)+5,3).clearContent();
      drafts.getRange((c2)+6,3).clearContent();
      drafts.getRange((c2)+7,3).clearContent();
      drafts.getRange((c2)+9,3).clearContent();
      drafts.getRange((c2)+9,4).clearContent();
      drafts.getRange((c2)+9,5).clearContent();
      drafts.getRange((c2)+9,6).clearContent();
      
      
      
    } else if (dest == "Leave in Draft"){
     
      
      var eID = dArray[i-7][0];
      var cGreet = dArray[i-3][2];
      var cHead = dArray[i-4][2];
      var cBody = dArray[i-2][2];
      var cUser = dArray[i-7][1];
      var cCon = dArray[i-7][2];
      var cComp = dArray[i-7][3];
      var cAcc = dArray[i-7][4];
      var cDate = dArray[i-7][5];
      var cNote = dArray[i-5][1];
      var cURL = dArray[i-5][3];
      var cLabel = dArray[i-5][4];
      var cLink = dArray[i-5][5];
      var cAuto = dArray[i-1][2];
      
      var queuer = temp.getRange(1,15,temp.getLastRow());
      var pprt = queuer.getLastRow(); // finds where to print the next line in the Temp Queue sheet
      var prt = pprt+1;
       
      temp.getRange(prt,1).setValue(eID);
      temp.getRange(prt,2).setValue(cGreet);
      temp.getRange(prt,3).setValue(cHead);
      temp.getRange(prt,4).setValue(cBody);
      temp.getRange(prt,5).setValue(cUser);
      temp.getRange(prt,6).setValue(cCon);
      temp.getRange(prt,7).setValue(cComp);
      temp.getRange(prt,8).setValue(cAcc);
      temp.getRange(prt,9).setValue(cDate);
      temp.getRange(prt,10).setValue(cNote);
      temp.getRange(prt,11).setValue(cURL);
      temp.getRange(prt,12).setValue(cLabel);
      temp.getRange(prt,13).setValue(cLink);
      temp.getRange(prt,14).setValue(cAuto);
      
      var converter1 = i/10;
      var c3 = parseInt(converter1);
      var c2 = c3*10;
      
      Logger.log(c3);
      Logger.log(i);
      Logger.log(test);
      
      drafts.getRange((c2)+2,1).clearContent();
      drafts.getRange((c2)+2,2).clearContent();
      drafts.getRange((c2)+2,3).clearContent();
      drafts.getRange((c2)+2,4).clearContent();
      drafts.getRange((c2)+2,5).clearContent();
      drafts.getRange((c2)+2,6).clearContent();
      drafts.getRange((c2)+4,2).clearContent();
      drafts.getRange((c2)+4,4).clearContent();
      drafts.getRange((c2)+4,5).clearContent();
      drafts.getRange((c2)+4,6).clearContent();
      drafts.getRange((c2)+5,3).clearContent();
      drafts.getRange((c2)+6,3).clearContent();
      drafts.getRange((c2)+7,3).clearContent();
      drafts.getRange((c2)+9,3).clearContent();
        

      
    }
  }
  
  for (var j = 0; j < 15; j++){
    
    var qArray = temp.getRange("a2:r20").getValues();  // sets up an array of the Temp Queue sheet
    
      var eID = qArray[j][0];
      var cGreet = qArray[j][1];
      var cHead = qArray[j][2];
      var cBody = qArray[j][3];
      var cUser = qArray[j][4];
      var cComp = qArray[j][5];
      var cCon = qArray[j][6];
      var cAcc = qArray[j][7];
      var cDate = qArray[j][8];
      var cNote = qArray[j][9];
      var cURL = qArray[j][10];
      var cLabel = qArray[j][11];
      var cLink = qArray[j][12];
      var cAuto = qArray[j][13];

    Logger.log(eID);
    Logger.log(cAcc);
    
      var karp = j*10;
    Logger.log(karp);
      
      drafts.getRange(karp+2,1).setValue(eID);
      drafts.getRange(karp+2,2).setValue(cUser);
      drafts.getRange(karp+2,3).setValue(cComp);
      drafts.getRange(karp+2,4).setValue(cCon);
      drafts.getRange(karp+2,5).setValue(cAcc);
      drafts.getRange(karp+2,6).setValue(cDate);
      drafts.getRange(karp+4,2).setValue(cNote);
      drafts.getRange(karp+4,4).setValue(cURL);
      drafts.getRange(karp+4,5).setValue(cLabel);
      drafts.getRange(karp+4,6).setValue(cLink);
      drafts.getRange(karp+5,3).setValue(cHead);
      drafts.getRange(karp+6,3).setValue(cGreet);
      drafts.getRange(karp+7,3).setValue(cBody);


  
  }
  
  temp.getRange("a2:r20").clear();
  
  
}

