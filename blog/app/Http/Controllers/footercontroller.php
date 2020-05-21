<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\footerTable;

class footercontroller extends Controller
{
    function onAllselect(){
        $result = footerTable::all();
        return $result;
    }
}
