import React, { useCallback } from 'react';
import { selectRevision } from '../state/revision/actions';
import { getRevisionDate } from '../state/revision/selectors';
import Slider from '../components/slider';
import { useDispatch, useSelector } from 'react-redux';

const RevisionSelector = () => {
  const revisions = useSelector(state => {
    debugger;
  });
  const dispatch = useDispatch();
  const onSelectRevision = useCallback(
    ({ target: { value } }) =>
      dispatch(selectRevision('REVISION_SELECT', value)),
    [dispatch]
  );

  const revisionDate = useSelector(state => getRevisionDate(state));

  if (!isPanelOpen) {
    return null;
  }

  const max = Math.max(revisions.length - 1, 1);
  const selection = Math.min(rawSelection, max);

  return (
    <div className="revision-selector">
      <div className="revision-date">{revisionDate}</div>
      <div className="revision-slider">
        <Slider
          min={0}
          max={max}
          value={selection}
          onChange={onSelectRevision}
        />
      </div>
      <div className="revision-buttons">
        <button
          className="button button-secondary button-compact"
          onClick={this.onCancelRevision}
        >
          Cancel
        </button>
        <button
          style={revisionButtonStyle}
          className="button button-primary button-compact"
          onClick={this.onAcceptRevision}
        >
          Restore Note
        </button>
      </div>
    </div>
  );
};

RevisionSelector.propTypes = {};

export default RevisionSelector;
