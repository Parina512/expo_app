import React from 'react';
import { View, Platform} from 'react-native';
import ConfigApp from '../config/ConfigApp';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const bannerid = Platform.OS == "ios" ? ConfigApp.IOS_BANNER_ID : ConfigApp.ANDROID_BANNER_ID;

export default function AdmobBanner(){

    return (

      <View style={{alignSelf: 'center'}}>

        <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
        requestNonPersonalizedAdsOnly: true,
        }}
        />

      </View>

      )
}
