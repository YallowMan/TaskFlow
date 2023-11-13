# Peer Review Feedback

Here the document will describe how the peer review process helped our project with the feedback as well as how the the issues and pull requests were handled. Whether or not they were accpeted or rejected.

## Issues

### Issue #1 by Daniel Dinh
- Unclear Documentation

Issue Message:
> Hi there, I'm having an issue with the project. So it's a little unclear on your documentation specifically for how to build the project on my local machine and how to test your code. If you could tell me what I would need to get your project built on my end and what I can expect when testing that would be great. If there's also anything that you would like to see as a contribution I can see if I can implement it from my end.

Issue Resposne: (Emily Nguyen)
> When you clone the repo onto your machine, all of the source code should be in the /src file. Currently, we have custom_blocks.js, index.html, and styles.css. To test the code, you can make changes and then push it to github. The code should show up on this URL: https://yallowman.github.io/TaskFlow/src. For testing purposes, there are blocks for creating a task in the "Task" toolbox, you can put your own text as well. We are currently have issues with the "Run JavaScript" button, but the "Generate JavaScript" button should work. Please let us know if you have any further questions!

Actions taken or will be taken:
- Updating the instructions is something we have to look at a lot closer as that is something we clearly have been lacking in terms of what is clear and helpful to those who would come across the project. Updating the README with instructions on how to build will be done as well as updating the actual instructions themselves. This is very helpful as it is clear that we were lacking in the department of actually getting some good documentation. 

### Issue #2 by Mason Li
- Blockly Workspace Window Size
  
Issue Message:
> Hello All, I'm currently having an issue with the size of the Blockly section on your preview webpage. It can become cramped, especially when the sub-menus are opened. I also think the default window size is a little small, even when nothing is open. I was wondering if this is intended behavior, or if there are any plans to change this? I'm also happy to try experimenting with this for with a pull request if this sounds interesting to you! Thank You!

Issue Resposne: (Carlos Garcia)
> This was planned to change but didn't really have an exact idea of it. This does sound interesting though and please feel free to experiment with it because it is something we'd like to look at.

Actions taken or will be taken:
- This actually pertains to a pull request made by our peer later. We ended up using this pull request as we felt in terms of our Html file was lacking in terms of looks and feel for a user on the blockly side. If it felt limiting to the user it would be a chore which is what we don't want when it comes to something where task managing is key, we wouldn't want the user to feel cramped. 

### Issue #3 by Ethan Clunie
- Code Not Working
  
Issue Message:
> Hey, I'm trying to get the code running so I can test the Blockly front-end in my browser but I can't get it running. I am unsure how to get this working and there isn't any documentation that explains how to build, run, or test this project. If you guys could provide some instructions for how I can actually run and test your project, that would be great.

Issue Resposne: (Emily Nguyen)
> When you clone the repo onto your machine, all of the source code should be in the /src file. Currently, we have custom_blocks.js, index.html, and styles.css. To test the code, you can make changes and then push it to github. The code should show up on this URL: https://yallowman.github.io/TaskFlow/src. For testing purposes, there are blocks for creating a task in the "Task" toolbox, you can put your own text as well. We are currently have issues with the "Run JavaScript" button, but the "Generate JavaScript" button should work. Please let us know if you have any further questions!

Actions taken or will be taken:
- Updating the instructions is something we have to look at a lot closer as that is something we clearly have been lacking in terms of what is clear and helpful to those who would come across the project. Updating the README with instructions on how to build will be done as well as updating the actual instructions themselves. This is very helpful as it is clear that we were lacking in the department of actually getting some good documentation. 

### Issue #4 by Max Starreveld
- Missing DB Implementation
  
Issue Message:
> Your project and block designs mentions some database implementation, but I did not find anything of the sort. How are we to review that? Are you currently just generating the code from the blocks and pasting it into some other program to simulate DB usage? I see no way to do that with your current codebase.

