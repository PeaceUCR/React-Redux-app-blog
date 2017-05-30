# React-Redux-app-blog
https://www.udemy.com/react-redux/learn/v4/t/lecture/6954186?start=0
http://redux.js.org/docs/introduction/CoreConcepts.html
http://redux.js.org/docs/basics/DataFlow.html

Note:template use the redux simple start
index.html is the html to put the react component

1./src/index.js

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
//add the promise to the middleware otherwise the promise in  the action will not be parsed

store={createStoreWithMiddleware(reducers)}
// create the store

<BrowserRouter>
//React Router from single page navigation
 
ReactDOM.render
//render the element at the container in the Dom

2./src/actions/index.js
//this file contains the action creator,and the action is format as (type,payload)

3./src/components/new_post.js
//renderF(field)
the Field will be the argument,A Field component to connect your individual field inputs to the Redux store.
http://redux-form.com/6.7.0/docs/api/Field.md/
field.meta.touched,field.meta.error use to show the field is touched and with error.
http://redux-form.com/6.7.0/docs/api/ReduxForm.md/

4./src/components/post_index.js
mapDispatchToProps, contains the bindActionCreators, you can use the action creator through props
mapStateToProps, you can use the application state through props
connect
https://github.com/reactjs/react-redux/blob/master/docs/api.md

5./src/reducers
reducer will receive the previous state and action then generate the next application state
http://redux.js.org/docs/api/combineReducers.html
http://redux.js.org/docs/basics/Reducers.html

# How to use the code

npm start


