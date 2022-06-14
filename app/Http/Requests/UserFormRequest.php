<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class UserFormRequest extends FormRequest
{
    public function withValidator(Validator $validator): void
    {
        $validator->sometimes(
            attribute: ['email', 'username', 'password'],
            rules: 'required',
            callback: fn () => $this->isMethod('post'),
        );
    }

    public function rules(): array
    {
        return [
            'email' => 'email|unique:users,email',
            'username' => 'unique:users,username',
            'password' => 'string|min:8',
            'password_confirmation' => 'required_with:password|same:password'
        ];
    }
}
