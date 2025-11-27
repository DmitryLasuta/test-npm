import { Drawer, LoadingOverlay, Modal, ModalRoot, Tooltip } from '@mantine/core';
import { DEFAULT_DRAWER_PROPS } from './drawer';
import { DEFAULT_LOADING_OVERLAY_PROPS } from './loading-overlay';
import { DEFAULT_MODAL_PROPS } from './modal';
import { DEFAULT_TOOLTIP_PROPS } from './tooltip';
import modalStyles from './modal/modal.module.css';

export const OverlaysConfig = {
  Tooltip: Tooltip.extend({
    defaultProps: DEFAULT_TOOLTIP_PROPS,
  }),
  LoadingOverlay: LoadingOverlay.extend({
    defaultProps: DEFAULT_LOADING_OVERLAY_PROPS,
  }),
  Modal: Modal.extend({
    defaultProps: DEFAULT_MODAL_PROPS,
    classNames: modalStyles,
  }),
  ModalRoot: ModalRoot.extend({
    defaultProps: DEFAULT_MODAL_PROPS,
  }),
  Drawer: Drawer.extend({
    defaultProps: DEFAULT_DRAWER_PROPS,
  }),
};
