<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class contactTable extends Model
{
    protected $table = 'conteact_table';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
?>
