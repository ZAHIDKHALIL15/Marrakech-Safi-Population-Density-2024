var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Province_Marrakech_Safi_1 = new ol.format.GeoJSON();
var features_Province_Marrakech_Safi_1 = format_Province_Marrakech_Safi_1.readFeatures(json_Province_Marrakech_Safi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Province_Marrakech_Safi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_Marrakech_Safi_1.addFeatures(features_Province_Marrakech_Safi_1);
var lyr_Province_Marrakech_Safi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Province_Marrakech_Safi_1, 
                style: style_Province_Marrakech_Safi_1,
                popuplayertitle: "Province_Marrakech_Safi",
                interactive: true,
    title: 'Province_Marrakech_Safi<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_0.png" /> Province de AL HAOUZ:642171<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_1.png" /> Province de CHICHAOUA:378932<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_2.png" /> Province de EL KELAA DES SRAGHNA:560075<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_3.png" /> Province de ESSAOUIRA:425449<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_4.png" /> Province de MARRAKECH:1560704<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_5.png" /> Province de REHAMNA:345772<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_6.png" /> Province de SAFI:719299<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_7.png" /> Province de Youssoufia:246098<br />'
        });
var format_Chef_lieu_2 = new ol.format.GeoJSON();
var features_Chef_lieu_2 = format_Chef_lieu_2.readFeatures(json_Chef_lieu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chef_lieu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chef_lieu_2.addFeatures(features_Chef_lieu_2);
var lyr_Chef_lieu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chef_lieu_2, 
                style: style_Chef_lieu_2,
                popuplayertitle: "Chef_lieu",
                interactive: true,
                title: 'Chef_lieu'
            });
var format_limite_maroc_ligne_3 = new ol.format.GeoJSON();
var features_limite_maroc_ligne_3 = format_limite_maroc_ligne_3.readFeatures(json_limite_maroc_ligne_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_maroc_ligne_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_maroc_ligne_3.addFeatures(features_limite_maroc_ligne_3);
var lyr_limite_maroc_ligne_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_maroc_ligne_3, 
                style: style_limite_maroc_ligne_3,
                popuplayertitle: "limite_maroc_ligne",
                interactive: true,
                title: '<img src="styles/legend/limite_maroc_ligne_3.png" /> limite_maroc_ligne'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_Province_Marrakech_Safi_1.setVisible(true);lyr_Chef_lieu_2.setVisible(true);lyr_limite_maroc_ligne_3.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_Province_Marrakech_Safi_1,lyr_Chef_lieu_2,lyr_limite_maroc_ligne_3];
lyr_Province_Marrakech_Safi_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_provinces_Code_Provi': 'Data_provinces_Code_Provi', 'Data_provinces_Nom_Provin': 'Data_provinces_Nom_Provin', 'Data_provinces_Area': 'Data_provinces_Area', 'Data_provinces_Population_2024': 'Data_provinces_Population_2024', 'Data_provinces_Chef lieu': 'Data_provinces_Chef lieu', 'Data_provinces_lat': 'Data_provinces_lat', 'Data_provinces_long': 'Data_provinces_long', 'Nom': 'Nom', });
lyr_Chef_lieu_2.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', });
lyr_limite_maroc_ligne_3.set('fieldAliases', {'fid': 'fid', });
lyr_Province_Marrakech_Safi_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'Hidden', 'Data_provinces_Code_Provi': 'Hidden', 'Data_provinces_Nom_Provin': 'Hidden', 'Data_provinces_Area': 'TextEdit', 'Data_provinces_Population_2024': 'TextEdit', 'Data_provinces_Chef lieu': 'TextEdit', 'Data_provinces_lat': 'Hidden', 'Data_provinces_long': 'Hidden', 'Nom': 'TextEdit', });
lyr_Chef_lieu_2.set('fieldImages', {'fid': 'TextEdit', 'Code_Provi': 'TextEdit', 'Nom_Provin': 'TextEdit', 'Area': 'TextEdit', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', });
lyr_limite_maroc_ligne_3.set('fieldImages', {'fid': '', });
lyr_Province_Marrakech_Safi_1.set('fieldLabels', {'Data_provinces_Area': 'inline label - always visible', 'Data_provinces_Population_2024': 'inline label - always visible', 'Data_provinces_Chef lieu': 'inline label - always visible', 'Nom': 'hidden field', });
lyr_Chef_lieu_2.set('fieldLabels', {'fid': 'hidden field', 'Code_Provi': 'hidden field', 'Nom_Provin': 'inline label - always visible', 'Area': 'hidden field', 'Population_2024': 'hidden field', 'Chef lieu': 'inline label - always visible', 'lat': 'hidden field', 'long': 'hidden field', });
lyr_limite_maroc_ligne_3.set('fieldLabels', {'fid': 'no label', });
lyr_limite_maroc_ligne_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});