<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\informationEtc;

class informationcntroller extends Controller
{
    function onAllSelect(){
        $result = informationEtc::get();
        return $result;
    }
}
