<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Grid results</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon" />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,800,700&amp;subset=latin,cyrillic' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="assets/libraries/font-awesome/css/font-awesome.min.css" />
        <!-- Start BOOTSTRAP -->
        <link rel="stylesheet" href="assets/libraries/tether/dist/css/tether.min.css" />
        <link rel="stylesheet" href="assets/libraries/bootstrap/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="assets/libraries/bootstrap-colorpicker-master/dist/css/bootstrap-colorpicker.min.css" />
        <!-- End Bootstrap -->
        <!-- Start Template files -->
        <link rel="stylesheet" href="assets/css/winter-flat.css" />
        <link rel="stylesheet" href="assets/css/custom.css" />
        <!-- End  Template files -->
        <!-- Start owl-carousel -->
        <link rel="stylesheet" href="assets/libraries/owl.carousel/assets/owl.carousel.css" />
        <!-- End owl-carousel -->
        <!-- Start JS MAP  -->
        <link rel="stylesheet" href="assets/css/map.css" />
        <!-- End JS MAP  -->
        <!-- Start blueimp  -->
        <link rel="stylesheet" href="assets/css/blueimp-gallery.min.css" />
        <!-- End blueimp  -->
        <script src="assets/js/modernizr.custom.js"></script>
        <!-- Start custom template style  -->
        <link rel="stylesheet" href="assets/css/custom_template_style.css" /> 
        <!-- End custom template style   -->
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css" rel="stylesheet" />
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.js"></script>
<style>
    #main-map {
    width: 100%;
    height: 500px; /* Adjust the height as needed */
}

</style>
    </head>
    <body class="">
        <div id="fb-root"></div>
        <div class="container container-wrapper">
            <header class="header">
                <div class="top-box" data-toggle="sticky-onscroll">
                    <div class="container">
                        <div  class="top-bar color-primary">
                        </div><!-- /.top-bar-->
                        <section class="header-inner">
                            <div class="container">
                                <div class="pull-left menu"> 
                                    <div class="box-navigaion clearfix">
                                        <div class="navbar-header">
                                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-menu">
                                                <span class="sr-only">Toggle navigation</span>
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <nav class="navbar text-color-primary">
                                        <div class="text-right">
                                            <button class="navbar-toggler hidden" type="button" data-toggle="collapse" data-target="#main-menu">
                                                &#9776;
                                            </button>
                                        </div>
                                        <!-- Links -->
                                        <div class="collapse navbar-collapse" id="main-menu">
                                            <ul class="nav navbar-nav clearfix">
                                                <li class="nav-item dropdown">
                                                </li>
    
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        Categories
        <i class="icon-dropdown"></i>
    </a>
    <div class="dropdown-menu" id="categoryDropdown">
        <a class="dropdown-item" href="#" data-category="all">All</a>
        <a class="dropdown-item" href="#" data-category="christmas">Christmas Villages</a>
        <a class="dropdown-item" href="#" data-category="tourist">Tourist Attractions</a>
    </div>
</li>

                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </section><!-- /.menu-->
                    </div> 
                </div>
                <div class="top-box-mask"></div>
                <div class="container">
                    <section class="header-slider header-map">
                        <h2 class="hidden">Map</h2>
                        <div class="main-map" id="main-map" style='height:800px'></div>
                    </section><!-- /.header-video-->

                </div>
            </header><!-- /.header--> 
            <main class="main section-color-primary">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="h-side top-pad h-side-slim clearfix">
                                <div class="properties-filter">
                                    <div class="form-group">
                                        <select class="form-control selectpicker select-small" name="filter" id="search">
                                            <option value="0">Order By</option>
                                            <option value="1">Asc</option>
                                            <option value="2">Desc</option>
                                        </select>
                                    </div>
                                    <div class="grid-type pull-right">
                                        <a href="map.html" class="grid active"><i class="fa fa-th"></i></a>
                                        <a href="#" class="list"><i class="fa fa-list"></i></a>
                                    </div>
                                </div>
                            </div> <!-- /. content-header --> 
                            <div class="properties">
                                <div class="row">

                                </div><!-- /.properties -->

                            </div> <!-- /.properties--> 
                        </div><!-- /.center-content -->

                        <!-- /.right side bar -->
                    </div>
                </div>
            </main><!-- /.main-part--> 
            <section class="section section-ads section-parallax">
                <h3 class="hidden">Ads</h3>
                <div class="container">
                    <img src="assets/img/placeholders/730x90.png" alt="" class="center-block" />
                </div>
            </section><!-- /. horizontal-ads--> 
            <a class="btn btn-scoll-up color-secondary" id="btn-scroll-up"></a>
        </div>
        <!-- Start Jquery -->
        <script src="assets/js/jquery-2.2.1.min.js"></script>
        <script src="assets/libraries/jquery.mobile/jquery.mobile.custom.min.js"></script>
        <!-- End Jquery -->
        <!-- Start BOOTSTRAP -->
        <script src="assets/libraries/tether/dist/js/tether.min.js"></script>
        <script src="assets/libraries/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="assets/js/bootstrap-select.min.js"></script>
        <script src="assets/libraries/bootstrap-colorpicker-master/dist/js/bootstrap-colorpicker.min.js"></script>
        <!-- End Bootstrap -->
        <!-- Start Template files -->
        <script src="assets/js/winter-flat.js"></script>
        <!-- End  Template files -->
        <!-- Start owl-carousel -->
        <script src="assets/libraries/owl.carousel/owl.carousel.min.js"></script>
        <!-- End owl-carousel -->
        <!-- Start JS MAP  -->

