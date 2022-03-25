<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class DentistFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'              => $this->faker->name(),
            'surname'           => $this->faker->name(),
            'gender'            => $this->faker->randomElement(['Feminine', 'Male']),
            'country_id'        => rand(1, 6),
            'email'             => $this->faker->unique()->safeEmail(),
        ];
    }
}
