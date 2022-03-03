import {API_URL} from '@env';
import {apiGet, apiPost, apiDelete, apiPut, apiPatch} from 'constants';

export const getActivitiy = () => {
  return apiGet(`${API_URL}/activity-groups?email=andi%2B1%40skyshi.io`);
};
export const createActivitiy = data => {
  return apiPost(`${API_URL}/activity-groups`, data);
};
export const deleteActivitiy = activityId => {
  return apiDelete(`${API_URL}/activity-groups/${activityId}`);
};
export const updateActivitiy = (data, activityId) => {
  return apiPatch(`${API_URL}/activity-groups/${activityId}`, data);
};

// activity item endpoint
export const getActivitiyItem = activityId => {
  return apiGet(`${API_URL}/todo-items?activity_group_id=${activityId}`);
};
export const updateActivitiyItem = (data, activityItemId) => {
  return apiPatch(`${API_URL}/todo-items/${activityItemId}`, data);
};
export const deleteActivitiyItem = activityItemId => {
  return apiDelete(`${API_URL}/todo-items/${activityItemId}`);
};
export const createActivitiyItem = data => {
  return apiPost(`${API_URL}/todo-items`, data);
};
