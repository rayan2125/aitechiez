import React from 'react';
import { View } from 'react-native';
import { Banner, Button } from 'react-native-paper';
const Update = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const hideBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <View>
      {isBannerVisible && (
        <Banner
          visible={isBannerVisible}
          actions={[
            {
              label: 'Hide',
              onPress: hideBanner,
            },
          ]}
        >
          This is your banner message.
        </Banner>
      )}
      {/* Add the rest of your content here */}
    </View>
  );
};
export default Update;