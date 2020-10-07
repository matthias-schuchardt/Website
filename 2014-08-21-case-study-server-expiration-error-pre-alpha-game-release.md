---
id: 9756
postTitle: 'Case Study: Server Expiration Error for Pre-Alpha Game Release'
date: 2014-08-21T11:22:08-06:00
author: Exceptionless
layout: blog_post.liquid
tags: ["posts", "Case Study"]
---
<img loading="lazy" class="alignright size-full wp-image-9759" style="margin-left: 15px;" src="http://exceptionless.com/assets/game-post.jpg" alt="game-post" width="160" height="160" data-id="9759" srcset="https://exceptionless.com/assets/game-post.jpg 160w, https://exceptionless.com/assets/game-post-150x150.jpg 150w" sizes="(max-width: 160px) 100vw, 160px" />Today we&#8217;ve got a pretty cool case study that comes to us from a game development studio!

We love to see Exceptionless being used by companies with interesting projects and development pipelines, and what&#8217;s more interesting than gaming, multi-server, and multi-player environments?

These guys also gave us some good feedback, which we&#8217;ll address.

Check it out!<!--more-->

## Project

This user is working on a pre-alpha game that is, at the time of the feedback, only available to the in-house team. The game environment requires multiple servers that are deployed via script. When an old version of a server comes down and a new one is deployed, there is cleanup that must happen, etc.

> &#8220;I like your product! I&#8217;ve previously written an exception-reporting system that did the same type of thing as Exceptionless but used a mail-server as the exception repository. Since that system was something I had to leave behind at my last company, I wanted to find a solution for my current company, and after comparing alternatives liked what your team had built, so that&#8217;s what we&#8217;re using now.&#8221;

## How Exceptionless Helped

Because the game had such limited players, servers, and testing, it&#8217;s tough to catch all the little bugs. Fortunately, Exceptionless was able to catch a potentially huge bug that would cause old versions of the servers that were still running to crash because of files being deleted by the new server development clean up scripts.

> &#8220;If an old version was still running it would crash because its data-files got deleted. Since we&#8217;re still in development mode there aren&#8217;t enough people playing on our game servers to notice this exception &#8212; but we would have when going into alpha or beta test! Fortunately Exceptionless did notice and report this problem.&#8221;

We think that&#8217;s pretty awesome, and not just because we&#8217;re huge nerds!

## Feature Requests & Thoughts

We were lucky enough to get some great feedback from these guys, as well.

### Bug Ownership

> <span style="color: #282f33;">&#8220;We&#8217;d like a feature that allows our developers to claim ownership of bugs so that they&#8217;re not seen by others in the Dashboard view by default.&#8221;</span>

With multiple developers on multiple projects, bugs can stack up and things can get messy. John doesn&#8217;t need to see Billy&#8217;s bugs from project A when he&#8217;s working on his own bugs for project B.

We definitely agree here and understand, but <span style="color: #282f33;">there is a fine line between us being an error reporting service and getting into <a href="/bug-tracking/">bug tracking</a> type features. We had a previous product that tried to do too much and turned people off so we really wanted to try and keep Exceptionless simple. That being said, <strong>we want to make Exceptionless integrate with other apps</strong> much more in the future and make it really easy to create new integrations. We&#8217;re working on this now with <a title="Upcoming Exceptionless Version 2.0 Overview & Review" href="http://exceptionless.com/upcoming-exceptionless-version-2-0-overview-review/">Exceptionless 2.0, coming soon</a>!</span>

### Multiple Services on Single Server

> &#8220;<span style="color: #282f33;">One other thing that was painful for me personally: we run multiple services of the same type on a single server (e.g. multiple instances of &#8220;game-server.exe&#8221;). In order to ensure that each server has its own queue folder and logfile, I had to write a chunk of custom code.&#8221;</span>

Again, we totally agree! <span style="color: #282f33;">The <a title="Exceptionless 2.0 Client Rewrite Sneak Peek Usage Example" href="http://exceptionless.com/exceptionless-2-0-client-rewrite-sneak-peek-usage-example/">client in Exceptionless 2.0</a> will be MUCH simpler and will make things much easier. You will be able to easily use in-memory storage and be able to plug in different storage implementations.</span>

## We Love Feedback!

If you&#8217;re a current user, we&#8217;d love to hear how you&#8217;ve used Exceptionless to cut down on bugs and build better apps. If you&#8217;ve got any criticisms or feature feedback/requests, keep those coming as well &#8211; they help us improve!

Have an awesome day!

&nbsp;