<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\clientRevew;

class clientRevewcontroller extends Controller
{
   function onAllselect(){
      $result=clientRevew::all();
      return $result;
  }
}