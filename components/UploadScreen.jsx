import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../app/config/colors";
import LottieView from "lottie-react-native";

export default function UploadScreen({ onDone, progress = 0, visible = false }) {
  const normalized =
    Number.isFinite(progress) && progress > 0
      ? Math.max(0, Math.min(1, progress))
      : 0;
  const showDone = normalized >= 1;

  if (!visible) return null;

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {!showDone ? (
            <Progress.Bar
              color={colors.primary}
              indeterminate={normalized <= 0}
              progress={normalized}
              width={200}
            />
          ) : (
            <LottieView
              source={require("../assets/animations/done.json")}
              style={styles.animation}
              autoPlay
              loop={false}
              onAnimationFinish={onDone}
            />
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
    height: 150,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 28,
    minWidth: 220,
    alignItems: "center",
  },
});
