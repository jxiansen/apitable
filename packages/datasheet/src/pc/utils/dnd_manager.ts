import { createDragDropManager } from 'dnd-core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

export const dndH5Manager = createDragDropManager(HTML5Backend);
export const dndTouchManager = createDragDropManager(TouchBackend);
