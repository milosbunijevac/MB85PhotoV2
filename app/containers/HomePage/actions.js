import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://mb85photov2.prismic.io/api/v2';

// Prismic.api(apiEndpoint).then((api) => {
//   api.query('').then((response) => {
//     if (response) {
//       this.setState({ doc: response.results });
//     }
//   });
// });

export const REQUEST_POSTS = 'REQUEST_StoryPagePOSTS';
export const RECEIVE_POSTS = 'RECEIVE_StoryPagePOSTS';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_StoryPageSUBREDDIT';


const requestPosts = () => ({
  type: REQUEST_POSTS,
  payload: 'Requesting Posts in storyPage',
});

const receivePosts = (api) => ({
  type: RECEIVE_POSTS,
  payload: api,
});

export const invalidateSubreddit = () => ({
  type: INVALIDATE_SUBREDDIT,
  payload: 'Invalidation of posts in storyPage',
});

export const fetchPosts = (api) =>
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

   function dispatcher(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

     dispatch(requestPosts(api));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    // Prismic.api(apiEndpoint).then((api) => {
//   api.query('').then((response) => {
//     if (response) {
//       this.setState({ doc: response.results });
//     }
//   });
// });

     return Prismic.api(apiEndpoint)
  .then(
    (api2) => api2.query(Prismic.Predicates.at('document.type', 'stories'), { pageSize: 30 })
    // Do not use catch, because that will also catch
    // any errors in the dispatch and resulting render,
    // causing a loop of 'Unexpected batch number' errors.
    // https://github.com/facebook/react/issues/6895
  )
    .then((api3) =>
      // We can dispatch many times!
      // Here, we update the app state with the results of the API call.

      dispatch(receivePosts(api3))
    );
   };
