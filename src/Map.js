import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import './Map.css';

const Map = ({ center, zoom }) => {
    return (
        <MapContainer className="map" center={center} zoom={zoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Map