Issue Resposne: (Carlos Garcia)
> I don't think you would be able to review the DB implementation just yet as it hasn't necessarily been added yet nor have we done anything with Databases although it is planned to be done. Currently we haven't had a way to simulate DB usage either in some program.

Actions taken or will be taken:
- This is something we have been looking at closely and hopefully plan to have some sort of implementation with a database manager where we can have the information from each code block inserted into a databse where it could actually create a table database that could hold all the information input into it. It might also be able to act as a location to view said information in a neat area where they would possibly be able to alter the information and have task management in a well organized area in something like the PyCharm IDE that interacts with databases using SQL. PyCharm seems like the best bet in as that seems to be working well and we hope to have something to show for it soon to show some databse implementation. 
  
### Issue #5 by Daniel Dihn
- Peer Review Suggestion: Update Documentation/ README
  
Issue Message:
> Hey guys, so after looking over your project it seems like a pretty straightforward concept. As someone who has ADHD a tool like Taskflow would make it much simpler organizing and planning all of the tasks I need done within a single location. I suggest however that you should probably update your documentation and README as for someone who has never used or has only seen the project in passing, it's very difficult for someone to be able to look at what you have and understand what needs to be done and how to use your guys' project. I know during your presentation your team mentioned needing to have the blocks within a certain order or else there would be issues: this would be a great place to mention within your documentation or somewhere easily seen by potential users to make it easier to find and understand. I know that when we tried to build your project we ran into several issues so having clearer instructions on what your project does and how to walk through your project would be a great help.

Issue Resposne: (Carlos Garcia)
> Got it! Documentation is something we clearly need to look at and we will be updating that as soon as possible. Thanks for the suggestion!

Actions taken or will be taken:
- Updating the readme will be done as soon as possible and will make the documentation and instruction clear to the user how it is meant to be used or what should be done. This also has given the idea of being able to describe what each block is technically doing to make sure they can't really get lost. This will improve the project greatly as it will actually allow our users to make the tasks management blocks without having to feel lost and have something to go back on for instructions.

## Pull Requests

### Pull Request #1 by PeerMason Li

Pull Requesst Message: 
> I updated index.html and styles.css with slightly modified Google sample dynamically resizeable Blockly code from the Blockly documentation. Now the Blockly window dynamically resizes with the window size to make Blockly as large as possible within the window. I did this because I felt it was slightly limiting for TaskFlow's Blockly area to be limited to a set resolution, so there could have been display issues with different devices. I also did some minor cleanup to index.html, mainly removing redundant script imports in the header which were causing errors in the browser console. Otherwise, no other functionality should be different—generating code, saving, loading, etc should work as it did before.

Pull Request Response: (Carlos Garcia)
> Thanks for the changes! I didn't even know about the issues being cause by the redundant script imports either so thank you for that. 

Reason for Accepting the pull request:
- It helped make our html file alot more concise and with less errors so thats valuable that they don't get the errors anymore. Dynamically resizing the window is also good because it would limit the user otherwise and this helps us greatly as we didn't necessarily know how that would be done. 

### Pull Request #2 by Peer Daniel Dinh

Pull Request Message: 
> I updated the custom_month block to instead feature a dropdown for both the month and day. This is just for simplicity as there's only a set number of each within a year. I've also adjusted the year to be a text input directly on the same block as well. This was mainly done to streamline the process of having a custom date for a task so instead of having to drag out 3 separate text fields for month, day, and year the user can just grab the custom date block and set the due date much quicker. The generator block should still function the same as before.

Pull Request Response:(Carlos Garcia)
> This seems like a great little additive to the project and we like it! This wasn't something we had thought of as a separate block just seemed like a simple and quicker thing at the time. 

Reason for Accepting the pull request:
- This seems like a reasonable thing to add and it makes it easier for the user as they dont have use a separate block. Although not the biggest addition, still makes a good addition in terms of making the user not have to go through more hoops to add something. 
