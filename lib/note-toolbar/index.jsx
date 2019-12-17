import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../icon-button';
import BackIcon from '../icons/back';
import InfoIcon from '../icons/info';
import PreviewIcon from '../icons/preview';
import PreviewStopIcon from '../icons/preview-stop';
import RevisionsIcon from '../icons/revisions';
import TrashIcon from '../icons/trash';
import ShareIcon from '../icons/share';
import { showRevisionPanel } from '../state/revision/actions';
import SidebarIcon from '../icons/sidebar';
import { useDispatch } from 'react-redux';

const NoteToolbar = ({
  editorMode,
  onCloseNote,
  onDeleteNoteForever,
  onRestoreNote,
  onSetEditorMode,
  onShareNote,
  onShowNoteInfo,
  onTrashNote,
  markdownEnabled,
  note,
  toggleFocusMode,
}) => {
  const dispatch = useDispatch();

  const setEditorMode = () => {
    onSetEditorMode(editorMode === 'markdown' ? 'edit' : 'markdown');
  };

  const renderNormal = () => {
    const isPreviewing = editorMode === 'markdown';

    return !note ? (
      <div className="note-toolbar-placeholder theme-color-border" />
    ) : (
      <div className="note-toolbar">
        <div className="note-toolbar__column-left">
          <div className="note-toolbar__button">
            <IconButton
              icon={<SidebarIcon />}
              onClick={toggleFocusMode}
              title="Toggle Sidebar"
            />
          </div>
        </div>
        <div className="note-toolbar__column-right">
          <div className="note-toolbar__button note-toolbar-back">
            <IconButton
              icon={<BackIcon />}
              onClick={onCloseNote}
              title="Back"
            />
          </div>
          {markdownEnabled && (
            <div className="note-toolbar__button">
              <IconButton
                icon={isPreviewing ? <PreviewStopIcon /> : <PreviewIcon />}
                onClick={setEditorMode}
                title="Preview • Ctrl+Shift+P"
              />
            </div>
          )}
          <div className="note-toolbar__button">
            <IconButton
              icon={<RevisionsIcon />}
              onClick={() => dispatch(showRevisionPanel())}
              title="History"
            />
          </div>
          <div className="note-toolbar__button">
            <IconButton
              icon={<ShareIcon />}
              onClick={onShareNote.bind(null)}
              title="Share"
            />
          </div>
          <div className="note-toolbar__button">
            <IconButton
              icon={<TrashIcon />}
              onClick={onTrashNote.bind(null, note)}
              title="Trash"
            />
          </div>
          <div className="note-toolbar__button">
            <IconButton
              icon={<InfoIcon />}
              onClick={onShowNoteInfo}
              title="Info"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderTrashed = () => {
    return (
      <div className="note-toolbar-trashed">
        <div className="note-toolbar__column-left">
          <IconButton icon={<BackIcon />} onClick={onCloseNote} title="Back" />
        </div>
        <div className="note-toolbar__column-right">
          <div className="note-toolbar__button">
            <button
              type="button"
              className="button button-compact button-danger"
              onClick={onDeleteNoteForever.bind(null, note)}
            >
              Delete Forever
            </button>
          </div>
          <div className="note-toolbar__button">
            <button
              type="button"
              className="button button-primary button-compact"
              onClick={onRestoreNote.bind(null, note)}
            >
              Restore Note
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="note-toolbar-wrapper theme-color-border">
      {note && note.data.deleted ? renderTrashed() : renderNormal()}
    </div>
  );
};

NoteToolbar.propTypes = {
  note: PropTypes.object,
  onRestoreNote: PropTypes.func,
  onTrashNote: PropTypes.func,
  onDeleteNoteForever: PropTypes.func,
  onShowRevisions: PropTypes.func,
  onShareNote: PropTypes.func,
  onCloseNote: PropTypes.func,
  onShowNoteInfo: PropTypes.func,
  setIsViewingRevisions: PropTypes.func,
  toggleFocusMode: PropTypes.func,
  onSetEditorMode: PropTypes.func,
  editorMode: PropTypes.string,
  markdownEnabled: PropTypes.bool,
};

export default NoteToolbar;
