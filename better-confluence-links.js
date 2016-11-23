$(function() {

  // don't do magic scrolly stuff if someone refreshes the page, they may have
  // been viewing the confluence page for a while and could be surprised by
  // the scroll.
  if (window.performance && performance.navigation.type == 1) {
    return;
  }

  var ref = document.referrer;

  var jiraUrlKeyMatchers = [
    // standard full page issue view
    /\/browse\/([A-Z]+-\d+)/,

    // viewing selected issue on agile board
    /selectedIssue=([A-Z]+-\d+)/,

    // ... and many more I'm sure
  ];

  // Scroll to the first occurrence of the link to the referring jira issue
  // in the confluence doc
  var scollToIssueIdInConfluence = function(issueId) {
    var firstLink, headerHeight;
    var issueLinks = $(".jira-issue[data-jira-key='" + issueId + "']");

    if (issueLinks.length > 0) {
      firstLink = $(issueLinks[0]);

      // used to properly offset the scroll position so the issue link we want
      // to see isn't stuck behind the absolute positioned nav
      headerHeight = $('header nav').height();

      $('html, body').animate({ scrollTop: (firstLink.offset().top - headerHeight)});
    }
  };

  $.each(jiraUrlKeyMatchers, function(i, jiraIssueIdRegex) {
    var issueId;
    if (ref.match(jiraIssueIdRegex)) {
      issueId = ref.match(jiraIssueIdRegex)[1];
      scollToIssueIdInConfluence(issueId);
    }
  });
})
