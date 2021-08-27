import { LogBox } from 'react-native'

export const _handleDisableYellowBoxWarnings = () => {
  return LogBox.ignoreAllLogs(true)
}
