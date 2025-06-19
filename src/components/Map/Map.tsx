import GoogleMapReact from "google-map-react";
import { useMemo, useState } from "react";
import { generateMarkers, markers } from "../../utils/data";
import Marker from "../Marker/Marker";

export default function Map() {
  const defaultProps = {
    center: {
      lat: 41.3870235,
      lng: 2.1700665,
    },
    zoom: 15,
  } as const;

  const [currentPlace, setCurrentPlace] = useState(-1);
  // const markers = useMemo(() => generateMarkers(1000, 0.001), []);
  
  const focusPlace = (id: number) => {
    setCurrentPlace(id);
  };
  const hidePlace = () => {
    setCurrentPlace(-1);
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // https://github.com/google-map-react/google-map-react-examples/blob/master/src/components/GoogleMap.js
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{
          clickableIcons: false,
          fullscreenControl: false,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
        onClick={hidePlace}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            place={marker}
            show={currentPlace === marker.id}
            onClick={(placeId) => focusPlace(placeId)}
            onHide={() => hidePlace()}
            lat={marker.lat}
            lng={marker.lng}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
