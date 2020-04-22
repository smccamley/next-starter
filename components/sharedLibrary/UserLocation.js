import React from "react"

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api"

const UserLocation = ({ location, height, width }) => {
  const lat = location.lat
  const lng = location.lng
  const zoom = 16

  return (
    <div style={{ height, width }}>
      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}>
        <GoogleMap
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false,
          }}
          mapContainerStyle={{ height }}
          center={{ lat, lng }}
          zoom={zoom}
        >
          <Marker
            position={location}
            animation={"DROP"}
            icon={{
              url: "/MapPin.svg",
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default UserLocation
