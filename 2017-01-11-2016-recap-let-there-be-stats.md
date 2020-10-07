---
id: 15168
postTitle: '2016 Recap &#8211; Let there be STATS!'
date: 2017-01-11T12:46:22-06:00
author: Exceptionless
layout: blog_post.liquid
tags: ["posts"]
---
[<img loading="lazy" class="aligncenter wp-image-15174 size-large" src="https://exceptionless.com/assets/2016-in-review-1024x538.jpg" alt="Exceptionless 2016 in review" width="940" height="494" data-id="15174" srcset="https://exceptionless.com/assets/2016-in-review-1024x538.jpg 1024w, https://exceptionless.com/assets/2016-in-review-300x158.jpg 300w, https://exceptionless.com/assets/2016-in-review-768x403.jpg 768w, https://exceptionless.com/assets/2016-in-review.jpg 1200w" sizes="(max-width: 940px) 100vw, 940px" />](/2016-recap-let-stats/)

We were curious, so we thought we would put together some stats for 2016, along with and a recap of some of the notable changes and progression. Enjoy!

## General Exceptionless Stats

  * **Over 120,000,000** events processed
  * 4716 users
  * 3614 projects
  * 2809 organizations

<!--more-->

## Release Stats

### Exceptionless Server:

  * 7 releases
  * 88 watching
  * 774 stars
  * 236 forks

### Exceptionless UI:

  * 6 releases
  * 9 watching
  * 38 stars
  * 34 forks

### Foundatio:

  * 4 releases
  * 65 watching
  * 472 stars
  * 97 forks

## Popular Blog Posts / Updates

Judging by the traffic to these posts and updates, they&#8217;re all worth a read. Check them out!

  * [Sending Log Messages to Exceptionless](/sending-log-messages-to-exceptionless/)
  * [A Better Approach to Running Azure WebJobs](/better-approach-running-azure-webjobs/)
  * [Simple App Deployment with Azure Continuous Deployment and GitHub](/simple-app-deployment-azure-continuous-deployment-github/)
  * [Exceptionless.NET 4.0 &#8211; .NET Core and ASP.NET Core Support!](/exceptionless-4-0-net-core-asp-net-core-support/)
  * [Exceptionless API Usage and Overview](/exceptionless-api-usage-and-overview/)

## Notable Changes / Milestones

### Server License Changes

We changed the server licensing to use the Apache license. Now, every Exceptionless project is under the Apache license and there should be no more confusion on how it&#8217;s licensed. [Read more here.](/new-releases-for-all-the-codes-exceptionless-3-2/)

### Session Tracking & Management

The ability to track and automatically manage a users session was added, giving you visibility into how long and what a user did while they were using your product. This also answers the question, &#8220;what did my users do leading up to this exception?&#8221; [Read more here.](/track-view-user-session-data-exceptionless/)

### Fixed by Version

In 2016, we also added the ability to mark an event as fixed in a specific version of your app. [Read more here.](/set-application-version-for-improved-regression-notifications-and-stacking/)

### Performance & Reliablity

We spent a lot of time this past year making massive performance and reliability improvements across the board. Tons of bugs got fixed along the way, and additions like bulk updates and deletes, along with optimized query generation got squeezed in there, too! One big factor here is that it has allowed us to move to Elasticsearch 5 _much_ quicker because all of these improvements allowed us to do things more generically throughout. Much less code to update/change!

#### Elasticsearch 5

Like we mentioned above, we&#8217;ve done a ton of work to ensure we can move to Elasticsearch 5:

  * Insanely fast document indexing and searching
  * Dynamic aggregations (allowing us to do completely customize stats on any data)
  * Reindexing support
  * Daily indexes
  * Making it easier to self host
  * Getting one step closer to server being able to run cross-platform

We have been doing QA on the Elasticsearch 5 migration since the end of the year and it is currently still in progress &#8211; coming soon!

### Open Source ALL the Things

We open sourced two major new libraries this year:

  * <a href="https://github.com/exceptionless/Foundatio.Repositories" target="_blank">Foundatio.Repositories</a>  
    Foundatio.Repositories are generic repositories with an implementation for Elasticsearch
  * <a href="https://github.com/exceptionless/Foundatio.Parsers" target="_blank">Foundatio.Parsers</a>  
    Foundatio.Parsers are Lucene query parsers that allow you to validate or modify lucene queries with ease!

### Other Noteworthy Enhancements

  * Added [Geo location features](/add-reverse-geocoding-to-your-app/)
  * Added [Keybaord shortcuts](/exceptionless-keyboard-shortcuts/)
  * The [API is now 100% Async](/introducing-foundatio-3-0-async-efficiency/)
  * Had third-party security review conducted
  * Made it even easier to self host.
  * Massive [improvements to Foundatio](/foundatio-featured-net-blog-version-4-0-release/) (100% Async, new implementations)

## Onward to 2017 &#8211; Stay Tuned for a Roadmap!

We&#8217;ve got big things coming up, like Exceptionless 5.0 with Elasticsearch 5, which should boost performance gains like 80% faster indexing, lower memory usage, and native reindexing support! No slowing down over here, so stay tuned and enjoy the ride.

And, as always, if you have anything you&#8217;d like to see in upcoming Exceptionless releases, please let us know!