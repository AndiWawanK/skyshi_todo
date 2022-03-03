import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, Colors} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    maxHeight: width * 0.5,
    position: 'relative',
    zIndex: 100,
  },
  label: {
    fontFamily: FONTS.poppins[500],
    color: Colors.BLACK_TEXT,
    fontSize: RFValue(12),
    textTransform: 'uppercase',
  },
  selectSection: isSelected => ({
    height: width * 0.13,
    borderWidth: 1,
    borderColor: Colors.GREY_LIGHT,
    alignItems: 'center',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.03,
    marginTop: width * 0.02,
    backgroundColor: isSelected !== null ? Colors.WHITE : Colors.BACKGROUND,
    flexDirection: 'row',
  }),
  selectedValueSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedIndicator: color => ({
    width: width * 0.03,
    height: width * 0.03,
    backgroundColor: color,
    borderRadius: 75,
    marginRight: width * 0.03,
  }),
  selectPlaceholder: {
    flex: 1,
    fontFamily: FONTS.poppins[500],
    color: Colors.BLACK_TEXT,
    fontSize: RFValue(13),
    marginTop: width * 0.005,
  },
  chevronIcon: {
    fontSize: RFValue(20),
  },
  content: {
    maxHeight: width * 0.4,
    backgroundColor: Colors.WHITE,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.GREY_LIGHT,
    borderRadius: width * 0.02,
  },
  priorityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: Colors.GREY_LIGHT,
    position: 'relative',
  },
  priorityIindicator: color => ({
    width: width * 0.04,
    height: width * 0.04,
    backgroundColor: color,
    borderRadius: 75,
  }),
  priorityTitle: {
    flex: 1,
    fontFamily: FONTS.poppins[500],
    color: Colors.BLACK_TEXT,
    fontSize: RFValue(13),
    marginHorizontal: width * 0.03,
    marginTop: width * 0.005,
  },
  checkIcon: {
    fontSize: RFValue(18),
    color: Colors.GREY,
  },
});
