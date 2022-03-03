import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  emptyStateSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityEmptyState: {
    width: width * 0.9,
    height: width * 0.9,
  },
  activityEmptyStateLabel: {
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(16),
    color: Colors.GREY_TEXT,
    marginTop: -width * 0.08,
    marginBottom: width * 0.3,
  },
});
