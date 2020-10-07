---
id: 9591
postTitle: 'Job System Enhancements &#8211; Version 2&#8217;s Got Em!'
date: 2014-07-29T19:10:03-06:00
author: Exceptionless
layout: blog_post.liquid
tags: ["posts", "new features"]
---
Summer means vacations and pool time, but we haven&#8217;t stopped working on Exceptionless 2.0. Things are coming along nicely, and today we&#8217;re here to talk about the job system and the code being written to enhance it.

**After you read this article**, check out the previous V2.0 feature and detail articles, if you haven&#8217;t already. Good stuff in there!

  1. [Exceptionless 2.0 – In the Making](http://exceptionless.com/exceptionless-2-in-the-making/ "Exceptionless 2.0 – In the Making")
  2. [Event Based Reporting System](http://exceptionless.com/event-based-reporting-system-coming-version-2-0/ "Event Based Reporting System Coming in Version 2.0")
  3. [Simplified API](http://exceptionless.com/upcoming-exceptionless-2-0-simplified-api/ "More from the Upcoming Exceptionless 2.0: Simplified API")
  4. [A Pluggable System](http://exceptionless.com/coming-exceptionless-2-0-pluggable-system/ "Coming in Exceptionless 2.0 – A Pluggable System")
  5. [Exceptionless 2.0 Client Rewrite Sneak Peak and Example](http://exceptionless.com/exceptionless-2-0-client-rewrite-sneak-peek-usage-example/ "Exceptionless 2.0 Client Rewrite Sneak Peek Usage Example")
  6. <a title="Version 2.0′s New Message Bus and Queueing Systems" href="http://exceptionless.com/version-2-0s-new-message-bus-queueing-systems/" target="_blank">New Message Bus and Queuing System</a>
  7. [Job System Enhancements](http://exceptionless.com/job-system-enhancements-version-2s-got-em/ "Job System Enhancements – Version 2′s Got Em!")

<!--more-->

## Job System Enhancements

### Standalone

Jobs can easily be run standalone now, which makes it much easier to test the system. You won&#8217;t have to worry about your application pool shutting down prematurely and killing your job half way through it&#8217;s long-running work item.

### More Ways to Run

With 2.0, you&#8217;ll be able to run jobs in process, as a service, as a standalone exe, or as Azure WebJobs. Cool, huh?

### Need More? Run More!

If you need to process more tasks, simply fire up more jobs. This will save resources and money when using Azure WebJobs, as you can auto-scale jobs based on resource constraints.

We use jobs to send emails, call web hooks, process events, and much more, so these enhancements will allow for better resource control when scaling, and in general.

## Questions?

We&#8217;ve thrown out a lot of information about Exceptionless 2.0 and all the new features, enhancements, and tweaks that it&#8217;s going to get. We&#8217;d love to hear from some of the regulars out there and see if we&#8217;ve missed anything obvious. Check out the links to the other articles at the top of the page and let us know. Thanks!