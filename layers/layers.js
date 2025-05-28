ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([97.079650, -4.287347, 104.244377, 0.791607]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sumatarbarat_1 = new ol.format.GeoJSON();
var features_sumatarbarat_1 = format_sumatarbarat_1.readFeatures(json_sumatarbarat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sumatarbarat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumatarbarat_1.addFeatures(features_sumatarbarat_1);
var lyr_sumatarbarat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sumatarbarat_1, 
                style: style_sumatarbarat_1,
                popuplayertitle: 'sumatar barat',
                interactive: true,
    title: 'sumatar barat<br />\
    <img src="styles/legend/sumatarbarat_1_0.png" /> <br />' });
var format_1_2 = new ol.format.GeoJSON();
var features_1_2 = format_1_2.readFeatures(json_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_2.addFeatures(features_1_2);
var lyr_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_2, 
                style: style_1_2,
                popuplayertitle: '1',
                interactive: true,
                title: '<img src="styles/legend/1_2.png" /> 1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_sumatarbarat_1.setVisible(true);lyr_1_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sumatarbarat_1,lyr_1_2];
lyr_sumatarbarat_1.set('fieldAliases', {'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMPR': 'WADMPR', 'FOTO': 'FOTO', 'NAMA ITEM': 'NAMA ITEM', 'LATITUDE': 'LATITUDE', '1_ID': '1_ID', '1_NAMA ITEM DATA': '1_NAMA ITEM DATA', '1_DATA SPESIAL': '1_DATA SPESIAL', '1_LATITUDE': '1_LATITUDE', '1_LONGITUDE': '1_LONGITUDE', '1_RUMAH SAKIT': '1_RUMAH SAKIT', '1_PENGELAMAN / TAHUN': '1_PENGELAMAN / TAHUN', });
lyr_1_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'NO': 'NO', 'ID': 'ID', 'NAMA ITEM DATA': 'NAMA ITEM DATA', 'DATA SPESIAL': 'DATA SPESIAL', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'RUMAH SAKIT': 'RUMAH SAKIT', 'PENGELAMAN / TAHUN': 'PENGELAMAN / TAHUN', 'FOTO': 'FOTO', });
lyr_sumatarbarat_1.set('fieldImages', {'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMPR': 'TextEdit', 'FOTO': 'ExternalResource', 'NAMA ITEM': 'TextEdit', 'LATITUDE': 'TextEdit', '1_ID': 'Range', '1_NAMA ITEM DATA': 'TextEdit', '1_DATA SPESIAL': 'TextEdit', '1_LATITUDE': 'TextEdit', '1_LONGITUDE': 'TextEdit', '1_RUMAH SAKIT': 'TextEdit', '1_PENGELAMAN / TAHUN': 'Range', });
lyr_1_2.set('fieldImages', {'OBJECTID': 'Range', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'NO': 'Range', 'ID': 'Range', 'NAMA ITEM DATA': 'TextEdit', 'DATA SPESIAL': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'RUMAH SAKIT': 'TextEdit', 'PENGELAMAN / TAHUN': 'Range', 'FOTO': 'ExternalResource', });
lyr_sumatarbarat_1.set('fieldLabels', {'FCODE': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMPR': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'NAMA ITEM': 'inline label - always visible', 'LATITUDE': 'no label', '1_ID': 'no label', '1_NAMA ITEM DATA': 'no label', '1_DATA SPESIAL': 'no label', '1_LATITUDE': 'no label', '1_LONGITUDE': 'no label', '1_RUMAH SAKIT': 'no label', '1_PENGELAMAN / TAHUN': 'no label', });
lyr_1_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'NO': 'no label', 'ID': 'no label', 'NAMA ITEM DATA': 'no label', 'DATA SPESIAL': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'RUMAH SAKIT': 'hidden field', 'PENGELAMAN / TAHUN': 'hidden field', 'FOTO': 'no label', });
lyr_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});