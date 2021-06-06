import {
  SET_MEETING_DETAIL
  } from '../actionTypes/action-types';
  
  export const setMeetingDetails = (data) => {
    return {
      type: SET_MEETING_DETAIL,
      payload: data,
    };
  };
  