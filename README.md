# Better Confluence Links

*tl;dr:* when a JIRA issue is mentioned in a confluence doc, clicking the link
in JIRA to the confluence doc will now bring you to the position in the doc
that first linked to the JIRA issue.

## About
In Confluence you can link to a JIRA issue - pretty useful. Doing so will add a
link to the mentioned JIRA issue, so that viewers of the issue can easily link
back to the Confluence page. Unfortunately, this JIRA -> Confluence link simply
links to the Confluence doc, it does not bring you to the position in the doc
that mentions the JIRA issue in question. You end up having to remember the
issue id and, once you get to confluence, you then have to search for that id
in page.  Less than ideal.

This hacky chrome extension that adds the useful and expected behavior.

## Installation
- clone this repo
- follow the instructions for running a local chrome extension [here](https://developer.chrome.com/extensions/getstarted#unpacked).
