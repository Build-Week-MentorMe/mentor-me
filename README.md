## MentorMe

# PITCH :

Be My Mentor lets you lend your business skills to an entrepreneurs across the globe. New entrepreneurs often have a lot of questions, and don't always have a mentor to ask. As an entrepreneur, whenever you need business advice, our volunteers are happy to help. By posting your questions, you can communicate directly and solve a problem. As an experience business owner you can help pay it forward just by installing the Be My Mentor app.

## For the MVP Create:

```
[x] 1. An on-boarding process for an entrepreneur
[x] 2. On-boarding process for a volunteer experienced business owner
[x] 3. Ability to easily create and post a question (including title, question, tagged business type, and optional photos/files)
[x] 4. Ability to easily edit / delete a question
[] 5. Ability for anyone to easily search / find posted questions - back end crashes with this function
[x] 6. Ability to respond to a posted question via message


ummmmm what ?
[] 7. Use a notification API like Twilio (https://www.twilio.com/) or Growl (http://growl.info/) to allow volunteers to be notified when a question is posted in their business type.

```

## Stretch: Allow photos or files to be attached to a posted question. Allow an entrepreneur to request a call with a mentor for a fee.

## CRUD

```

 '/register' => register the user,
    ...{
        firstname:'',   req
        lastname:'',    req
        email:'',       req
        password:''     req
    }

```

```
  '/login' => login to the api, AUTH ==> token
        req.body
    ...{
        email:''        req
        password:''     req
    }

```

```
    '/api/questions'
            or              => the questions list CRUD
    '/api/questions/:id'
        req.body
        {
            topic_id:'',    req
            content:'',     req
            user_id:'',     req
            imageUrl:''     opt
        }
```

```
    '/api/users'
        or              => the users list CRUD
    '/api/users/:id'
     ...{
        firstname:'',   req on put
        lastname:'',    req on put
        email:'',       req on put
        password:''     req on put
    }

```
