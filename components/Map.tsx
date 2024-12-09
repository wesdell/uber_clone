import { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { useDriverStore, useLocationStore } from "@/store";
import { calculateRegion, generateMarkersFromData } from "@/lib/map";
import { driversMock } from "@/mocks/driver";
import { MarkerData } from "@/types/type";
import { icons } from "@/constants";

const Map = ({ height }: { height: number }) => {
  const {
    userLongitude,
    userLatitude,
    destinationLongitude,
    destinationLatitude,
  } = useLocationStore();
  const { selectedDriver, setDrivers } = useDriverStore();
  const region = calculateRegion({
    userLongitude,
    userLatitude,
    destinationLongitude,
    destinationLatitude,
  });
  const [markers, setMarkers] = useState<MarkerData[]>([]);

  useEffect(() => {
    if (Array.isArray(driversMock)) {
      if (!userLatitude || !userLongitude) {
        return;
      }
    }

    const newMarkers = generateMarkersFromData({
      data: driversMock,
      userLatitude,
      userLongitude,
    });
    setMarkers(newMarkers);
  }, [userLatitude, userLongitude]);

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      initialRegion={region}
      style={{ height: height }}
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
          image={
            selectedDriver === marker.id ? icons.selectedMarker : icons.marker
          }
        />
      ))}
    </MapView>
  );
};

export default Map;
