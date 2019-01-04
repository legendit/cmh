
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>:: C M H ::</title>

    <!-- Bootstrap -->
    <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Fontawesome -->
    <link href="{{ asset('assets/css/fontawesome-all.min.css') }}" rel="stylesheet">

    <!-- Google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Monoton" rel="stylesheet">

    <!-- jQuery Plugins css -->
    <link href="{{ asset('assets/css/slick.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/venobox.css') }}" rel="stylesheet">

    <!-- Main Css -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
</head>

<body>


<!-- menu part start -->
<nav class="navbar navbar-expand-lg navbar-light custom_nav">
    <div class="container-fluid">
        <a class="navbar-brand logo" href="#">CMH</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#my_nav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="my_nav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a href=""><i class="fas fa-sign-out-alt"></i>Log Out</a></li>
            </ul>
        </div>
    </div>
</nav>
<!-- menu part end -->

<div class="main_content">
    <div class="row mx-0">
        <div class="col-lg-3 px-0">
            <div class="side_bar">
                <ul>
                    <li><a href="{{ route('dashboard') }}" class="running">Dashboard</a></li>
                    <li><a href="{{ route('home') }}">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="member.html">Members</a></li>
                    <li><a href="archive.html">Archive</a></li>
                    <li><a href="publication_home.html">Publication</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="program.html">Program</a></li>
                    <li><a href="plan.html">Plan</a></li>
                    <li><a href="sanchalon.html">Shanchalon</a></li>
                    <li><a href="contacts.html">Contact</a></li>
                </ul>
            </div>
        </div>
        <div class="col-lg-9 px-0">
            <div class="dash">
                @yield('main_content')
            </div>
        </div>
    </div>
</div>






<!-- jQuery Library -->
<script src="{{ asset('assets/js/jquery-1.12.4.min.js') }}"></script>

<!-- Proper js for Bootstrap 4 -->
<script src="{{ asset('assets/js/popper.min.js') }}"></script>

<!-- Bootstrap js -->
<script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>

<!-- Slick Slider -->
<script src="{{ asset('assets/js/slick.min.js') }}"></script>

<!-- Venubox -->
<script src="{{ asset('assets/js/venobox.min.js') }}"></script>

<!-- Mains Custom js -->
<script src="{{ asset('assets/js/custom.js') }}"></script>
</body>

</html>
