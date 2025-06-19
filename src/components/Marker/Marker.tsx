import type { CSSProperties } from "react";
import type { Place } from "../../types/types";

type MarkerProps = {
  place: Place;
  lat: number;
  lng: number;
  show?: boolean;
  onClick: (placeIndex: number) => void;
};
export default function Marker({ show, place, onClick }: MarkerProps) {
  const markerStyle = {
    border: "1px solid white",
    borderRadius: "50%",
    height: 10,
    width: 10,
    backgroundColor: show ? "red" : "blue",
    cursor: "pointer",
    zIndex: 10,
  };

  return (
    <div style={markerStyle} onClick={() => onClick(place.id)}>
      {show && <InfoWindow place={place} />}
    </div>
  );
}

type InfoWindowProps = {
  place: Place;
};
function InfoWindow({ place: { id, address, name, notes} }: InfoWindowProps) {
  const infoWindowStyle: CSSProperties = {
    position: "relative",
    bottom: 100,
    left: "-105px",
    width: 220,
    backgroundColor: "white",
    boxShadow: "0 2px 7px 1px rgba(0, 0, 0, 0.3)",
    padding: 10,
    fontSize: 14,
    zIndex: 100,
    borderRadius: 8,
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>ID: {id}</div>
      <div style={{ fontSize: 14 }}>
        <span style={{ color: "grey" }}>{name} </span>
        {/* <span style={{ color: "orange" }}>
          {String.fromCharCode(9733).repeat(Math.floor(rating))}
        </span>
        <span style={{ color: "lightgrey" }}>
          {String.fromCharCode(9733).repeat(5 - Math.floor(rating))}
        </span> */}
      </div>
      <div style={{ fontSize: 14, color: "grey" }}>{address}</div>
      <div style={{ fontSize: 14, color: "grey" }}>{notes}</div>
      {/* <div style={{ fontSize: 14, color: "grey" }}>
        {"$".repeat(price_level)}
      </div> */}
      {/* <div style={{ fontSize: 14, color: "green" }}>
        {opening_hours.open_now ? "Open" : "Closed"}
      </div> */}
    </div>
  );
}
