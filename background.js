chrome.browserAction.onClicked.addListener(function(activeTab){
    chrome.tabs.create({ url: 'http://psi.sti.ufcg.edu.br', active: true});
});