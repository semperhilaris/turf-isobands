/// <reference types="geojson" />

type Points = GeoJSON.FeatureCollection<GeoJSON.Point>;
type Polygons = GeoJSON.FeatureCollection<GeoJSON.Polygon>;

/**
 * http://turfjs.org/docs/#isobands
 */
declare function isobands(points: Points, z: string, breaks: Array<number>): Polygons;
declare namespace isobands { }
export = isobands;
