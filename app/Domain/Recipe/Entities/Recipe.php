<?php

namespace App\Domain\Recipe\Entities;

use App\Domain\Schedule\Entities\Schedule;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Image;
use Illuminate\Database\Eloquent\Model;
use App\Domain\Recipe\Contracts\RecipeInterface;

// use App\Helpers\CrawlerTraitHelper;

class Recipe extends Model implements RecipeInterface
{
    // use CrawlerTraitHelper;

    /**
     * @var string[] $fillable
     */
    protected $fillable = [
        'name',
        'recipe_type',
        'visual',
        'number_people',
        'preparation_time',
        'cooking_time',
        'complement',
    ];

    /**
     * @TODO : Schedule domain responsability
     *
     * @return HasMany
     */
    public function plannings(): HasMany
    {
        return $this->hasMany(Schedule::class);
    }

    /**
     * @return HasMany
     */
    public function products(): HasMany
    {
        return $this->hasMany(RecipeProduct::class);
    }

    /**
     * @return HasMany
     */
    public function steps(): HasMany
    {
        return $this->hasMany(RecipeStep::class);
    }

    /**
     * @param bool $emptyLine
     * @return mixed[]
     */
    public static function getList(bool $emptyLine = false): array
    {
        $return = [];
        if ($emptyLine) {
            $return['-1'] = '---';
        }

        static::get()->map(function ($item) use (&$return) {
            $return[$item->id] = $item->name;
        });
        return $return;
    }

    /**
     * @return string|null
     */
    public function getImage(): ?string
    {
        if (!is_null($this->visual) && is_file(public_path() . '/img/recettes/' . $this->visual)) {
            return '<img src="/img/recettes/' . $this->visual . '" class="img-responsive"/>';
        }

        return null;
    }
}
