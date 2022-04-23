<?php

namespace App\Http\Controllers\Api;

class TestController
{
    public function test()
    {
        dd(request()->all());
    }
}
