<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\homeEtc;

class homeetccontroller extends Controller
{
    function onAllselect(){
        $result = homeEtc::select('videodescription','videourl')->get();
        return $result;
    }
    function onselectHomeTitle(){
        $result = homeEtc::select('homesubtitle','hometitle')->get();
        return $result;
    } 
    function TotalprojectClient(){
        $result = homeEtc::select('totalclient', 'totalproject')->get();
        return $result;
    } 
    function TechDescription(){
        $result = homeEtc::select('tecdescription')->get();
        return $result;
    }
}
