import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import colors from '../app/config/colors';

export default function OfflineNotice() {
  const netInfo = useNetInfo();
  const isOffline =
    netInfo.type !== 'unknown' && netInfo.isInternetReachable === false;

  if (!isOffline) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No internet connection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    top: StatusBar.currentHeight ?? 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: '600',
  },
});
