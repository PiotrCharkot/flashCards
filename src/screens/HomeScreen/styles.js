import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    menuContainer: {
        height: 200,
        width: 200,
        borderRadius: 20,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 1,
        shadowColor: "aqua",
        shadowOpacity: 1,
        shadowRadius: 50.68,
        elevation: 1,
        position: "absolute",
        zIndex: 1
    },
    blueBall: {
        
        backgroundColor: "aqua",
        shadowColor: "aqua",
        shadowOpacity: 1,
        shadowRadius: 16.68,
        elevation: 1
    },
    greenBall: {
        
        backgroundColor: "green",
        shadowColor: "aqua",
        shadowOpacity: 1,
        shadowRadius: 16.68,
        elevation: 1
    }
})

export default styles; 