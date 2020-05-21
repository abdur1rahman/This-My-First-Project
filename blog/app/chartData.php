<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class chartData extends Model
{
    protected $table = 'chart_data';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
?>