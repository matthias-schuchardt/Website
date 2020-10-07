---
id: 13861
postTitle: A Better Approach to Running Azure WebJobs
date: 2015-12-08T19:54:14-06:00
author: Exceptionless
layout: blog_post.liquid
tags: ["posts"]
---
<img loading="lazy" class="aligncenter size-full wp-image-13876" src="http://exceptionless.com/assets/jobs-blog-header-image.jpg" alt="Azure Webjobs" width="708" height="250" data-id="13876" srcset="https://exceptionless.com/assets/jobs-blog-header-image.jpg 708w, https://exceptionless.com/assets/jobs-blog-header-image-300x106.jpg 300w" sizes="(max-width: 708px) 100vw, 708px" />

Lets talk about jobs in the Exceptionless world for a minute and **how you can use our methods to improve your Azure WebJobs.**

A job is a specific task/process that runs and does something like send a mail message, etc.

## Out with the Old

**Prior to version 3.1**, we used an early version of the Foundatio Jobs system to run our out-of-process jobs via Azure WebJobs. We found it to be quite a pain to figure out which jobs were running or eating up system resources because every job was titled Job.exe (just like figuring out the w3wp IIS process is running). Also, just to run an out-of-process job, one would have to compile the source, copy dependencies to a common bin folder, and then run an executable (Job.exe) with parameters that specify the job type.

These tedious and error-prone tasks that had to be completed just to get a job to run are a thing of the past.

## In with the New

<!--more-->

**In Exceptionless 3.1** we focused on refining and improving jobs. To do so, we created a <a href="https://github.com/exceptionless/Exceptionless/tree/master/Source/Jobs" target="_blank" rel="noopener">new console application for each job</a> and specified settings in the code versus <a href="https://github.com/exceptionless/Exceptionless/blob/master/Source/Jobs/EventPost/Program.cs#L16-L22" target="_blank" rel="noopener">error prone command line options as shown here</a>.

Now, with [Foundatio](/introducing-foundatio-3-0-async-efficiency/), our open source app building block solution used in Exceptionless, you just define a new [Job](https://github.com/exceptionless/Foundatio#jobs) that runs (via the run method) and you can use the [Foundatio Jobs API](https://github.com/exceptionless/Foundatio#jobs) to run the job in process, out of process, continuous, or one time without changing the implementation.

This new approach also gave us a great deployment strategy, for free. Simply copy the job executable and bin folders and run it anywhere!

### Jobs (processes) running in Azure as an Azure web job

[<img loading="lazy" class="aligncenter wp-image-13862" src="http://exceptionless.com/assets/Jobs-1024x670.jpg" alt="Exceptionless Jobs and Processes" width="600" height="393" data-id="13862" srcset="https://exceptionless.com/assets/Jobs-1024x670.jpg 1024w, https://exceptionless.com/assets/Jobs-300x196.jpg 300w, https://exceptionless.com/assets/Jobs.jpg 1600w" sizes="(max-width: 600px) 100vw, 600px" />](http://exceptionless.com/assets/Jobs.jpg)

### How you can implement a better Azure WebJob

[Foundatio Jobs](https://github.com/exceptionless/Foundatio#jobs) allows you to run a long running process (in process or out of process) with out worrying about it being terminated prematurely. By using Foundatio Jobs you gain all of the following features **without changing your job implementation**:

  * Run job in process
  * Run job out of process
  * Run job with a start up delay
  * Run job in an continuous loop with an optional interval delay.

In this sample we&#8217;ll just define a new class called HelloWorldJob that will hold our job that increments a counter and derives from JobBase. Please note that there are a few different base classes you can derive from based on your use case.

<pre class="brush: csharp; title: ; notranslate" title="">using Foundatio.Jobs;

public class HelloWorldJob : JobBase {
   public int RunCount { get; set; }

   protected override Task&lt;JobResult&gt; RunInternalAsync(JobRunContext context) {
       RunCount++;
       return Task.FromResult(JobResult.Success);
   }
}</pre>

Now that we have our job defined we can run our job in process with a few different options:

<pre class="brush: csharp; title: ; notranslate" title="">var job = new HelloWorldJob();
await job.RunAsync(); // job.RunCount = 1;
await job.RunContinuousAsync(iterationLimit: 2); // job.RunCount = 3;
await job.RunContinuousAsync(cancellationToken: new CancellationTokenSource(TimeSpan.FromMilliseconds(10)).Token); // job.RunCount &gt; 10;</pre>

But our goal is to run this out of process in an Azure WebJob (this also works if you want to run this as a service or from the desktop).

The first step is to create a new console application and reference the <a style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px;" href="https://www.nuget.org/packages/Foundatio/">Foundatio NuGet Package</a> and the project that contains our HelloWorldJob. We are going to call our console application HelloWorldJob. Inside of the Program class, we&#8217;ll update the main method to run our job.

<pre class="brush: csharp; title: ; notranslate" title="">using System;
using System.IO;
using JobSample;
using Foundatio.Jobs;
using Foundatio.ServiceProviders;

namespace HelloWorldJob {
    public class Program {
        public static int Main(string[] args) {
            // NOTE: This should be the path to your App_Data folder of your website.
            var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"..\..\..\Api\App_Data");
            if (Directory.Exists(path))
                AppDomain.CurrentDomain.SetData("DataDirectory", path);

            // Get a service provider so we can create an instance of our job.
            var serviceProvider = ServiceProvider.GetServiceProvider("JobSample.JobBootstrappedServiceProvider,JobSample");

            var job = serviceProvider.GetService&lt;JobSample.HelloWorldJob&gt;();
            return new JobRunner(job, initialDelay: TimeSpan.FromSeconds(2), interval: TimeSpan.Zero).RunInConsole();
        }
    }
}</pre>

The last steps are to simply compile the project and deploy it to your Azure website!

### Questions?

If you have any questions please feel free to contact us via our contact page, in app message, [GitHub issues](https://github.com/exceptionless/foundatio/issues) or our [chat room](https://gitter.im/exceptionless/Discuss).