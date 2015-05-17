// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

chrome.contextMenus.create({"title": "Send Feedback",
"onclick":popUpOnClick});

// Create some radio items.
function popUpOnClick(info, tab) {
  chrome.extension.getBackgroundPage().open=1;
}

//Opened up the feed back with ctl+shift+f
chrome.commands.onCommand.addListener(function(command) {
  console.log('onCommand event received for message: ', command);
});