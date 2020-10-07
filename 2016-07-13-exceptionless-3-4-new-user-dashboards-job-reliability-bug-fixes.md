---
id: 14571
postTitle: 'Exceptionless 3.4 &#8211; New User Dashboards, Job Reliability, and Bug Fixes'
date: 2016-07-13T13:35:18-06:00
author: Exceptionless
layout: blog_post.liquid
tags: ["posts"]
---
[<img loading="lazy" class="alignright size-full wp-image-14573" src="http://exceptionless.com/assets/exceptionless-3-4-header.png" alt="Exceptionless 3.4" width="260" height="260" data-id="14573" srcset="https://exceptionless.com/assets/exceptionless-3-4-header.png 260w, https://exceptionless.com/assets/exceptionless-3-4-header-150x150.png 150w" sizes="(max-width: 260px) 100vw, 260px" />](http://exceptionless.com/assets/exceptionless-3-4-header.png)The latest Exceptionless release has several additions we think most of our users will find helpful. We sat down and worked on the UI, fixed some bugs, and spend a considerable amount of time improving reliability and efficiency of some of the primary pieces of the app.

If you&#8217;re a self hoster, you&#8217;ll need to [upgrade your existing install](https://github.com/exceptionless/Exceptionless/wiki/Self-Hosting#upgrading), but if you&#8217;re hosting with us there is no action required on your part to experiences the Exceptionless 3.4.

For more information about this release, take a look below and/or review the [full release notes over on GitHub](https://github.com/exceptionless/Exceptionless/releases/tag/v3.4.0).<!--more-->

## UI Updates

These updates were all pushed with [Exceptionless.UI 2.5](https://github.com/exceptionless/Exceptionless.UI/releases/tag/v2.5.0) a few days prior to this release of the main app. Enjoy!

### Search Wildcard

You can now use `*` to show **all **events in the search box. Woohoo!

### Most Users Dashboard

The new most users dashboard allows you a quick view of events sorted by the highest number of affected users. This is great for helping prioritize your work pipeline.

Also, as an aside, we&#8217;ve added the users affected column to the dashboard. We know some of you guys will find that helpful.

### New Keyboard Shortcuts

MacOS & Linux keyboard shortcut support has been added, as well as additional shortcuts such as `C` to chat with support, `S` to focus the search bar, and `g` `a` to go to your account. Hit `SHIFT` + `/` (also known as `?` ) to access the keyboard shortcut list on any screen.

As an aside here, there is also now a `</>` button near the top of the event occurrence that lets you quickly copy the JSON to your clipboard with a click.

## Other Updates

This is just a quick list of everything else we tweaked, updated, added, or fixed with the v2.4 release.

### Performance & Reliability

We made several reliability and performance enhancements to queue and job processing. A few specific examples include fixing auto-abandoned jobs and instances where batch events weren&#8217;t being requeued.

### Heartbeat API Endpoints

Previously we had [worked on making heartbeat events efficient](http://exceptionless.com/session-heartbeats-no-longer-count-towards-plan-limits/) so we didn&#8217;t have to count them toward event quotas, and with this release we&#8217;ve added new API Endpoints that allow clients to submit those heartbeats cheaply.

### Active Directory Authentication

Support has been added for Active Directory Authentication. Thanks [@laughinggoose](https://github.com/laughinggoose)! To enable this feature, head over to the [Active Directory Authentication](https://github.com/exceptionless/Exceptionless/wiki/Self-Hosting#active-directory-authentication) documentation page on GitHub.

### Count

This `Count` property was added to the event model that tracks deduplicated events and allows for some pretty cool metrics from here on out while avoiding the full cost of storing every event.

### MaximumRetentionDays

`MaximumRetentionDays` is pretty self explanatory. It controls the max retention perdiod for events, which allows the retention job and plans to be smarter about cleaning up old data.

### Bugs

SignalR (web sockets) support wasn&#8217;t always working in some hosting environments such as AWS, so we fixed a few bugs related to that.