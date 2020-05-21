<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\chartData;

class chartDatacontroller extends Controller
{
    function onAllselect(){
        $result=chartData::all();
        return $result;
    }
}
