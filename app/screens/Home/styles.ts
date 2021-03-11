import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    height: '100%',
  },
  headerContainer: {
    marginLeft: 10,
  },
  logo: {
    height: 64,
    width: 64,
  },
  item: {
    marginTop: 10,
  },
  row: {
    alignItems: 'center',
  },
  fullWidthRow: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  col: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flex: 1,
    flexDirection: 'row',
  },
  controls: {
    width: '70%',
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    marginLeft: '15%',
    marginRight: '15%',
  },
  button: { width: 55 },
  largeButton: {
    width: 100,
    justifyContent: 'center',
  },
  icon: { width: 25 },
});

export default styles;
