<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class couresTable extends Model
{
    protected $table = 'coursestable';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
?>
