import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChunkyButton from '../components/ChunkyButton';
import CongratsModal from '../components/CongratsModal';
import styles from './MainScreen.styles';
import { 
  ACCESSIBILITY, 
  TEST_IDS, 
  TEXT_CONSTANTS 
} from '../constants';
import { useMainViewModel } from '../viewmodels/MainViewModel';
import { ButtonUtils } from '../utils/ButtonUtils';

/**
 * MainScreen component following MVVM pattern
 * View layer - only handles UI rendering and user interactions
 */
const MainScreen: React.FC = () => {
  const viewModel = useMainViewModel();
  const { state, incrementFirstButton, incrementSecondButton, openModal, closeModal } = viewModel;

  return (
    <SafeAreaView style={styles.screen}>
      <Text
        style={styles.title}
        accessibilityRole="header"
        accessibilityLabel={ACCESSIBILITY.TITLE_LABEL}
      >
        {TEXT_CONSTANTS.TITLE}
      </Text>
      
      <View style={styles.spacer} />
      
      <View style={styles.container}>
        <ChunkyButton
          label={state.firstButton.label}
          onPress={incrementFirstButton}
          testID={TEST_IDS.ORANGE_BUTTON}
          {...ButtonUtils.createOrangeButtonConfig()}
        />

        <View style={styles.spacer} />
        <ChunkyButton
          label={state.secondButton.label}
          onPress={incrementSecondButton}
          testID={TEST_IDS.GREEN_BUTTON}
          {...ButtonUtils.createGreenButtonConfig()}
        />
        <View style={styles.spacer} />
        <ChunkyButton
          label="Click this button for a popup message"
          onPress={openModal}
          testID={TEST_IDS.POPUP_BUTTON}
          {...ButtonUtils.createPurpleButtonConfig()}
        />
      </View>

      <CongratsModal 
        visible={state.modal.isVisible} 
        onClose={closeModal} 
      />
    </SafeAreaView>
  );
};

export default MainScreen;