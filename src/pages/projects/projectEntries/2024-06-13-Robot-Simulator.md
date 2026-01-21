---
title: Robot Simulator
---

## Cooperation with Robots

There is a team in my research lab that is working on studying robot-human cooperation. AI can struggle with understanding its limits and when to ask for human help. In this study, we wanted to train a model that would play a block moving game. The goal of this game is to get the blocks set up into a 3x3 grid with the colors and shapes in the correct locations. I was able to see a need for a new simulator for quickly testing new model implementations. This model ran in Python using the PyGame library. The user is able to click and drag the blocks to help the bot as it asks for help. The generators that the bot is using to interact with the world are visible, and the user can toggle the different types of parameters that the bot is calculating on startup. This tool proved to be effective and helped the students doing the research implement their code quicker.

![fetchSim](/images/robotSim/robotSimulator.png)

## Stack

Python: pygame library
