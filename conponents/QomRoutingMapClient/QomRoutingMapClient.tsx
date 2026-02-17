"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// --- تنظیم آیکون پیش‌فرض Leaflet (برای TypeScript) ---
delete (L.Icon.Default.prototype as any)._getIconUrl;
(L.Icon.Default as any).mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// --- تایپ‌ها ---
interface Spot {
  id: number;
  name: string;
  position: [number, number];
}

// --- کامپوننت برای زوم خودکار روی مسیر ---
interface FitBoundsProps {
  positions: [number, number][];
}

const FitBounds: React.FC<FitBoundsProps> = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    if (positions.length > 0) map.fitBounds(positions, { padding: [50, 50] });
  }, [positions, map]);

  return null;
};

export default function MasirPage() {
  const [userPos, setUserPos] = useState<[number, number] | null>(null);
  const [route, setRoute] = useState<[number, number][]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);

  const API_KEY =
    "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImE3ZTE4NGRlOTBiMTQwZWI4NzFkODk2NGUxOTdmOTdkIiwiaCI6Im11cm11cjY0In0="; // جایگزین با کلید خودت

  const tourismSpots: Spot[] = [
    { id: 1, name: "حرم حضرت معصومه", position: [34.6399, 50.8759] },
    { id: 2, name: "پارک خروشان", position: [34.641, 50.872] },
    { id: 3, name: "حسیسنه یزدی ها", position: [34.637, 50.8725] },
    { id: 4, name: "تکیه ی مشهدیا", position: [34.6425, 50.877] },
  ];

  // گرفتن موقعیت واقعی کاربر
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("مرورگر شما از موقعیت مکانی پشتیبانی نمی‌کند.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => setUserPos([pos.coords.latitude, pos.coords.longitude]),
      (err) => {
        setError("دسترسی به موقعیت مکانی شما داده نشده لطفا بررسی کنید.");
        console.error(err);
      }
    );
  }, []);

  // گرفتن مسیر واقعی
  const fetchRoute = async (destination: Spot) => {
    if (!userPos) return;
    setSelectedSpot(destination);
    setRoute([]);

    const url =
      "https://api.openrouteservice.org/v2/directions/driving-car/geojson";

    const body = {
      coordinates: [
        [userPos[1], userPos[0]],
        [destination.position[1], destination.position[0]],
      ],
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("خطا در دریافت مسیر");

      const data = await res.json();
      const coordinates: [number, number][] =
        data.features[0].geometry.coordinates.map((c: number[]) => [
          c[1],
          c[0],
        ]);
      setRoute(coordinates);
    } catch (err) {
      console.error(err);
      setError("خطا در دریافت مسیر از سرور OpenRouteService");
    }
  };

  if (!userPos)
    return (
      <div>{error ? error : "در حال پیدا کردن اسکان های دارای ظرفیت..."}</div>
    );

  return (
    <div className="container rounded-2xl flex flex-col gap-2.5 mt-7">
      {/* نقشه */}
      <MapContainer
        center={userPos}
        zoom={13}
        style={{ height: "400px", width: "100%", borderRadius:"16px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* مارکر موقعیت کاربر */}
        <Marker position={userPos}>
          <Popup>شما اینجا هستید</Popup>
        </Marker>

        {/* مارکرهای گردشگری */}
        {tourismSpots.map((spot) => {
          const isSelected = selectedSpot?.id === spot.id;

          const icon = new L.Icon({
            iconUrl: isSelected
              ? "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png"
              : "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
            iconSize: isSelected ? [35, 56] : [25, 41],
            iconAnchor: isSelected ? [17, 56] : [12, 41],
            popupAnchor: [0, -40],
            shadowUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
            shadowSize: [41, 41],
            shadowAnchor: [12, 41],
          });

          return (
            <Marker
              key={spot.id}
              position={spot.position}
              eventHandlers={{ click: () => fetchRoute(spot) }}
              icon={icon}
            >
              <Popup>{spot.name}</Popup>
            </Marker>
          );
        })}

        {/* مسیر واقعی */}
        {route.length > 0 && (
          <Polyline positions={route} color="blue" weight={4} />
        )}

        {/* زوم خودکار روی مسیر */}
        {route.length > 0 && selectedSpot && (
          <FitBounds positions={[userPos, selectedSpot.position]} />
        )}
      </MapContainer>
      {/* لیست مقصدها */}
      <div className="flex flex-col gap-2.5">
        {tourismSpots.map((spot) => (
          <button
            key={spot.id}
            onClick={() => fetchRoute(spot)}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border:
                selectedSpot?.id === spot.id
                  ? "2px solid #116EDB"
                  : "1px solid #ccc",
              background: selectedSpot?.id === spot.id ? "#E0F0FF" : "#fff",
              cursor: "pointer",
            }}
          >
            {spot.name}
          </button>
        ))}
      </div>
    </div>
  );
}
