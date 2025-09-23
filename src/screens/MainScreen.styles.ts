import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Screen & Modal Styles
  screen: {
    flex: 1,
    backgroundColor: "#C2F3FF",
  },
  container: {
   
    padding: 6,
    justifyContent: "center",
    gap: 65,
  },
  title: {
    fontFamily: "Metamorphous-Regular",
    fontSize: 30,
    marginTop: 24,
    marginBottom: 0,
    textAlign: "center",
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
    alignItems: "center",
  },
  modalTitle: {
    letterSpacing: 1,
    marginBottom: 8,
    fontSize: 28,
    color: "#0000",
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
    width: 27,
    height: 26,
    borderRadius: 5,
    backgroundColor: "#E06767",
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
    width: 250,
    height: 250,
    borderRadius: 6,
    alignSelf: "center",
    marginVertical: 12,
  },
  closeContainer: {
    alignItems: "flex-end",
    width: "100%",
    padding: 8,
  },

  // Button Styles
  pressableWrap: {
    alignSelf: "center",
    position: "relative",
    marginVertical: 4,
  },
  shadowBlock: {
    position: "absolute",
    borderRadius: 6,
  },
  buttonFace: {
    position: "absolute",
    top: 0,
    left: 0,
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
  spacer: {
    height: 36,
  },
});

export default styles;
