<?php
    session_start();
    
    function loadSkeleton() {
        echo "<div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav mr-auto'>
                    <li class='nav-item'>
                        <a class='nav-link' href='index.php'>Home</a>
                    </li>
                    <li class='nav-item'>
                        <a class='nav-link' href='search.php'>Search</a>
                    </li>
                    ".isAdmin()."
                </ul>
            </div>";
    }
    
    function displayWebsiteName() {
        echo "<h1 id='websiteName'>CARSITE NAME HERE</h1>";
    }
    function displayNavButtons() {
        if (isset($_SESSION['adminName'])){
            echo "
            <strong id='usersName'>Hello, ".$_SESSION['adminName']."</strong><form action='logout.php'>
            <button id='logoutBtn' class='btn btn-danger'><span class='fas fa-sign-in-alt'></span> Log out</button>
            </form>";
        } else if(isset($_SESSION['user'])) {
            echo "
            <strong id='usersName'>Hello, ".$_SESSION['user']."</strong><form action='logout.php'>
            <button id='logoutBtn' class='btn btn-danger'><span class='fas fa-sign-in-alt'></span> Log out</button>
            </form>";
        }else {
            echo "
            <strong id='usersName'>Hello, Guest</strong><form action='login.php'>
            <button id='logInBtn' class='btn btn-primary'><span class='fas fa-sign-in-alt'></span> Log in</button>
            </form>";
        }
    }
    
    function isAdmin() {
        if(isset($_SESSION['adminName']) || isset($_SESSION['user'])) {
            $re .= "<li class='nav-item'>
                <a class='nav-link' href='cart.php'>Cart</a>
              </li>";
        }

        if (isset($_SESSION['adminName'])) {
            $re .= "<li class='nav-item'>
                        <a class='nav-link' href='admin.php'>Admin</a>
                    </li>";
        }
        
        return $re;
    }

?>