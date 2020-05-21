<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class informationEtc extends Model
{
    protected $table = 'informationetc';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
?>
