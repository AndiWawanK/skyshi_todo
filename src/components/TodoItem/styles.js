import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, Colors} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginVertical: width * 0.015,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    elevation: 8,
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.04,
    borderRadius: width * 0.035,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  checkSection: isChecked => ({
    width: width * 0.045,
    height: width * 0.045,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: isChecked ? Colors.PRIMARY : Colors.LINE_STROKE,
    backgroundColor: isChecked ? Colors.PRIMARY : Colors.WHITE,
  }),
  checkIcon: {
    fontSize: RFValue(12),
    color: Colors.WHITE,
  },
  indicator: color => ({
    width: width * 0.015,
    height: width * 0.015,
    borderRadius: 75,
    backgroundColor: color,
    marginHorizontal: width * 0.03,
  }),
  itemBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: isChecked => ({
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(14),
    color: isChecked ? Colors.GREY : Colors.BLACK_TEXT,
    marginTop: width * 0.005,
    marginRight: width * 0.04,
    textDecorationLine: isChecked ? 'line-through' : null,
    textDecorationStyle: isChecked ? 'solid' : null,
  }),
  pencilIcon: {
    fontSize: RFValue(11),
    color: Colors.GREY,
  },
  trashIcon: {
    paddingHorizontal: width * 0.02,
    fontSize: RFValue(16),
    color: Colors.GREY,
  },
});
