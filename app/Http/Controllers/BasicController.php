<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Content;

class BasicController extends Controller
{
    // home page view
    public function home()
    {
        $contents = Content::where('type', 1)->get();
        return view('admin.home', compact('contents'));
    }

    // add data
    public function addData(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'type' => 'required',
            'content' => 'required'
        ]);

        Content::create([
            'title' => $request->title,
            'type' => $request->type,
            'content' => $request->content
        ]);
        return back()->with("success_message", "New Content Added Successfully");
    }
}
