import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://mb85photov2.prismic.io/api/v2';

export const REQUEST_POSTS = 'REQUEST_LandscapePagePOSTS';
export const RECEIVE_POSTS = 'RECEIVE_LandscapePagePOSTS';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_LandscapePageSUBREDDIT';


const requestPosts = () => ({
  type: REQUEST_POSTS,
  payload: 'Requesting Posts in landscapePage',
});

const receivePosts = (api) => ({
  type: RECEIVE_POSTS,
  payload: api,
});

export const invalidateSubreddit = () => ({
  type: INVALIDATE_SUBREDDIT,
  payload: 'Invalidation of posts in landscapePage',
});

export const fetchPosts = (api, type, landscapename) =>
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
        (api1) => api1.getByUID(`${type}`, `${landscapename}`)

        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
      )
      .then((api2) =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePosts(api2))
      );
   };
