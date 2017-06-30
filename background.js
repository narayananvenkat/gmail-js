chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
  if(request.message == "user_email"){
    alert("inside background");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.runtime.sendMessage({answer:"hello"});
    });


  }
  else{
    alert("from main.js");
  }
});
