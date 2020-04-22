import React, { useState } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import styled from "styled-components"
import ScaleLoader from "react-spinners/ScaleLoader"

import { SubmitButton } from "./Buttons"
import { WhiteBoxWithShadow } from "./GlobalStyles"
import ErrorBubble from "./ErrorBubble"

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
  position: relative;
`

const OverlayContainer = styled.div`
  height: 400px;
  width: 100%;
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.73);
`

const PinInfoText = styled(WhiteBoxWithShadow)`
  padding: 10px;
  text-align: center;
  font-weight: 400;
  width: 100%;
  top: 4px;
  position: relative;
  margin-top: 15px;
  margin-bottom: 4px;
  font-size: 19px;

  .red {
    color: darkred;
  }
  .underline {
    text-decoration: underline;
  }
`

const ContainerText = styled(WhiteBoxWithShadow)`
  padding: 10px;
  text-align: center;
  font-weight: 400;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  position: relative;
  b {
    font-weight: 700;
  }
  .red {
    color: darkred;
  }
  .underline {
    text-decoration: underline;
  }
`
const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid darkgray;
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translate(-50%);
`

const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 14px solid white;
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translate(-50%);
`

const LocationPicker = ({
  defaultZoom = 3,
  error = false,
  onNewLocation = () => {},
}) => {
  const [userLatLng, setUserLatLng] = useState(false)

  const [center] = useState({ lat: 50, lng: -20 })
  const [zoom, setZoom] = useState(defaultZoom)

  const [loading, setLoading] = useState(true)
  const [findingUserLocation, setFindingUserLocation] = useState(false)

  const useYourLocation = () => {
    setFindingUserLocation(true)
    navigator.geolocation.getCurrentPosition(e => {
      const { latitude, longitude } = e.coords
      setUserLatLng({ lat: latitude, lng: longitude })
      onNewLocation({ lat: latitude, lng: longitude })
      setZoom(18)
      setFindingUserLocation(false)
    })
  }

  const onChildMouseUp = e => {
    let latlng = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    }
    setUserLatLng(latlng)
    onNewLocation(latlng)
  }

  const onGoogleApiLoaded = () => {
    setLoading(false)
  }

  return (
    <div style={{ marginBottom: "33px" }}>
      {error && (
        <ErrorBubble>
          It looks like you've not selected your location
        </ErrorBubble>
      )}
      <MapContainer>
        {(loading || findingUserLocation) && (
          <OverlayContainer>
            <ScaleLoader size={15} color={"#FFFFFF"} loading={true} />
          </OverlayContainer>
        )}
        {!loading && !findingUserLocation && !userLatLng && (
          <OverlayContainer>
            <ContainerText>
              <b>Select use your location</b> then postition the target pin{" "}
              <span className="red underline">close</span> to you
              <ArrowDown />
            </ContainerText>
            <div style={{ marginTop: "15px", marginBottom: "35px" }}>
              {false && (
                <SubmitButton style={{ marginRight: "15px" }}>
                  Search
                </SubmitButton>
              )}
              {!loading && (
                <SubmitButton onClick={useYourLocation}>
                  Use your location
                </SubmitButton>
              )}
            </div>
          </OverlayContainer>
        )}
        <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}>
          <GoogleMap
            center={userLatLng ? userLatLng : center}
            zoom={zoom}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
            }}
            onLoad={onGoogleApiLoaded}
            mapContainerStyle={{ height: "100%" }}
          >
            {!loading && userLatLng && (
              <Marker
                position={userLatLng}
                draggable={true}
                onDragEnd={onChildMouseUp}
                animation={"DROP"}
                icon={{
                  url: "/MapPin.svg",
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </MapContainer>

      <PinInfoText className={!userLatLng ? "visibility-hidden" : ""}>
        <ArrowUp />
        You can now <span className="red underline">
          move the target pin
        </span>{" "}
        to <span className="red underline">your</span> location
      </PinInfoText>
    </div>
  )
}

export default LocationPicker
