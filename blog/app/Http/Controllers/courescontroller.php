<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\couresTable;

class courescontroller extends Controller
{
    function onSelectfour(){
        $result = couresTable::limit(4)->get();
        return $result;
    }
    function onSelectAll(){
        $result = couresTable::all();
        return $result;
    }
    function onSelectDetails($CourseID){
       $id= $CourseID;
        $result = couresTable::where(['id'=>$id])->get();
        return $result;
    }
}
