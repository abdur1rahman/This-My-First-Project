<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\contactTable;

class contactcontroller extends Controller
{
    function onContactSend(Request $req){
        
        $contactArray=json_decode($req->getContent(),true);


      $name =  $contactArray['name'];
      $email =$contactArray['email'];
      $msg = $contactArray['msg'];
     $result = contactTable::insert(['name'=>$name,'email'=>$email,'messge'=>$msg]);
      if($result==true){
       return 1;
     }else{
        return 0;
     }
    }
}

