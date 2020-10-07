---
id: 14471
postTitle: Session Heartbeats No Longer Count Towards Plan Limits
date: 2016-05-26T14:25:35-06:00
author: Exceptionless
layout: blog_post.liquid
tags: ["posts"]
---
<img loading="lazy" class="alignright size-full wp-image-14475" style="margin-left: 15px;" src="http://exceptionless.com/assets/session-tracking-revised.png" alt="session-tracking-revised" width="260" height="260" data-id="14475" srcset="https://exceptionless.com/assets/session-tracking-revised.png 260w, https://exceptionless.com/assets/session-tracking-revised-150x150.png 150w" sizes="(max-width: 260px) 100vw, 260px" />That&#8217;s right! We&#8217;ve re-imagined how session heartbeats and session end events should work on the back end and were able to make them much more efficient, allowing us to stop counting them toward user plan limits!

This blog post explains our original goals and implementation of these session events, and how we were able to retain the same functionality of the feature while limiting resource usage.

Our hope is that this will obviously make our users happy, but also that all the developers out there can benefit from our process and solution.<!--more-->

## Genesis: Exceptionless Session Tracking

In the beginning, we set out to create a sessions feature that allowed our users to submit a session start event and the session would be automatically updated by sending a session heartbeat event, as well as a session end event, respectively.

These session heartbeats and session end events were meant to be session markers to show that a user was active or a session had ended.

We wanted to **leverage our existing infrastructure,** and the easiest way to do so was to introduce new event types that we recognized. This meant that these events went through the client side plugins (extra work) and server side processing. As such, there was **no way to tell these events apart from any other event**.

And because of that, they counted against user plan limits.

## Noise

After releasing the sessions feature, **it didn&#8217;t take us long to notice that the heartbeats were noise**. However, we knew that users wanted to see what their customers or users were doing while being active throughout the session, so we didn&#8217;t remove them.

We knew they were counting towards plan limits, causing some users to reach theirs quickly, and we knew they were adding noise, thus limiting the feature&#8217;s value, but we also wanted to keep the feature alive because of the _potential_ value offered. So, we had to react and make the entire feature more feasible, streamlined, and cheap.

## Back to the Drawing Board

We did some thinking (and coding), trying to determine the best way we could **provide end users with a great session tracking feature without over-taxing our system** in the process, and we were able to come up with a solution!

So, we created a new GET API endpoint `/api/v2/events/session/heartbeat` ([api source](https://api.exceptionless.io/docs/index#!/Event/Event_RecordHeartbeatAsync)) that takes a session id or user id and a flag if the session is closed. This API endpoint then sets a unique session cache key with the current time.

Our existing `CloseInactiveSessionsJob.cs` was already periodically polling for open sessions to check for inactive sessions so it could automatically close them after a period of time if no session end event was sent, so we just updated this job to check for the unique session cache keys ([source](https://github.com/exceptionless/Exceptionless/blob/master/Source/Core/Jobs/CloseInactiveSessionsJob.cs#L43)) and get the last time a heartbeat was sent in or see if it was closed. It then takes the appropriate action and updates the session event.

Then we just updated the clients to call this new API endpoint when `client.Submit.SessionHeartbeat("id")` or `client.SubmitSessionEnd("id")` is called.

## Efficiency Achieved!

Our new solution gives us the ability to have clients send us session heartbeat and session end information very efficiently, which lets us provide a great session tracking feature **without adding any additional cost** to our plans!

That&#8217;s how we like to roll, and we hope you find value from the feature and our run down of the process we went through to get it to our users.

### Don&#8217;t Forget to Update Your Client

If you haven&#8217;t already updated your client, please do so to start taking advantage of the free session events.

And, as always, please let us know if you&#8217;ve got any feedback or questions. We&#8217;d love to hear from you!