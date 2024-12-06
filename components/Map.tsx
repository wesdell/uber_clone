import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = ({ height }: { height: number }) => {
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={{ height: height }}
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      showsUserLocation={true}
      userInterfaceStyle="light"
    ></MapView>
  );
};

export default Map;
