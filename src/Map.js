import React from 'react'
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';

const Map = () => {
    return (
        <LeafletMap>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </LeafletMap>
    )
}

export default Map
