# ALab Control Flow

Task: Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.

Instructions:

Initialize a new git repository in a local project folder, and create a JavaScript file to contain your code. Complete the activity below.
Commit frequently! Every time something works, you should commit it. Remember, you can always go back to a previous commit if something breaks.

### Part 1

Here is the information you have been given:

- The area in which the plants are contained is circular, with a radius of 5 meters.
- The formula for calculating the area of a circle is PI multiplied by the radius, squared:const PI = 3.1415;const area = PI _ radius _ radius;
- Each plant requires a minimum space of 0.8 square meters.
- The area is starting with 20 plants.
- The plants double in number every week.

Using this information, your objectives are to:

- Predict the plant growth after a specific number of weeks.
  Implement control flow to make decisions on whether the plants should be:

  - Pruned, to stop them from exceeding the capacity of the garden.

    - This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.

  - Monitored, if they are growing at an acceptable rate.

    - This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.

  - Planted, if there is room to plant more plants.

    - This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
      Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

### Part 2: Thinking Bigger

The conservation area in which the garden is located has multiple other gardens.
Using the logic you have already created, determine:
The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
If the space remained circular, what would be the radius of this expanded garden?

### Part 3: Errors in Judgement

The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

https://github.com/kaidecoder/308.2.1C

### SOLUTION:


- 1 week of growth
  ![modal image](./images/Screenshot%202023-11-24%20at%203.18.28%E2%80%AFPM.png)
- 1 week of growth
  ![modal image](./images/Screenshot%202023-11-24%20at%203.19.31%E2%80%AFPM.png)

- 2 weeks of growth
  ![modal image](/images/Screenshot%202023-11-24%20at%203.20.24%E2%80%AFPM.png)
- 2 weeks of growth
  ![modal image](/images/Screenshot%202023-11-24%20at%203.20.51%E2%80%AFPM.png)

- 3 weeks of growth
  ![modal image](/images/Screenshot%202023-11-24%20at%203.21.22%E2%80%AFPM.png)
- 3 weeks of growth
  ![modal image](/images/Screenshot%202023-11-24%20at%203.20.51%E2%80%AFPM.png)

- Thinking Bigger
  ![modal image](/images/Screenshot%202023-11-24%20at%206.24.49%E2%80%AFPM.png)

- Errors in Judgement
  ![modal image](/images/Screenshot%202023-11-24%20at%206.26.28%E2%80%AFPM.png)


