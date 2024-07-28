import { StyleSheet } from "react-native";
import theme from "../../../theme";

const welcomeStyles = () => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.mediumViolet,
    },
    bottomSection: {
      flex: 2,
      borderWidth: 1,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      backgroundColor: theme.colors.backGround,
      alignItems: "center",
      padding: 20,
      paddingTop: 60,
      gap: 20,
    },
    bottomSectionCircle: {
      backgroundColor: "white",
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    bottomSectionTitle: {
      fontFamily: "Roboto-Medium",
      fontSize: 37,
      color: theme.colors.textPrimary,
    },
    bottomSectionText: {
      fontFamily: "Roboto-Regular",
      fontSize: 17,
      color: theme.colors.textSecondary,
      textAlign: "center",
    },
    bottomSectionButtonsBox: {
      width: "100%",
      gap: 10,
      position: "absolute",
      bottom: "10%",
    },
  };
};

export default StyleSheet.create(welcomeStyles);
