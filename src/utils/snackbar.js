import Snackbar from 'react-native-snackbar';
import { color, fontFamily } from '.';

export const showToast = (text) => {
    Snackbar.show({
      text: `${text}`,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: color.primary,
      fontFamily: fontFamily.bold
    })
}