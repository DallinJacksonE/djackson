---
title: Takes A Village (in development)
---

## What Leads to Poverty?

In my research lab, we are trying to develop insights as to why issues like poverty and loneliness have permeated the human experience. We have approached this by building simple models of human networks represented through games. We can play the games ourselves and watch our societal value increase or decreased based on the strategies we employ. It is interesting to see how innate desires for excellence and domination can lead players to try underhanded behavior that tends to lead to their own destruction. Taking these observations and pairing them with human studies we can see the efficacy of how our game models the human experience to some degree. Once this is done, we let bots train in the game to see what behaviors they find most effective. Interestingly enough, they typically are much more peaceful and consistent than humans are. Where people tend to attack out of fear of powerful enemies, bots rarely attack and as a society generate more prosperity. 

Our current model does really well, but one limitation is that there is no material need. The model assumes behavior where regardless of actions, the agent won't die completely. I am building a new model for our lab that includes a physical resource market alongside a societal network. The aim is to see how these two components work together, and how behavior changes as strengths are found in different areas. If an agent is physically wealthy, can it afford to act more aggressively to those outside of its primary group? Are the poorer agents more concerned with moral behavior or is any means justified if it leads to survival.

## Stack

Client Website - React 

Backend Service - Python and MySQL

Bot Server - Python

Bot Training - Python

## Photos

I am still building the project infrastructure, so there isn't any fun gameplay mechanics yet. Currently it is distributed and starts up a joinable game child process that verified users can connect to.

![takesAVillageHome](/images/takesAVillage/home.png)
![takesAVillageJoin](/images/takesAVillage/instructions.png)
![researchAccess](/images/takesAVillage/researchAccess.png)
![researchPage](/images/takesAVillage/researchPage.png)


