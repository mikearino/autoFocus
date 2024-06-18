chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // Check for a specific URL or other conditions
  if (tab.url.includes('specific-website.com')) {
    chrome.tabs.update(tabId, { highlighted: true });
  }
});

// This attempts to focus a tab, but actual "focus" behavior can be limited by the browser.