<!-- Mapbox JS -->
<script src="https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.js"></script>

<script>
    // Set up the map using Mapbox GL
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lub3BhdWxvdGFnb2MiLCJhIjoiY200NnNrYXdlMTdseDJscXhheW0zYW0yciJ9.uNmzhNUOyASSnP8l_LmUug'; // Replace with your own Mapbox token

    const map = new mapboxgl.Map({
        container: 'main-map', // The ID of the div container
        style: 'mapbox://styles/mapbox/streets-v11', // Map style
        center: [122.7559, 11.5762], // Coordinates for Capiz, Philippines [longitude, latitude]
        zoom: 10 // Initial zoom level (adjust as needed)
    });

    // Add fullscreen control to the map
    const fullscreenControl = new mapboxgl.FullscreenControl();
    map.addControl(fullscreenControl, 'top-right'); // Position the control in the top-right corner

    // Prefix for local icon directory (You can specify your path here if necessary)
    const prefix = ''; // Example: 'assets/img/markers/'

    // Data for markers and popups
    const locations = [
        { 
            lng: 122.756930, lat: 11.576974, title: 'Capiz Provincial Capitol', 
            videoUrl: 'https://www.youtube.com/embed/c13vTNKUG5U',
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/' + prefix + 'xmas.png', // Local icon for government building
            category: 'tourist'
        },

        { 
            lng: 122.997311, lat: 11.487673, title: 'Capiz Provincial Capitol', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },


        { 
            lng: 122.924866, lat: 11.429486, title: 'President Roxas Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.832822, lat: 11.481827, title: 'Pontevedra Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.793372, lat: 11.555308, title: 'Panay Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
          icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },


        { 
            lng: 122.781377, lat: 11.387298, title: 'Maayon Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.768934, lat: 11.463563, title: 'Panitan Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.693341, lat: 11.521167, title: 'Ivisan Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.665676, lat: 11.422294, title: 'Sigma Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.604256, lat: 11.494049, title: 'Sapian Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.685370, lat: 11.394267, title: 'Dao Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.669591, lat: 11.341235, title: 'Cuartero Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.687837, lat: 11.263027, title: 'Dumarao Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
           icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.622843, lat: 11.306680, title: 'Dumalag Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.596636, lat: 11.430046, title: 'Mambusao Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.510311, lat: 11.408626, title: 'Jamindan Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/xmas.png', // Local icon for government building
            category: 'christmas'
        },

        { 
            lng: 122.537210, lat: 11.260867, title: 'Tapaz Christmas Village', 
            details: 'A historic government building in the heart of Roxas City.',
            icon: 'assets/img/markers/' + prefix + 'xmas.png', // Local icon for government building
            category: 'christmas'
        },






// Declare markers array once and at the top
let markers = []; // Declare markers array here, at the top

// Function to create custom icons
function createCustomIcon(iconUrl) {
    const img = document.createElement('img');
    img.src = iconUrl;
    img.style.width = '30px';
    img.style.height = '40px';
    return img;
}

// Add markers to the map
locations.forEach(location => {
    const markerElement = createCustomIcon(location.icon);

    const marker = new mapboxgl.Marker(markerElement)
        .setLngLat([location.lng, location.lat])
        .addTo(map);

    const popup = new mapboxgl.Popup({
        closeButton: true,
        closeOnClick: true
    }).setHTML(`
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 300px; padding: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px;">
            <h3 style="margin: 0 0 10px; font-size: 1.8em; font-weight: bold; color: #007bff;">${location.title}</h3>
            <p style="margin: 0 0 15px; font-size: 0.9em; line-height: 1.5;">${location.details}</p>
            <button 
                style="width: 100%; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px; font-size: 0.9em; cursor: pointer;"
                onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}', '_blank')">
                Get Directions
            </button>
        </div>
    `);

    marker.setPopup(popup);

    // Store marker reference and category in the markers array
    markers.push({ marker, category: location.category });
});

// Function to filter markers based on category
function filterMarkers(category) {
    markers.forEach(({ marker, category: markerCategory }) => {
        if (category === 'all' || markerCategory === category) {
            marker.getElement().style.display = ''; // Show marker
        } else {
            marker.getElement().style.display = 'none'; // Hide marker
        }
    });
}

// Dropdown filter functionality
document.addEventListener('DOMContentLoaded', () => {
    const categoryDropdownItems = document.querySelectorAll('#categoryDropdown .dropdown-item');

    categoryDropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedCategory = item.getAttribute('data-category');
            filterMarkers(selectedCategory);
        });
    });
});
</script>



        <!-- End JS MAP  -->
        <!-- Start blueimp  -->
        <script src="assets/js/blueimp-gallery.min.js" type="text/javascript"></script>
        <!-- End blueimp  -->
        <!-- Start custom template style  -->
        <script src="assets/js/custom_template_style.js" type="text/javascript"></script>
        <!-- End custom template style   -->
        <script src="assets/js/facebook.js" type="text/javascript"></script>
    </body>
</html>