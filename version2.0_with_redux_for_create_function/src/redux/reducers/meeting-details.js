import {
    SET_MEETING_DETAIL
  } from '../actionTypes/action-types';
  
  const intializedState = {
    zoomCode: '',
    zoomPassword: '',
    meetingLink: '',
    participantNo: 0,
    meetingDate: null,
    meetingStartTime: null,
    meetingEndTime: null,
  };
  
  export default meetingDetails = (state = intializedState, action) => {
    switch (action.type) {
      case SET_MEETING_DETAIL:
        return Object.assign({}, state, {
          ...action.payload,
        });
      default:
        return state;
    }
  };
  