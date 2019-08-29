import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {
  View,
  Platform,
  BackHandler,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from 'react-native';
import {styles} from './styles';
import {appSettingsSelector} from '../../redux/selector';
import {AppSettingsActions} from '../../redux';
import {connect} from 'react-redux';
import {SearchResultItem, SearchResultHeader} from '../../components';
import {Colors} from '../../themes';

const tempSearchHistoryData = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

class SearchResultScreen extends Component {
  static navigationOptions = {
    gesturesEnabled: Platform.OS !== 'ios',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  _keyExtractor = (item, index) => item.id.toString();

  componentDidMount(): void {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount(): void {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    this.onBack();
    return true;
  };

  onBack = () => {
    this.props.navigation.goBack();
  };

  renderSearchHistories = ({item, index}) => {
    return (
      <View style={styles.searchHistoryRowView}>
        <SearchResultItem onPress={() => {}} />
        <View style={styles.verticalSpacing} />
      </View>
    );
  };

  onFilter = () => {
    this.props.navigation.navigate('Filter');
  };

  render() {
    return (
      <SafeAreaView style={styles.searchContainer}>
        <SearchResultHeader onBack={this.onBack} />
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              paddingHorizontal: 10,
            }}>
            <View style={[styles.searchResultTopTagView, {marginLeft: 0}]}>
              <Image
                source={require('../../assets/icon_search_result_clock.png')}
                style={{width: 15, height: 15, resizeMode: 'contain'}}
              />
              <Text
                style={{color: Colors.primary, fontSize: 12, marginLeft: 5}}>
                16:57 - 19:57
              </Text>
            </View>
            <View style={styles.searchResultTopTagView}>
              <Image
                source={require('../../assets/icon_search_result_radius.png')}
                style={{width: 14, height: 15, resizeMode: 'contain'}}
              />
              <Text
                style={{color: Colors.primary, fontSize: 12, marginLeft: 5}}>
                3 km radius
              </Text>
            </View>
            <View style={styles.searchResultTopTagView}>
              <Image
                source={require('../../assets/icon_search_result_syna.png')}
                style={{width: 17, height: 17, resizeMode: 'contain'}}
              />
              <Text
                style={{color: Colors.primary, fontSize: 12, marginLeft: 5}}>
                Syna
              </Text>
            </View>
          </View>
          <View style={{padding: 10, paddingBottom: 40}}>
            <FlatList
              data={tempSearchHistoryData}
              renderItem={this.renderSearchHistories}
              showsHorizontalScrollIndicator={false}
              keyExtractor={this._keyExtractor}
            />
          </View>
        </View>
        <View style={styles.newSearchResultButtonContainer}>
          <View style={styles.searchResultFilterButton}>
            <Text style={styles.searchResultsText}>4 results found</Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: Colors.primary,
                height: 50,
                borderRadius: 25,
                paddingHorizontal: 40,
              }}
              onPress={this.onFilter}>
              <Image
                source={require('../../assets/icon_search_result_filter.png')}
                style={styles.newSearchImage}
              />
              <Text style={{fontSize: 18, color: 'white', marginLeft: 5}}>
                Filters
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  ...appSettingsSelector(state),
});
const mapDispatchToProps = dispatch => ({
  updateDeviceStatus: isDeviceTurnON =>
    dispatch(AppSettingsActions.updateDeviceStatus(isDeviceTurnON)),
  updateLightStatus: isLightTurnON =>
    dispatch(AppSettingsActions.updateLightStatus(isLightTurnON)),
  updateLanguage: language =>
    dispatch(AppSettingsActions.updateLanguage(language)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResultScreen);
