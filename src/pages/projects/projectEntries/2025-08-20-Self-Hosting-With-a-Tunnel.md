---
title: Self Hosting with a Tunnel
---

## Problem

I was getting pretty good at using AWS. In the spring of this year however I
decided to play with AWS lambda functions and gateways. It was a fun set up for
the Minecraft server I was trying to build so my brother and I could play
together. I set it up so that when the server was at a low CPU usage for 10
minutes, the Minecraft server would stop and the instance would turn off to save
me some money. All anyone had to do to turn on the server was visit a random
link that AWS generated for me, and it would turn the instance back on. The only
issue was that AWS had the foresight to know that I would want to rent instances
in every country they have a data center in. My bill, calculated to come out at
$3-$10 a month was now $35-$40 a month. That kind of money was not on the table
to be taken.

I started going through and turning each instance off manually, but after doing
the first 10 of 230, I was looking for other options. I was never able to get a
hold of customer support, just the bots. So I deleted my account. I am sure
there are better ways to solve this issue, but I needed the assurance that this
bill was going to stop coming.

This experience helped me get excited about the idea of self hosting. I learned
that I could expose a port on my RaspberryPi through a Cloudflare tunnel and
point my domain name at that port from [Network Chuck's video on tunnels](https://m.youtube.com/watch?v=ey4u7OUAF3c).
The idea of using what I already had instead of subscribing to another service
spoke to my money cautious self. Lately I have been feeling strange about the
fact all my data is somewhere else. There is no such thing as a free lunch, and
I don't think that Google and Amazon are hosting my 15 GB of free storage as a
charity. Being able to know where my data is and have it secure is important to
me.

## Beginnings

So far I have been able to play with Immich, a self-hosted photo storage app that very closely mimics Google photos. On top of Immich, I have learned how to host my websites in a production state. Future ambitions include:

* [ ] Use my Pi to forward traffic to my PC so I can SSH into it from anywhere (I can't get past my ISP).
* [ ] Build a file syncing setup between my laptop and PC so they have the same
  files. My goal is to have Arch running on my laptop as well as my PC and be able to sync them.
* [ ] Run Nextcloud and try the de-googled life.
