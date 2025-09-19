---
title: SSH With Cloudflare
---

## Getting Around the ISP

I live on campus where both my wife are I are studying. This has been a great privilledge, especially since housing off campus is very expensive and poorly maintianed by the landlords. However, we have shared wifi in the building. It is all preconfigured, and all we have to do is plug in a router to our single ethernet port. This is great for most of the tennents here, but there isn't a way to have a public IP that your devices can connect to. When it comes to hosting servers or anything of the like, local is the only option.

I was fortunate to learn about cloudflare tunnels from [NetworkChuck](https://www.youtube.com/watch?v=ey4u7OUAF3c). So I set up my raspberrypi as my home server and hosted my personal site with things I already had laying around.

## Accessing My Home Server

While I can publicly connect to services that are running on my pi, I can't connect to the pi itself. This weekend I am going to be travelling with my wife's family, and I need to make sure that if my site goes down I can connect and troubleshoot. Normally needing to be so focused on keeping the site up and running isn't a hurge priority, but I am applying to internships and keeping this site up with my resume is going to be more vital for the next few months. 

I found a tutorial by [Eric Bette](https://www.ericbette.com/remote-ssh-into-a-host-using-cloudflared-tunnel/) which walked me through the process perfectly. I did need to run a few of the commands differently since my laptop is a Mac (until I put Ashai-Arch on it soon). If you are reading this and trying to do this as well, just run:
```bash
where cloudflared
```
The result is what you want to replace ```/usr/bin/cloudflared``` with in your ssh config file. I used brew to install cloudflared on my laptop, so it pointed through the binary packages there.


