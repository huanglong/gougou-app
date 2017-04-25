import * as types from '../actions/actionTypes'

const initialState = {
  page: 0,
  total: 0,
  nextPage: 1,
  commentList: [],
  nextCommentList: [],
  isLoading: true,
  modalVisible: false,
  commentDone: false,
  isLoadMore: false
}

let commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS_STAET:
      return {
        ...state,
        isLoadMore: action.payload.isLoadMore,
        isLoading: action.payload.isLoading
      }
    case types.FETCH_COMMENTS_REJECTED:
      return {
        ...state,
        commentList: [],
        isLoading: false
      }
    case types.FETCH_COMMENTS_FULFILLED:
      return {
        ...state,
        commentList: action.payload.commentList,
        commentTotal: action.payload.commentTotal,
        nextPage: action.payload.nextPage,
        page: action.payload.page,
        isLoadingTail: action.payload.isLoadingTail,
        isLoading: false
      }
    case types.WILL_COMMENT:
      return {
        ...state,
        commentDone: false
      }
    case types.SEND_COMMENTS_STAET:
      return Object.assign({}, state, {
        commentDone: false
      })
    case types.SEND_COMMENTS_REJECTED:
      return {
        ...state,
        videoList: [],
        commentDone: false,
        isLoading: false
      }
    case types.SEND_COMMENTS_FULFILLED:
      return {
        ...state,
        commentList: action.payload.commentList,
        commentTotal: action.payload.commentTotal,
        isLoadingTail: action.payload.isLoadingTail,
        commentDone: true,
        isLoading: false
      }
    default:
      return state
  }
}

export default commentReducer
