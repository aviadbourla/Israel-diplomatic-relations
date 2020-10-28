import React, { useState, useRef, useEffect, useContext } from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import mapData from '../data/countries.json'
import countriesData from '../data/countreisDate'
import { filterComtext } from '../context/filterComtext';
import Control from 'react-leaflet-control';
import TabPanel from '../tabpanel/TabPanel'
import SimpleCard from '../Dialog/Card'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'
import SimpleMenu from '../Dialog/SimpleMenu'
import './map.css';


const ShowMap = (props) => {

    const [mapfechers, setMapfechers] = useState(mapData.features)

    const inputMap = useRef(null);
    const myMap = useRef(null);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const { value, setValue } = useContext(filterComtext)

    let countryStyle = {
        fillColor: 'none',
        fillOpacity: 0.6,
        color: '#ccc',
        weight: 1,
    }

    const fillColor = (countryTemp, layer) => {
        if (+countryTemp.date.slice(6) <= +value) {
            switch (countryTemp.type) {
                case 'recognition':
                    layer.options.fillColor = 'rgb(30,155,67)'
                    break;
                case 'nesting':
                    layer.options.fillColor = 'rgb(13,66,29)'
                    break;
                case 'Renewal':
                    layer.options.fillColor = 'rgb(9,43,19)'
                    break;
                case 'RaisingRank':
                    layer.options.fillColor = 'rgb(180,14,22)'
                    break;
                default:
                    layer.options.fillColor = 'rgb(180,14,22)'
            }
        } else {
            layer.options.fillColor = 'rgb(180,14,22)'
        }
    }

    const onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN
        layer.bindPopup(countryName)
        if (countriesData.has(countryName)) {
            let countryTemp = countriesData.get(countryName)
            fillColor(countryTemp, layer)
        } else {
            if (countryName === 'Israel') {
                layer.options.fillColor = 'Orange'
            } else {
                layer.options.fillColor = 'rgb(180,14,22)'
            }
        }
    }

    return (
        <div className="leaflet-container">
            <Map
                center={[31.955075, 34.814135]}
                zoom={3}
                ref={myMap}
                minZoom={2}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <GeoJSON
                    key={value}
                    ref={inputMap}
                    data={mapfechers}
                    style={countryStyle}

                    onEachFeature={onEachCountry} />
                <Control position="topright" >
                    <SimpleCard />
                </Control>
                <Control position={matches ? "topleft" : "bottomright"}  >
                    <TabPanel />
                </Control>

                <Control position={matches ? "topright" : "topleft"}  >
                    <SimpleMenu />
                </Control>

            </Map>
        </div>
    )
}
export default ShowMap