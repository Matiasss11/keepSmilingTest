<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Country::create([
            'name' => 'Argentina',
        ]);


        Country::create([
            'name' => 'Brasil',
        ]);

        Country::create([
            'name' => 'Uruguay',
        ]);


        Country::create([
            'name' => 'Mexico',
        ]);

        Country::create([
            'name' => 'EEUU',
        ]);


        Country::create([
            'name' => 'ESpaña',
        ]);
    }
}
