import React from 'react';
import { Modal, Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import AppText from './AppText';
import styles from '../screens/MainScreen.styles';
import { 
  ACCESSIBILITY, 
  TEST_IDS, 
  TEXT_CONSTANTS, 
  HIT_SLOP 
} from '../constants';

interface CongratsModalProps {
  readonly visible: boolean;
  readonly onClose: () => void;
}

/**
 * CongratsModal component for displaying gif, message
 */
const CongratsModal: React.FC<CongratsModalProps> = ({
  visible,
  onClose,
}) => {
  const handleBackdropPress = (): void => {
    onClose();
  };

  const handleModalContentPress = (event: any): void => {
    event.stopPropagation();
  };

  const handleClosePress = (): void => {
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      presentationStyle="overFullScreen"
    >
      <Pressable
        style={styles.modalBackdrop}
        onPress={handleBackdropPress}
        accessibilityRole="button"
        accessibilityLabel={ACCESSIBILITY.CLOSE_LABEL}
        accessibilityHint={ACCESSIBILITY.CLOSE_HINT}
        testID={TEST_IDS.MODAL_BACKDROP}
      >
        <Pressable
          onPress={handleModalContentPress}
          style={styles.modalCard}
          accessibilityViewIsModal
          accessible
        >
          <View style={styles.closeContainer}>
            <Pressable
              onPress={handleClosePress}
              hitSlop={HIT_SLOP.CLOSE}
              accessibilityLabel="Close"
              accessibilityRole="button"
              style={styles.closeChip}
              testID={TEST_IDS.CLOSE_CHIP}
            >
              <AppText style={styles.closeText}>
                {TEXT_CONSTANTS.CLOSE_SYMBOL}
              </AppText>
            </Pressable>
          </View>

          <AppText style={styles.modalTitle}>
            {TEXT_CONSTANTS.CONGRATULATIONS}
          </AppText>

          <FastImage
            source={require('../assets/cat.gif')}
            style={styles.catImage}
            resizeMode={FastImage.resizeMode.cover}
          />

          <AppText style={styles.modalBody}>
            {TEXT_CONSTANTS.POPUP_MESSAGE}
          </AppText>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default CongratsModal;