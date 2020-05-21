<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\projectName;
class projectcontroller extends Controller
{
    function onThreeSelect(){
        $result = projectName::limit(3)->get();
        return $result;
    }
    function onAllselect(){
        $result = projectName::all();
        return $result;
    }
    function onClick($projectID){
        $id = $projectID;
        $result = projectName::where(['id'=>$id])->get();
        return $result;
    }
}
