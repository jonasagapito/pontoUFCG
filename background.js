chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://psi.sti.ufcg.edu.br";
  chrome.tabs.create({ url: newURL });
});