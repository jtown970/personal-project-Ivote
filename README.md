# I vote app #

  ## over view
  - The purpose of I vote is to see how you would vote compared to your representatives
  - I vote solves the problem of not knowing one how a rep is really voting and how your view line up
  - Target market for this app is US voters 

  ## MVP
  - users can vote on items that are being voted on by there representatives
  - users can see what their representatives are voting on and how they vote
  - users can update location
  - users can delete a vote 
  

# Front-end
  ## components 
  - app.js will have a getUser to see if the users session is authed
  - auth.js will handle logging in and out of a user
  - graph.js show user votes all need to learn chart.js or d3
  - dash.js will show user info, what they can vote on, extra and how other users vote
  - UserVotes.js will let users vote on items 
  - houseVotes.js will show how the house is voting on items  

  ## routes 
  - '/' will be the login page
  - '/dash' brings you to dash.js
  - '/UserVotes' takes users to votingBooth.js
  - '/houseVotes' takes users to house.js

# Back-end
  ## db

  - users table
    - id
    - user_name
    - password
    - location

  - user_votes table 
    - id 
    - users_id ref users(id)
    - item
    - yes
    - no

  - house table
    - id
    - rep_name
    - location

  - house_votes table
    - id
    - reps_name ref house(id)
    - item
    - passed
    - failed
    - yes
    - no

  - all_votes table 
    - id
    - item
    - join sum of users_votes
    - join sum of house_votes 
    - users_yes ref sum of users_votes(yes)
    - house_yes ref sum of house_votes(yes)
    - users_no ref sum of users_votes(no)
    - house_no ref sum of house_votes(no)

  

  ## end points 

  - GET '/api/user/:id'  
    receive: req.params {
              id: 1
              user_name: 'j'
              location: 'AZ'
              } 
    send: status(200)

  - GET '/api/userVotes/:id'  
    receive: req.params{
              id: 1
              user_name: 'j'
              location: 'AZ'
              item: 'item name'
              yes: true
              no false
    }
       send: {
              user_name: 'j'
              location: 'AZ'
              item: 'item name'
              yes: true
              no false
        }

  - GET '/api/houseRep/:id'  
        receive: req.params{
              id: 1
              rep_name: 't'
              location: 'AZ'
              item: 'item name'
              yes: true
              no false
    }
       send: {
              user_name: 't'
              location: 'AZ'
              item: 'item name'
              yes: true
              no false
        }


  - POST '/api/auth/register'  
    receive: req.body {
              username: 'name here' 
              password: 'password here'
              } 
    send: {
      user_id: 1
      username: 'name here',
    }

  - POST '/api/auth/login'  
    receive: req.body {
              username: 'name here' 
              password: 'password here'
              } 
    send: {
      username: 'name here',
      user_id: 1
    }

  - POST '/api/userVote'  
    receive: req.body {
              location: 'AZ'
              item: 'item name'
              yes: true 
              no: false
              } 
      send: {
              id: 1
              location: 'AZ'
              item: 'item name'
              yes: true 
              no: false
      }

  - PUT /api/user/:id
    receive: req.params {
      location: 'CO'
    }
    send status(200)

  - DELETE '/api/userVote/:id'
      receive: req.params {
      id: '1'
    }

    send: status(200)

    
# Points Plan 

## CORE
  - Responsive Design (10-15)
  - React Redux 
    - Must have store and reducer. 
    - Can read from store (mapStateToProps) (5pts)
    - Can write to store (dispatch) (5pts)
  - React Hooks
    - Uses react Hooks on at least 2 components. (5)
  - Authentication
    - Functioning authentication (10pts)

## Additional Technologies
  - You can earn a maximum of 30 points in this category.

  - ChartJS
    - Application displays  relevant data from database (5pts)
    - Users can view and dynamically generate data for a chart (5pts)
  - Sass or less 
    - Over 50% of project wide styling was done in Sass/Less format, with all major features used(variables, mixins, and nesting/inheritance). (10pts)
  - puppeteer (10) 
  - if not puppeteer use sockets (make a chat section)

  ## HOSTING
  - Hosted (10)
  - Registered under unique domain name (5)  


## Presentation
 - hopefully not null max(10)





  