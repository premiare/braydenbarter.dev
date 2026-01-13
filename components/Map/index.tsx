"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

interface MapProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
}

export const Map = ({ 
  center = [144.9631, -37.8136], // Melbourne, Australia
  zoom = 11,
  className = ""
}: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map with CARTO dark basemap (free, no API key needed)
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: center,
      zoom: zoom,
      attributionControl: false,
      interactive: false, // Disable all interactions
    });

    // Add marker for Melbourne with custom styling
    const markerContainer = document.createElement("div");
    markerContainer.style.position = "relative";
    markerContainer.style.width = "20px";
    markerContainer.style.height = "20px";
    
    // Pulsing ring (behind the dot) - centered
    const pulse = document.createElement("div");
    pulse.style.position = "absolute";
    pulse.style.width = "20px";
    pulse.style.height = "20px";
    pulse.style.borderRadius = "50%";
    pulse.style.backgroundColor = "#ef4444";
    pulse.style.opacity = "0.6";
    pulse.style.animation = "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite";
    pulse.style.top = "0";
    pulse.style.left = "0";
    pulse.style.transform = "translate(0, 0)";
    
    // Dot (on top) - centered
    const dot = document.createElement("div");
    dot.style.position = "absolute";
    dot.style.width = "20px";
    dot.style.height = "20px";
    dot.style.borderRadius = "50%";
    dot.style.backgroundColor = "#ef4444";
    dot.style.border = "3px solid white";
    dot.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
    dot.style.top = "0";
    dot.style.left = "0";
    dot.style.zIndex = "1";
    
    markerContainer.appendChild(pulse);
    markerContainer.appendChild(dot);
    
    new maplibregl.Marker({
      element: markerContainer,
      anchor: "center",
    })
      .setLngLat(center)
      .addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [center, zoom]);

  return (
    <div 
      ref={mapContainer} 
      className={`w-full h-full ${className}`}
      style={{ minHeight: "100px" }}
    />
  );
};
