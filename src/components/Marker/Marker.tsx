import type { Place } from "../../types/types";
import styles from "./Marker.module.scss";

type MarkerProps = {
  place: Place;
  lat: number;
  lng: number;
  show?: boolean;
  onClick: (placeId: number) => void;
  onHide: () => void;
};
export default function Marker({ show, place, onClick, onHide }: MarkerProps) {
  return (
    <div className={styles.marker} style={{
      backgroundColor: show ? "#f90000" : "#0000f9"
    }} onClick={() => onClick(place.id)}>
      {show && <InfoWindow place={place} onHide={onHide} />}
    </div>
  );
}

type InfoWindowProps = {
  place: Place;
  onHide: () => void;
};
function InfoWindow({
  place: { address, name, notes, barrio },
  onHide,
}: InfoWindowProps) {
  return (
    <div className={styles.info}>
      <div className={styles.inner}>
        <div className={styles.name}>
          <span>{name} </span>
          {/* <span style={{ color: "orange" }}>
            {String.fromCharCode(9733).repeat(Math.floor(rating))}
          </span>
          <span style={{ color: "lightgrey" }}>
            {String.fromCharCode(9733).repeat(5 - Math.floor(rating))}
          </span> */}
        </div>
        <div className={styles.address}>
          🏠 {address} ({barrio})
        </div>
        {notes && <div className={styles.notes}>📍 {notes}</div>}
        {/* <div style={{ fontSize: 14, color: "grey" }}>
          {"$".repeat(price_level)}
        </div> */}
        {/* <div style={{ fontSize: 14, color: "green" }}>
          {opening_hours.open_now ? "Open" : "Closed"}
        </div> */}
      </div>
      <button className={styles.close} onClick={onHide}>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            fill="#0F1729"
          />
        </svg>
      </button>
    </div>
  );
}
