import firebase from "./firebase";

const db = firebase.database();

const newTask = (code, date, starttime, endtime, pax, zoomlink, zoomcode, zoompassword, full) => ({ 
  code, date, starttime, endtime,pax, zoomlink, zoomcode, zoompassword, full });

export const createTask = async ({ userId, code, date, starttime, endtime, pax, zoomlink, zoomcode, zoompassword}, onSuccess, onError) => {
  try {
    // push generates a new child node on the client side
    // thus allowing us to grab the correct new node id
    const task = db.ref(`tasks/${userId}`).push();
    await task.set(newTask(task.key, code, date, starttime, endtime,pax,zoomcode,zoompassword,zoomlink,false ));
    return onSuccess(task);
  } catch (error) {
    return onError(error);
  }
}


const setDetails = async ({ userId, taskId }, onSuccess, onError) => {
  try {
    const task = db.ref(`tasks/${userId}/${date}`);
    await task.update({ date });
    return onSuccess(task);
  } catch (error) {
    return onError(error);
  }
}

export const updateDate = ({ userId, date }, onSuccess, onError) => {
  return setDetails({ userId, date }, onSuccess, onError);
}

export const updateStarttime = ({ userId, starttime }, onSuccess, onError) => {
  return setDetails( { userId, starttime}, onSuccess, onError);
}

export const updateEndtime = ({ userId, endtime }, onSuccess, onError) => {
  return setDetails( { userId, endtime}, onSuccess, onError);
}

export const updateZoomlink = ({ userId, zoomlink }, onSuccess, onError) => {
  return setDetails( { userId, zoomlink}, onSuccess, onError);
}

export const updateZoomcode = ({ userId, zoomcode }, onSuccess, onError) => {
  return setDetails( { userId, zoomcode}, onSuccess, onError);
}

export const updateZoompassword = ({ userId, zoompassword }, onSuccess, onError) => {
  return setDetails( { userId, zoompassword}, onSuccess, onError);
}



export const subscribe = (userId, onValueChanged) => {
  const tasks = db.ref(`tasks/${userId}`);
  tasks.on("value", (snapshot) => onValueChanged(snapshot.val()));
  return () => tasks.off("value");
}