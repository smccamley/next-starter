import React, { useEffect } from "react"

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api"
import getMarkers from "./getMarkers"

const GoogleMapComponent = () => {
  const lat = 51.462143999999995
  const lng = -0.1769472
  const zoom = 6
  const [markers, setMarkers] = React.useState([])

  useEffect(() => {
    getMarkersAsync()
  }, [])

  const getMarkersAsync = async () => {
    const markers = await getMarkers({ lat: 0, lng: 0 })
    setMarkers(markers)
  }

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}>
        <GoogleMap
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false,
          }}
          mapContainerStyle={{ height: "100%" }}
          center={{ lat, lng }}
          zoom={zoom}
        >
          {markers.map(item => {
            if (item.type === "helper") {
              return (
                <Marker
                  key={item.id}
                  position={item.location}
                  draggable={false}
                  animation={"DROP"}
                  icon={{
                    url: "/MapPinHelper.svg",
                  }}
                />
              )
            } else {
              return (
                <Marker
                  key={item.id}
                  position={item.location}
                  draggable={false}
                  animation={"DROP"}
                  icon={{
                    url: "/MapPinInNeed.svg",
                  }}
                />
              )
            }
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default GoogleMapComponent
