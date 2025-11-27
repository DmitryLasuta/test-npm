import { ScrollArea, type ModalProps } from '@mantine/core';

export const DEFAULT_MODAL_PROPS: Partial<ModalProps> = {
  zIndex: 1026,
  centered: false,
  scrollAreaComponent: ScrollArea.Autosize,
};
