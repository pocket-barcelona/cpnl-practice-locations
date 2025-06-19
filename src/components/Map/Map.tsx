import GoogleMapReact from "google-map-react";
import { useMemo, useState } from "react";
import { generateMarkers } from "../../utils/fakeData";
import Marker from "../Marker/Marker";

export default function Map() {
  const defaultProps = {
    center: {
      lat: 41.3870235,
      lng: 2.1700665,
    },
    zoom: 11,
  } as const;

  const [currentPlace, setCurrentPlace] = useState(-1);
  const markers = useMemo(() => generateMarkers(1000, 0.001), []);

  const focusPlace = (index: number) => {
    setCurrentPlace(index);
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // https://github.com/google-map-react/google-map-react-examples/blob/master/src/components/GoogleMap.js
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers.map((marker, index) => (
          <Marker
            key={marker.id}
            place={marker}
            show={currentPlace === index}
            onClick={(newIndex) => focusPlace(newIndex)}
            lat={marker.lat}
            lng={marker.lng}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
