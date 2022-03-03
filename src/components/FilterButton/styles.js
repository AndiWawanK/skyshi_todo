import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, Colors} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginHorizontal: width * 0.03,
    position: 'relative',
  },
  filterButton: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: Colors.GREY_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButtonIcon: {
    width: width * 0.05,
    height: width * 0.04,
  },
  content: {
    backgroundColor: Colors.WHITE,
    elevation: 8,
    width: width * 0.5,
    position: 'absolute',
    zIndex: 5,
    top: width * 0.13,
    left: -width * 0.08,
    borderRadius: width * 0.02,
  },
  filterItem: {
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY_LIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIcon: {
    width: width * 0.044,
    height: width * 0.033,
  },
  filterTitle: {
    flex: 1,
    fontFamily: FONTS.poppins[400],
    color: Colors.BLACK_TEXT,
    fontSize: RFValue(12),
    marginTop: width * 0.006,
    paddingHorizontal: width * 0.03,
  },
  checkIcon: {
    fontSize: RFValue(13),
    color: Colors.GREY,
  },
});
