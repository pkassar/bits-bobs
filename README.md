#### To start:
npm install
npm run

#### Approach:
I decided to spend most of the time allocated to work on the look of the page. I therefore tried to change the style.scss as much as possible to air out the information on the page. I thought I was going to be able to implement things very quickly like the mock I had drawn but things took a little bit longer than I would have expected.

I chose some of the information I thought to be the most relevant from the customer data and displayed it on the page.

I decided to have a pie chart for each entry in order to visualise the personality traits efficiently.

I wanted to link the dominant traits color to one I used in the pie chart in order to use it as a legend but fell a little bit short on time. In retrospect I could have used a heavier pie chart module with the possibility of a built in legend instead of building my own. I tried to keep it as light as possible in order to not feel like I was hacking the problem.


#### In progress:
I started implementing the feature for infinite scroll by adding the React Infinite Scroller component to the page. I feel like I was really close to figuring out how to make it work but unfortunately couldn't manage to implement it on time. Scrolling to the bottom of the page would remove all the data instead of loading the next entries, I therefore commented out the nextPage function in order to still be able to see the page normally.


#### Next features to implement:
to reiterate:
+ I would have finished linking the legend color for the pie chart
+ Need to finish implementing the infinite Scroller
+ Would have added a pop up summary of the data on click of a button. It could have included a bar chart for the most common attributes, a distribution graph for the age and the top 10 most common professions.


Thank you
