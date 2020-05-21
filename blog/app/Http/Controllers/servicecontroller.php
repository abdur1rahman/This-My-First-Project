<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\serviceName;

class servicecontroller extends Controller
{
    function onAllselect(){
        $result = serviceName::get();
        return $result;
    }
}
