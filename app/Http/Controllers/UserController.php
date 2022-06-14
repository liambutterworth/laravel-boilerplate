<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserFormRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class UserController
{
    public function index(): ResourceCollection
    {
        return UserResource::collection(User::paginate());
    }

    public function show(User $user): UserResource
    {
        return new UserResource($user);
    }

    public function create(UserFormRequest $request): UserResource
    {
        $user = User::create($request->validated());

        Auth::login($user);

        return new UserResource($user);
    }

    public function update(User $user, UserFormRequest $request): UserResource
    {
        return new UserResource(tap($user)->update($request->validated()));
    }

    public function login(LoginRequest $request): Response
    {
        if (!Auth::attempt($request->validated(), $request->get('remember'))) {
            return abort(401);
        }

        return response()->noContent();
    }

    public function logout(): Response
    {
        Auth::logout();

        return response()->noContent();
    }
}
