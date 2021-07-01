import {actionType} from "./actionType";

export function showCamera(show) {
    return {
        type: actionType.ui.showCamera,
        payload: show
    }
}

export function setProfilePhoto(photo) {
    return {
        type: actionType.ui.setProfilePhoto,
        payload: photo
    }
}