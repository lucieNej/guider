function initialiser() {
    var latlng = new google.maps.LatLng(43.7133, 6.8695);

    var options = {
        center: latlng,
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var carte = new google.maps.Map(document.getElementById("carte"), options);

    //création du marqueur
    var marqueur = new google.maps.Marker({
        position: new google.maps.LatLng(43.7133, 6.8695),
        map: carte
    });

    /****************Nouveau code****************/

    //ne pas oublier de rendre le marqueur "déplaçable"
    marqueur.setDraggable(true);

    google.maps.event.addListener(marqueur, 'dragend', function(event) {
        //message d'alerte affichant la nouvelle position du marqueur
        alert("La nouvelle coordonnée du marqueur est : "+event.latLng);
    });

    /********************************************/
}
