var gmail;


function refresh(f) {
  if( (/in/.test(document.readyState)) || (typeof Gmail === undefined) ) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}


var main = function(){
  // NOTE: Always use the latest version of gmail.js from
  // https://github.com/KartikTalwar/gmail.js]
  gmail = new Gmail();
  console.log('Hello,', gmail.get.user_email());
  //console.log(gmail.get.loggedin_accounts());
  //requestHandler('');
}


refresh(main);

$(window).on('hashchange',function(){
  var user_email = gmail.get.user_email();
  console.log(user_email);
  var currentURL = document.URL;
  if(currentURL.match("/#inbox/")){
    var url_split = currentURL.split('/');
    var data = gmail.get.email_data(url_split[url_split.length - 1]);
    console.log("peoples involved");
    var people_involved = [];
    for(i=0;i<data["people_involved"].length;i++){
      if(user_email !== data["people_involved"][i][1]){
        people_involved.push(data["people_involved"][i][1]);
      }
    }
    console.log(people_involved);
  };
});
