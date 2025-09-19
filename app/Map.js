"use client";

import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { Factory, MapPin, Building2 } from 'lucide-react';

// Move static data outside component to prevent re-renders
const FACTORY_DATA = {
  lat: 28.8386,
  lng: 78.7733,
  name: "Main Factory",
  location: "Moradabad, Uttar Pradesh"
};

const DISTRIBUTION_POINTS = [
  { lat: 29.9680, lng: 77.7067, name: "Saharanpur", state: "UP" },
  { lat: 29.4727, lng: 77.7085, name: "Muzaffarnagar", state: "UP" },
  { lat: 28.9845, lng: 77.7064, name: "Meerut", state: "UP" },
  { lat: 28.6692, lng: 77.4538, name: "Ghaziabad", state: "UP" },
  { lat: 28.7041, lng: 77.1025, name: "Delhi NCR", state: "Delhi" },
  { lat: 27.8974, lng: 78.0880, name: "Aligarh", state: "UP" },
  { lat: 27.1767, lng: 78.0081, name: "Agra", state: "UP" },
  { lat: 27.4924, lng: 77.6737, name: "Mathura", state: "UP" },
  { lat: 28.3670, lng: 79.4304, name: "Bareilly", state: "UP" },
  { lat: 28.8955, lng: 79.1245, name: "Rampur", state: "UP" },
  { lat: 28.4089, lng: 77.8498, name: "Bulandshahr", state: "UP" },
  { lat: 29.3729, lng: 78.1354, name: "Bijnor", state: "UP" },
  { lat: 28.7300, lng: 77.7800, name: "Hapur", state: "UP" },
  { lat: 29.8543, lng: 77.8880, name: "Roorkee", state: "Uttarakhand" },
  { lat: 28.4595, lng: 77.5246, name: "Gautam Buddha Nagar", state: "UP" },
  { lat: 28.6315, lng: 79.8040, name: "Pilibhit", state: "UP" },
  { lat: 28.4595, lng: 77.0266, name: "Gurgaon", state: "Haryana" },
  { lat: 28.4089, lng: 77.3178, name: "Faridabad", state: "Haryana" },
  { lat: 27.6648, lng: 78.6569, name: "Etah", state: "UP" },
  { lat: 27.1592, lng: 78.3957, name: "Firozabad", state: "UP" },
  { lat: 29.3919, lng: 79.4690, name: "Rudrapur", state: "Uttarakhand" },
  { lat: 30.3165, lng: 76.3711, name: "Ambala", state: "Haryana" },
  { lat: 29.6857, lng: 76.9905, name: "Yamunanagar", state: "Haryana" },
  { lat: 30.1504, lng: 78.2663, name: "Dehradun", state: "Uttarakhand" }
];

const KEY_MARKETS = ["Meerut", "Saharanpur", "Muzaffarnagar", "Ambala", "Rudrapur"];

const DistributionMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const linkRef = useRef(null);
  const scriptRef = useRef(null);

  const factory = useMemo(() => FACTORY_DATA, []);
  const distributionPoints = useMemo(() => DISTRIBUTION_POINTS, []);
  const keyMarkets = useMemo(() => KEY_MARKETS, []);

  const countByState = useCallback((state) => {
    return distributionPoints.filter(point => point.state === state).length;
  }, [distributionPoints]);

  const initializeMap = useCallback(() => {
    if (!window.L || !mapRef.current) return;

    try {
      // Initialize the map
      const map = window.L.map(mapRef.current).setView([factory.lat, factory.lng], 8);
      mapInstanceRef.current = map;

      // Add OpenStreetMap tiles
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Custom icons
      const factoryIcon = window.L.divIcon({
        html: `
          <div class="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
            <div class="w-2 h-2 bg-white rounded-full"></div>
          </div>
        `,
        className: 'custom-factory-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const distributionIcon = window.L.divIcon({
        html: `
          <div class="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md"></div>
        `,
        className: 'custom-distribution-icon',
        iconSize: [16, 16],
        iconAnchor: [8, 8]
      });

      // Add factory marker
      window.L.marker([factory.lat, factory.lng], { icon: factoryIcon })
        .addTo(map)
        .bindPopup(`
          <div class="p-3 min-w-48">
            <h3 class="font-bold text-red-600 text-lg mb-1">${factory.name}</h3>
            <p class="text-sm text-gray-600 mb-1">${factory.location}</p>
            <span class="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">Manufacturing Hub</span>
          </div>
        `);

      // Add distribution points and connect them to factory
      distributionPoints.forEach((point) => {
        // Add marker
        window.L.marker([point.lat, point.lng], { icon: distributionIcon })
          .addTo(map)
          .bindPopup(`
            <div class="p-3 min-w-40">
              <h3 class="font-bold text-blue-600 text-lg mb-1">${point.name}</h3>
              <p class="text-sm text-gray-600 mb-1">${point.state}</p>
              <span class="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Distribution Point</span>
            </div>
          `);

        // Add dotted line from factory to distribution point
        window.L.polyline([
          [factory.lat, factory.lng],
          [point.lat, point.lng]
        ], {
          color: '#64748b',
          weight: 2,
          opacity: 0.6,
          dashArray: '8, 5'
        }).addTo(map);
      });

      // Add custom info control
      const info = window.L.control({ position: 'topright' });
      info.onAdd = function () {
        const div = window.L.DomUtil.create('div', 'bg-white p-2 rounded-lg shadow-lg border');
        div.innerHTML = `
          <h4 class="font-bold text-gray-800 mb-1 text-xs">Network</h4>
          <div class="space-y-1 text-xs">
            <div class="flex items-center">
              <div class="w-2 h-2 bg-red-600 rounded-full mr-1"></div>
              <span class="text-gray-600 text-xs">Factory (1)</span>
            </div>
            <div class="flex items-center">
              <div class="w-2 h-2 bg-blue-600 rounded-full mr-1"></div>
              <span class="text-gray-600 text-xs">Points (${distributionPoints.length})</span>
            </div>
          </div>
        `;
        return div;
      };
      info.addTo(map);

      // Fit map bounds to show all points
      const allPoints = [[factory.lat, factory.lng], ...distributionPoints.map(p => [p.lat, p.lng])];
      map.fitBounds(allPoints, { padding: [10, 10] });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [factory, distributionPoints]);

  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
    linkRef.current = link;
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    script.onload = initializeMap;
    script.onerror = () => {
      console.error('Failed to load Leaflet library');
    };
    scriptRef.current = script;
    document.head.appendChild(script);

    return () => {
      // Cleanup map instance
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        } catch (error) {
          console.error('Error cleaning up map:', error);
        }
      }
      
      // Cleanup DOM elements
      if (linkRef.current && document.head.contains(linkRef.current)) {
        document.head.removeChild(linkRef.current);
      }
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, [initializeMap]);

  const stateCounts = useMemo(() => ({
    upDelhi: countByState('UP') + countByState('Delhi'),
    uttarakhand: countByState('Uttarakhand'),
    haryana: countByState('Haryana')
  }), [countByState]);

  return (
    <div className="flex flex-col lg:flex-row h-120 bg-gray-50 rounded-lg overflow-hidden shadow-lg">
      {/* Map Container */}
      <div className="flex-1 p-2">
        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
          <div ref={mapRef} className="w-full h-full" role="application" aria-label="Distribution network map" />
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-72 bg-white shadow-xl p-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Distribution Network</h2>

        {/* Manufacturing Hub */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Factory className="w-5 h-5 text-red-600 mr-2" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-gray-800">Manufacturing Hub</h3>
          </div>
          <p className="text-gray-600 text-xs">
            Main factory in Moradabad, UP
          </p>
        </div>

        {/* Distribution Reach */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 text-blue-600 mr-2" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-gray-800">Coverage</h3>
          </div>
          <ul className="space-y-1 text-xs text-gray-600">
            <li className="flex justify-between">
              <span>UP & Delhi</span>
              <span className="text-blue-600 font-medium">{stateCounts.upDelhi}</span>
            </li>
            <li className="flex justify-between">
              <span>Uttarakhand</span>
              <span className="text-blue-600 font-medium">{stateCounts.uttarakhand}</span>
            </li>
            <li className="flex justify-between">
              <span>Haryana</span>
              <span className="text-blue-600 font-medium">{stateCounts.haryana}</span>
            </li>
          </ul>
        </div>

        {/* Key Markets */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Building2 className="w-5 h-5 text-green-600 mr-2" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-gray-800">Key Markets</h3>
          </div>
          <div className="flex flex-wrap gap-1">
            {keyMarkets.map((market, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
              >
                {market}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button 
          type="button"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md mb-3"
          aria-label="Apply to become a distributor"
        >
          Become a Distributor
        </button>

        {/* Network Summary */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-1 text-sm">Network Stats</h4>
          <p className="text-xs text-gray-600">
            {distributionPoints.length + 1} total locations across North India
          </p>
        </div>
      </div>
    </div>
  );
};

export default DistributionMap;
