
import  {addPostActionCreator,deletePostActionCreator}  from './profilesState-reducer';
import profilesStateReducer from './profilesState-reducer';



// it("new should be addet", () =>{

//   //1 test data
//   let action = addPostActionCreator("Vahe Avetisyan");
//   let state = {
//     posts: [
//       { id: 1, message: "Hi its my first post", likeCount: 50 },
//       { id: 2, message: "Hello World", likeCount: 0 },
//       { id: 3, message: "Today is burifull", likeCount: 10 },
//       { id: 4, message: "Yo", likeCount: 310 },
//     ],
//   }


//     //2 add action
//     let newState = profilesStateReducer(state,action);

//     //3 expectation

//     expect(newState.posts.length).toBe(5)


  
// })

// it("post should delete", () =>{

//   let action = deletePostActionCreator(4)
//    let state = {
//     posts: [
//       { id: 1, message: "Hi its my first post", likeCount: 50 },
//       { id: 2, message: "Hello World", likeCount: 0 },
//       { id: 3, message: "Today is burifull", likeCount: 10 },
//       { id: 4, message: "Yo", likeCount: 310 },
//     ],
//   } 

//   let newState = profilesStateReducer(state,action);

//   expect(newState.posts.length).toBe(3)

// })