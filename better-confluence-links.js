$(function() {

  // don't do magic scrolly stuff if someone refreshes the page, they may have
  // been viewing the confluence page for a while and could be surprised by
  // the scroll.
  if (window.performance && performance.navigation.type == 1) {
    return;
  }

  let ref = document.referrer;

  let jiraUrlKeyMatchers = [
    // standard full page issue view
    /\/browse\/([A-Z]+-\d+)/,

    // viewing selected issue on agile board
    /selectedIssue=([A-Z]+-\d+)/,

    // ... and many more I'm sure
  ];

  // Scroll to the first occurrence of the link to the referring jira issue
  // in the confluence doc
  let scollToIssueIdInConfluence = function(issueId) {
    let firstLink, headerHeight;
    let issueLinks = $(`.jira-issue[data-jira-key="${issueId}"]`);

    if (issueLinks.length > 0) {
      firstLink = $(issueLinks[0]);

      // used to properly offset the scroll position so the issue link we want
      // to see isn't stuck behind the absolute positioned nav
      headerHeight = $('header nav').height();

      $('html, body').animate({ scrollTop: (firstLink.offset().top - headerHeight)});
    }
  };

  $.each(jiraUrlKeyMatchers, function(i, jiraIssueIdRegex) {
    if (ref.match(jiraIssueIdRegex)) {
      let issueId = ref.match(jiraIssueIdRegex)[1];

      // confluence loads the jira links with a ajax request (at least in some
      // cases) so doc ready does not necessarily mean jira links are in the
      // dom
      setTimeout(() => {
        scollToIssueIdInConfluence(issueId);
      }, 1000);
    }
  });
})
