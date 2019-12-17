/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import {
  HIDE_REVISION_PANEL,
  REVISION_SELECT,
  SHOW_REVISION_PANEL,
} from '../action-types';

export const selectedRevision = (state = null, { type, revision }) =>
  REVISION_SELECT === type ? revision : state;

export const revisionPanelOpen = (state = null, { type }) => {
  switch (type) {
    case HIDE_REVISION_PANEL:
      return false;
    case SHOW_REVISION_PANEL:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  revisionPanelOpen,
  selectedRevision,
});
