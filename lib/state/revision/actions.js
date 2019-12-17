/**
 * Internal dependencies
 */
import {
  HIDE_REVISION_PANEL,
  REVISION_SELECT,
  SHOW_REVISION_PANEL,
} from '../action-types';

export const selectRevision = revision => ({
  type: REVISION_SELECT,
  revision,
});

export const showRevisionPanel = () => ({
  type: SHOW_REVISION_PANEL,
});

export const hideRevisionPanel = () => ({
  type: HIDE_REVISION_PANEL,
});
