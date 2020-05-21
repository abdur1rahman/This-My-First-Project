<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class serviceName extends Model
{
    protected $table = 'service_table';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
?>
