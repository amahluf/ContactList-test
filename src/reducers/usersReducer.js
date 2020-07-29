const SORT_USERS_BY_ID = "SORT_USERS_BY_ID";
const SORT_USERS_BY_STRING = "SORT_USERS_BY_STRING";
const SET_USERS = "SET_USERS";;
const ON_FINDE_USERS = "ON_FINDE_USERS";
const SET_USERS_RESERV = "SET_USERS_RESERV";
const ADD_NEW_USER = "ADD_NEW_USER";


let initialState = {
  users: [],
  usersReserv:[]
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case SORT_USERS_BY_ID: {  
      return {
        ...state,
        users: state.users.sort((a, b) =>
         action.payload === true ? a.id - b.id : b.id - a.id
        )    
      };
    }
    case SORT_USERS_BY_STRING: {
      const field = action.payload.str 
      action.payload.bool ?
      state.users.sort((a, b) => a[field].localeCompare(b[field]))
      :
      state.users.sort((a, b) => b[field].localeCompare(a[field]))
      return {
        ...state,
        users: state.users
      };
    }
    
    case ON_FINDE_USERS: {
      const onSearchUser = 
      state.users.filter(u => 
      u.firstName.toLowerCase().includes(action.payload.toLowerCase())||
      u.lastName.toLowerCase().includes(action.payload.toLowerCase())||
      u.email.toLowerCase().includes(action.payload.toLowerCase())||
      u.phone.toLowerCase().includes(action.payload.toLowerCase())
      )
      return {
        ...state,
        users: onSearchUser
      };
    }
    case SET_USERS_RESERV : {
      return {
        ...state,
        usersReserv: action.payload
      };
    }
    case ADD_NEW_USER : {
      state.users.unshift(action.payload)
      return {
        ...state,
        users: [...state.users]   
      };
    }
      default:
        return state;
  } 
};

export const setUsers = (data) => ({ 
  type: SET_USERS, 
  payload: data 
});
export const setUsersReserv = (data) => ({
  type: SET_USERS_RESERV, 
  payload: data
})
export const addNewUser = (data) => ({
  type: ADD_NEW_USER, 
  payload: data
})
export const sortUsersById = (str) => ({
  type: SORT_USERS_BY_ID,
  payload: str,
});
export const sortUsersByString = (bool,str) => ({
  type: SORT_USERS_BY_STRING,
  payload: {bool,str}
});
export const onFindeUsers = (str) => ({
  type: ON_FINDE_USERS, 
  payload: str
})
export default usersReducers;
