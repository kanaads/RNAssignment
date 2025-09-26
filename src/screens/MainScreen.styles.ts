import { StyleSheet, Dimensions } from "react-native";
import {
  BUTTON_DIMENSIONS,
  MODAL_CONSTANTS,
  CLOSE_BUTTON,
  IMAGE_CONSTANTS,
  BUTTON_COLORS,
  CLOSE_BUTTON_COLORS,
  MODAL_COLORS,
} from "../constants";

const { height } = Dimensions.get("window");

// responsive styling 
const SPACER_HEIGHT = Math.max(8, Math.round(height * 0.02));
const CONTAINER_GAP = Math.max(16, Math.round(height * 0.03)); 
const TOP_SPACER_HEIGHT = Math.max(48, Math.round(height * 0.12)); 

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#C2F3FF",
  },

  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start", 
    alignItems: "center", 
    gap: CONTAINER_GAP,
  },

  title: {
    fontFamily: "Metamorphous-Regular",
    fontSize: 30,
    marginTop: 24,
    marginBottom: 0,
    textAlign: "center",
  },

  topSpacer: {
    height: TOP_SPACER_HEIGHT,
  },

  spacer: {
    height: SPACER_HEIGHT,
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: MODAL_COLORS.BACKDROP_OPACITY,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  modalCard: {
    width: MODAL_CONSTANTS.WIDTH,
    minHeight: MODAL_CONSTANTS.MIN_HEIGHT,
    backgroundColor: "#C2F3FF",
    borderRadius: MODAL_CONSTANTS.BORDER_RADIUS,
    padding: MODAL_CONSTANTS.PADDING,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#94a3b8",
    alignItems: "center",
  },

  modalTitle: {
    letterSpacing: 1,
    marginBottom: 8,
    fontSize: 26,
    textAlign: "center",
  },

  modalBody: {
    textAlign: "center",
    marginTop: 6,
    backgroundColor: "#C2F3FF",
    fontSize: 18,
    color: "#333",
  },

  closeChip: {
    width: CLOSE_BUTTON.WIDTH,
    height: CLOSE_BUTTON.HEIGHT,
    borderRadius: CLOSE_BUTTON.BORDER_RADIUS,
    backgroundColor: CLOSE_BUTTON_COLORS.BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  closeText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  catImage: {
    width: IMAGE_CONSTANTS.CAT_WIDTH,
    height: IMAGE_CONSTANTS.CAT_HEIGHT,
    borderRadius: IMAGE_CONSTANTS.CAT_BORDER_RADIUS,
    alignSelf: "center",
    marginVertical: 12,
  },

  closeContainer: {
    alignItems: "flex-end",
    width: "100%",
    padding: 8,
  },

  // Button styles...
  pressableWrap: {
    alignSelf: "center",
    position: "relative",
    marginVertical: 4,
    width: BUTTON_DIMENSIONS.DEFAULT_WIDTH + BUTTON_DIMENSIONS.SHADOW_OFFSET,
    height: BUTTON_DIMENSIONS.DEFAULT_HEIGHT + BUTTON_DIMENSIONS.SHADOW_OFFSET,
  },

  shadowBlock: {
    position: "absolute",
    borderRadius: 6,
  },

  shadowOffset: {
    transform: [
      { translateX: BUTTON_DIMENSIONS.SHADOW_OFFSET },
      { translateY: BUTTON_DIMENSIONS.SHADOW_OFFSET },
    ],
    backgroundColor: BUTTON_COLORS.ORANGE_SHADOW,
  },

  buttonFace: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  buttonLabel: {
    textAlign: "center",
    fontFamily: "Lacquer-Regular",
    fontSize: 18,
    fontWeight: "400",
    color: "#222",
  },
});

export default styles;