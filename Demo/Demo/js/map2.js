
require(["esri/map","esri/dijit/BasemapToggle","esri/layers/ArcGISDynamicMapServiceLayer","dojo/domReady!"], function(Map,BasemapToggle) {
  var map = new Map("map", {
    center: [-90,40],
    zoom: 4,
    basemap: "topo"
  });

  var toggle = new BasemapToggle({
    map: map,
    basemap: "satellite"
  }, "BasemapToggle");
  toggle.startup();

  var layer1 = new ArcGISDynamicMapServiceLayer( "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer", {
  "opacity": 0.35
  });

  map.addLayer(layer1);

});
