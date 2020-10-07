---
id: 10108
postTitle: Making the Move to Elasticsearch for Exceptionless 2.0
date: 2014-09-03T14:42:26-06:00
author: Exceptionless
layout: blog_post.liquid
tags: ["posts", "new features"]
---
<img loading="lazy" class="alignright size-full wp-image-10110" style="margin-left: 15px;" src="http://exceptionless.com/assets/Screenshot-2014-09-03-15.03.16.png" alt="Screenshot 2014-09-03 15.03.16" width="211" height="68" data-id="10110" />We know you&#8217;ve thought about it when using Exceptionless, and many developers have submitted formal requests. **Search**.

You need it, and we want to provide it. That&#8217;s why we&#8217;ve decided to integrate Elasticsearch into 2.0, and it&#8217;s going to be awesome!

Check out a few of the cool things we&#8217;re going to be able to do with it, below, and let us know what you think!<!--more-->

## What Elasticsearch Brings to the Table

### Simple scaleability

Moving to <a title="Elasticsearch" href="http://www.elasticsearch.org/" target="_blank">Elasticsearch</a> for event and stack storage will enable us to simplify many areas of the system, like stats, and also enable us to easily scale the service as it continues to grow.

### Search ALL the things

The new system will allow users to search by tags, date range, keywords, error type, and more, all while providing full statistics at the same time. This, specifically, has been our most requested feature, and we&#8217;re glad to finally be able to say it&#8217;s coming soon!

### Faster, too!

Elasticsearch removes the need for us to do stats incrementing for every type of view that we want to show. This simplifies the system, further increases performance, and improves throughput for the event collector.

### Statistics everywhere

You&#8217;re not just going to get more accurate stats within Exceptionless, you&#8217;re going to get them in real time, and we&#8217;ll be able to display them in multiple time zones, too.

### Future-proofing

Instead of having to think of everything up front while we&#8217;re building Exceptionless 2.0, Elasticsearch will enable us to provide new insights in the future, something every developer dreams of!

## We Hope You&#8217;re as Stoked as We Are

Search has been a long time coming for Exceptionless, and we&#8217;re super excited to be able to provide a robust, thorough, scaleable solution that will cover 99.99% of possible use cases. Hang in there &#8211; we&#8217;re coding it in as fast as we can!