# Flowster Tests 
## Time limit: 3 hours
<br/>
<br/>
This repository contains few different tasks which will test your React skills.

Some tasks are base-level. Some are more advanced. The more you complete - the better.
You're free to use Google or anything, but remember about the time limit of 3 hours

**ATTENTION:**

Before you begin, watch this video demonstration of how completed application should look like:
[Demonstration](https://youtu.be/NSKhZd-RG0s)

*&nbsp; Video doesn't contain `JS` part 

# Goals / Outcomes
- Using state 
- Using different React Hooks
- Using Material-UI makeStyles function
- Using basic and some advanced CSS

&nbsp;
# Your tasks:

**BASE LEVEL:**

- Launch the app


- On `API` page:  &nbsp;&nbsp;
  - Adjust `getUsers` function to save a response data, display users list in `return` block
  - Implement 2 sort methods. **Attention:** each sort function should modify `users` state, don't sort in `return` JSX
  - Add/modify needed CSS classes to make list look close to video


- On `React-Easy` page:
  - Implement `Increment by 1` button. It should increment counter by 1 and properly display it
  - Add/modify needed CSS classes to add a spacing between buttons


- On `JS` page:
  - Implement a function which checks an array of booleans and returns `true` if array contains both `false` and `true` values,
    and returns `false` if array contains only `false` or only `true`

**ADVANCED LEVEL**

- On `API` page:  &nbsp;&nbsp;
  - Display a loader (`/src/components/Loader.js`) while app is fetching users
  

- On `React-Easy` page:
  - Implement `Increment by 1000` button. It should increment counter by 1000 and display it.

    **Attention!** Don't remove `for` cycle. This function should increment counter by 1 *1000 times*
  - Implement spacing between buttons as in base level, but **Don't use inline styles.** Buttons shouldn't have any margin/padding except of one between them


- On `React-Advanced` page:
  - Implement or copy from `React-Easy` increment functions
  - Make `Fast Increment` button work fast.

    **Tip:** you should prevent recalculating slowCounter rendered value for certain cases

    **Tip:** This part will require more code changes than all the above


- On `JS` page:
  - Implement a function which checks an array of booleans and returns `true` if array contains both `false` and `true` values,
    and returns `false` if array contains only `false` or only `true`
    
    **Additional condition:** Function shouldn't create any variables, *including* cycle iterators


- Alerts. You'll find a special React Context in `/src/contexts/AlertContext.js`
  - Inject context in application
  - Use it to display 2 alerts after sorting on `API` page: "Sorted by Name" after sorted by name, and "Sorted by Email" after sorted by email