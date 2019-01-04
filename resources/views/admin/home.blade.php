@extends('admin.layout.admin_layout')
@section('main_content')
    @if($errors->has('title'))
        <div class="alert alert-success">
            <span style="color: red;"><b>Please Write a title first!</b></span>
        </div>
    @endif
    @if($errors->has('content'))
        <div class="alert alert-success">
            <span style="color: red;"><b>Please Write some content!</b></span>
        </div>
    @endif
    @if(session('success_message'))
        <div class="alert alert-success">
            <span style="color: green;"><b>{{ session('success_message') }}</b></span>
        </div>
    @endif
    <h2>Home page Content</h2>
    <div class="text-right">
        <a href="" class="add_button mr-3" data-toggle="modal" data-target="#add" style="display: inline-block">Add one item</a>
        <!-- Modal -->
        <div class="modal fade"  id="add" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" >
                    <div style="z-index: 999; position: relative; background-color: #fff;">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Add a New Content</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form action="{{ route('addData') }}" method="post">
                            @csrf
                            <input type="hidden" value="1" name="type">
                            <div class="modal-body text-left">
                                <div class="form-group">
                                    <label for="">Title</label>
                                    <input type="text" class="form-control" name="title" placeholder="Write your title here">
                                </div>
                                <div class="form-group">
                                    <label for="">Content</label>
                                    <textarea class="form-control" name="content" placeholder="Type your content"></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Add Content</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <table class="table table-bordered text-center my_table">
        <tr>
            <th class="title">Title</th>
            <th class="content">Content</th>
            <th>Action</th>
        </tr>
        @forelse($contents as $content)
            <tr>
                <td>{{ $content->title }}</td>
                <td>{{ str_limit($content->content, 50) }}</td>
                <td>e | d</td>
            </tr>
        @empty
            <tr>
                <td colspan="3">No data found</td>
            </tr>
        @endforelse
    </table>

@endsection