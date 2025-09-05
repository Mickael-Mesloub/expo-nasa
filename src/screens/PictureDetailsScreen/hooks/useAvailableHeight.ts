import { useCallback, useState } from 'react';
import { LayoutChangeEvent, useWindowDimensions } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

/**
 * Calculates the available screen height for a component to fill,
 * accounting for the header and layout position.
 */
export const useAvailableHeight = () => {
  const [availableHeight, setAvailableHeight] = useState(0);
  const { height: windowHeight } = useWindowDimensions();
  const headerHeight = useHeaderHeight();

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { y } = event.nativeEvent.layout;
    setAvailableHeight(windowHeight - headerHeight - y);
  }, []);

  return {
    availableHeight,
    onLayout,
  };
};
