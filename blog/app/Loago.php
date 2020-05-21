<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Loago extends Model
{
    protected $table = 'home_etc';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
