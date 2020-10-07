---
id: 17548
postTitle: Using an Error Monitoring Service to Track User Experience
date: 2020-09-23T07:02:36-06:00
author: Justin Hunter
layout: blog_post.liquid
tags: ["posts"]
---
In development, we tend to think of errors as things that are thrown when our code does not execute properly. Errors can be caught and handled or they can be missed and result in uncaught exceptions. But how do we classify errors that are not directly caused by the code we write? How do we identify and address errors that are caused by the design decisions we made (or didn&#8217;t make)?

You may already be using an error monitoring service, and if you are, you could continue using that and reach for yet another tool to help you with your user experience woes. Or, rather than adding another product to your endless list of tools that keep your application running, you can use the error monitoring service to both monitor for traditional errors and user experience problems.

Let&#8217;s take a look at how we can do this. There are plenty of logging services out there, and most of them do the same thing. However, we&#8217;re going to take a look at&nbsp;[Exceptionless](https://exceptionless.com/). Exceptionless is an especially attractive choice for three reasons:

  1. Fair pricing on their hosted version
  2. It&#8217;s&nbsp;[open-source](https://github.com/exceptionless/Exceptionless)&nbsp;and can be totally self-hosted
  3. The API allows us to do exactly what I&#8217;m proposing in this article.

While self-hosting may be an attractive option (and one that I will surely write about ina future post), we&#8217;re going to sign up for a free account using Exceptionless&#8217;s hosted platform. To do so, go to&nbsp;[https://exceptionless.com](https://exceptionless.com/)&nbsp;and click the Sign Up button in the top-right:<figure class="wp-block-image">

[![Exceptionless home page](https://res.cloudinary.com/practicaldev/image/fetch/s--vr57dYkT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/q55zt3ytzydt1ahqiyx8.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--vr57dYkT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/q55zt3ytzydt1ahqiyx8.png)</figure> 

Once you sign up, you&#8217;ll be prompted to name your team and project. You&#8217;ll also need to choose the language in which your project is written. I&#8217;m choosing NodeJS, but you can choose whatever language applies to you because I&#8217;ll be referencing cURL commands to keep our solution as general-purpose and adaptable as possible. Once you&#8217;ve created a project, you will be provided an API Key. Hold on to that, we&#8217;ll need to use it as a bearer token later.

*Pro-tip: To convert a cURL command to the language of your choice, use&nbsp;[Postman](https://www.postman.com/)&nbsp;and import the raw command. You can then choose the code option and see how to run the API call in the language you prefer.

You&#8217;ll want to follow the documentation to set up your codebase to send errors appropriately to Exceptionless, but we will also need to think about how we are going to handle these UX errors.

To do this, let&#8217;s first think about some of the problems a user may face on a site and how we can handle them. A simple example that I can think of is what I&#8217;m going to call &#8220;Happy Path Slippage.&#8221; We build applications with a happy path in mind. It&#8217;s how we test, naturally. We have to force ourselves to test outside of the happy path, so it&#8217;s also important to monitor how often our users deviate from the happy path.

Let&#8217;s say we have a simple e-commerce application. The happy path, in this case, would be:

  1. User signs up
  2. User searches for a product
  3. User adds product to shopping cart
  4. User checks out

That is the ideal flow, but we know users won&#8217;t always follow that flow. However, what we don&#8217;t know is how often users will deviate and if they do deviate. To track this with Exceptionless, we are going to use simple GET requests with a query parameter to build a funnel analysis. We will want to track product searches, shopping cart adds, and checkouts.

Let&#8217;s start with the setup for product searches. Remember, we&#8217;re going to use a GET request. You can read more of the Exceptionless documentation&nbsp;[here](https://api.exceptionless.io/docs/index.html), but the request is pretty simple. We will want to pass in an indicator that the event is a&nbsp;`productSearch`&nbsp;and what the product is. We can do that like this:

<pre class="brush: plain; title: ; notranslate" title="">curl --location --request GET 'https://api.exceptionless.io/api/v2/events/submit/usage?source=productSearch&amp;message=YOUR_PRODUCT' \
--header 'Authorization: Bearer YOUR_API_KEY'

</pre>

Feel free to add whatever product name you&#8217;d like in the query. Just replace&nbsp;`YOUR_PRODUCT`&nbsp;with the name of the product you&#8217;d like to track. You can run the cURL command from the command line or you can use it to build a real request you would use in your app. If we run that then take a look at our dashboard in Exceptionless, we can start to make use of the data.

The Exceptionless dashboard takes you to a handy chart of most frequent exceptions/errors. However, we&#8217;re tracking User Experience issues tied to features in our application, so those events won&#8217;t appear on the Exceptions dashboard. Instead, if you click the Features Usage link on the left navigation, then click Events, you should see your new&nbsp;`productSearch`&nbsp;event.<figure class="wp-block-image">

[![Features Usage Dashboard Example](https://res.cloudinary.com/practicaldev/image/fetch/s--MsGu3Dvt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xl6duukcca6gaudnk5sm.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--MsGu3Dvt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/xl6duukcca6gaudnk5sm.png)</figure> 

Pretty cool! This alone starts to become useful. We can cut out a separate analytics tracking tool by using our error monitoring service (Exceptionless in this case) to track events outside the normal error reporting. But we can take it a step further.

Remember, we want to track the funnel from search to checkout. So, let&#8217;s send through another event representing a&nbsp;`cartAdd`&nbsp;when a user adds a product to their shopping cart. Here we are adding an extra parameter to also track how many of the product is added to the cart.

<pre class="brush: plain; title: ; notranslate" title="">curl --location --request GET 'https://api.exceptionless.io/api/v2/events/submit/usage?source=cartAdd&amp;value=QUANTITY_ADDED&amp;message=YOUR_PRODUCT' \
--header 'Authorization: Bearer YOUR_API_KEY'

</pre>

Exceptionless has real-time monitoring, so if you flip back to your dashboard after running the above command, you should already see the event in the list:<figure class="wp-block-image">

[![Cart Add Example](https://res.cloudinary.com/practicaldev/image/fetch/s--HnB_sGzg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/4yysom04m8f8doqktrip.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--HnB_sGzg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/4yysom04m8f8doqktrip.png)</figure> 

I think you&#8217;re already seeing how easy this is, but let&#8217;s round this out by adding a&nbsp;`checkout`&nbsp;event to track.

<pre class="brush: plain; title: ; notranslate" title="">curl --location --request GET 'https://api.exceptionless.io/api/v2/events/submit/usage?source=checkout&amp;message=YOUR_PRODUCT' \
--header 'Authorization: Bearer YOUR_API_KEY'

</pre>

Again, your Exceptionless dashboard should update in real-time. This is starting to shape up! Now, let&#8217;s dive into the events because right now we have the start of a nice funnel analysis, but we don&#8217;t know yet what products were searched for, added to the cart, and checked out. The cool thing here is we can click into an event like&nbsp;`productSearch`&nbsp;for example and get detailed info.

Go ahead and try it. Click on the event and you&#8217;ll be taken to a dedicated Event Occurrence page.<figure class="wp-block-image">

[![Event Occurrence Example](https://res.cloudinary.com/practicaldev/image/fetch/s--DZcBh5pq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/kinzwx1ee3lnmrdhd8ql.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--DZcBh5pq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/kinzwx1ee3lnmrdhd8ql.png)</figure> 

This is useful information. Combined with our user experience funnel analysis, we can start to make product decisions. Just for fun, I want to show you what this could look like when leveraging the Most Frequent view.

Again, we should click on the Features Usage link on the side navigation. This time, we&#8217;ll choose the Most Frequent option. I&#8217;ve created a bunch of events so that we can see how useful the Most Frequent view can be.<figure class="wp-block-image">

[![Funnel Example](https://res.cloudinary.com/practicaldev/image/fetch/s--UI_sv1sV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/tx77krsijxyz9zudp25c.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--UI_sv1sV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/tx77krsijxyz9zudp25c.png)</figure> 

Now we have the makings of a useful way of tracking the user experience right from within our error reporting tool. The benefit here is that we can use a single tool to help us with monitoring, bugs, event tracking, and user experience.&nbsp;[Exceptionless](https://exceptionless.com/)&nbsp;makes this incredibly easy, is self-hostable, is open source, and if you choose the hosted option is very affordable.

Go forth and track errors AND user experience all in one place.