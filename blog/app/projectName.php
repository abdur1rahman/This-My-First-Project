<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class projectName extends Model
{
    protected $table = 'project_name';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
?>
