import { Alert } from "react-native";

export function showAlert (title, message, isSingleBtnAlert, okBtnPress = undefined, cancelBtnPress = undefined) {
  const btnArray = []

  if (isSingleBtnAlert) {
    btnArray.push({ text: 'OK', onPress: okBtnPress, style: 'cancel' })
  } else {
    btnArray.push({ text: 'Cancel', onPress: cancelBtnPress, style: 'cancel' })
    btnArray.push({ text: 'OK', onPress: okBtnPress })
  }

  Alert.alert(title, message, btnArray, { cancelable: false })
}