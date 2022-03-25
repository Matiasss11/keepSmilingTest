<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    // Relationship
    /**
     * Get all of the dentists for the Country
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function dentists(): HasMany
    {
        return $this->hasMany(Dentist::class);
    }
}
