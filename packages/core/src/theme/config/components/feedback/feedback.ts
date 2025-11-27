import { Alert, Loader, Skeleton } from '@mantine/core';
import { DEFAULT_ALERT_PROPS } from './alert';
import { DEFAULT_LOADER_PROPS } from './loader';
import { DEFAULT_SKELETON_PROPS } from './skeleton';

export const FeedbackConfig = {
  Alert: Alert.extend({
    defaultProps: DEFAULT_ALERT_PROPS,
  }),
  Loader: Loader.extend({
    defaultProps: DEFAULT_LOADER_PROPS,
  }),
  Skeleton: Skeleton.extend({
    defaultProps: DEFAULT_SKELETON_PROPS,
  }),
};
