import type { Place } from "../types/types";

// barcelona
export const coords = { lat: 41.3870235, lng: 2.1700665 };

export const generateMarkers = (count: number, k = 0.01): Place[] =>
  [...Array(count)].fill(0).map((__, index) => ({
    id: index,
    lat:
      coords.lat +
      k *
        index *
        Math.sin((30 * Math.PI * index) / 180) *
        Math.cos((50 * Math.PI * index) / 180) +
      Math.sin((5 * index) / 180),
    lng:
      coords.lng +
      k *
        index *
        Math.cos(70 + (23 * Math.PI * index) / 180) *
        Math.cos((50 * Math.PI * index) / 180) +
      Math.sin((5 * index) / 180),
      address: `Address ${index + 1}`,
      name: `Name ${index + 1}`,
      notes: `Notes ${index + 1}`,
  }));
