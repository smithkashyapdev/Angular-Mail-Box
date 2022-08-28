
# Mail Box

Angular Application which facilitate Mail box feature like Inbox,Draft and sent in nav bar section.We can do crud operation and manage these state locally.

# Using Angular concepts
In this app we are using angular concepts are following these:

    Angular Cli: Added components and modules and service by using angular cli.

    Routing : Using Routing concept through html and typescript file.

    Shared Modules : Using shared module to optimize the performance of the app and achieve the reusebility of the modules.

    Services:Using Angular service to manage the state of the data between multiple components

    Rxjs: Using Behaviour subject ,Observers Emitters to get the data with real time behaviour.

    json-server: Get a full fake REST API with zero coding in less than 30 seconds



## App Working

    As we are using the fake Rest Api to achieve the objective of the mail box.
    We are using the StateService and EmailService .In Stateservice we are maintaining our state to achieve the functionality through fake Rest APis.
    In EmailService we are doing crud opertaion for mail box .
    And shared module helps to make our resource reusable.
    BehaviorSubject is a type of subject, a subject is a special type of observable so you can subscribe to messages like any other observable. 
## Steps to Play

        1. npm i
        2. npx json-server --watch src/api/db.json
        3. ng serve

## Add on  

    Trying to deploy on Netlify
    (https://statuesque-custard-1b9968.netlify.app/) But due to fake rest apis its not deployed properly.
    