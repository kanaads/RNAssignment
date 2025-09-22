import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* Screen & modal */
  screen: {
    flex: 1,
    backgroundColor: "#C2F3FF",
  },
  title: {
    fontFamily: "Metamorphous-Regular",
    fontSize: 30,
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center'
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  modalCard: {
    width: 290,
    minHeight: 412,
    backgroundColor: "#C2F3FF",
    borderRadius: 8,
    padding: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#94a3b8",
  },
  modalTitle: {
    letterSpacing: 1,
    marginBottom: 8,
  },
  modalBody: {
    textAlign: "center", 
    marginTop: 6,
    backgroundColor: "#C2F3FF",
  },
  closeChip: {
    width: 27,
    height: 26,
    borderRadius: 5,
    backgroundColor: "#E06767",
    alignItems: "center",
    justifyContent: "center",
  },

  /* Button */
  buttonWrap: {
    alignSelf: "center",
    position: "relative",
    marginVertical: 4,
  },
  shadowBlock: {
    position: "absolute",
    borderRadius: 6,
  },
  shadowOffset: {
    transform: [{ translateX: 8 }, { translateY: 8 }],
  },
  button: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    paddingHorizontal: 12,
  },
  buttonAppText: {
    textAlign: "center",
  },
});

export default styles;
