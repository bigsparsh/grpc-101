// Original file: a.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _Empty, Empty__Output as _Empty__Output } from './Empty';
import type { Posts as _Posts, Posts__Output as _Posts__Output } from './Posts';
import type { User as _User, User__Output as _User__Output } from './User';

export interface UserServiceClient extends grpc.Client {
  CreatePost(argument: _Posts, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _Posts, metadata: grpc.Metadata, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _Posts, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _Posts, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  createPost(argument: _Posts, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  createPost(argument: _Posts, metadata: grpc.Metadata, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  createPost(argument: _Posts, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  createPost(argument: _Posts, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  
  CreateUser(argument: _User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _User, metadata: grpc.Metadata, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _User, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _User, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  createUser(argument: _User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  createUser(argument: _User, metadata: grpc.Metadata, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  createUser(argument: _User, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  createUser(argument: _User, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  
  GetPosts(argument: _User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Posts__Output>): grpc.ClientUnaryCall;
  GetPosts(argument: _User, metadata: grpc.Metadata, callback: grpc.requestCallback<_Posts__Output>): grpc.ClientUnaryCall;
  GetPosts(argument: _User, options: grpc.CallOptions, callback: grpc.requestCallback<_Posts__Output>): grpc.ClientUnaryCall;
  GetPosts(argument: _User, callback: grpc.requestCallback<_Posts__Output>): grpc.ClientUnaryCall;
  getPosts(argument: _User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Posts__Output>): grpc.ClientUnaryCall;
  getPosts(argument: _User, metadata: grpc.Metadata, callback: grpc.requestCallback<_Posts__Output>): grpc.ClientUnaryCall;
  getPosts(argument: _User, options: grpc.CallOptions, callback: grpc.requestCallback<_Posts__Output>): grpc.ClientUnaryCall;
  getPosts(argument: _User, callback: grpc.requestCallback<_Posts__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _User, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _User, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _User, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _User, metadata: grpc.Metadata, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _User, options: grpc.CallOptions, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  getUser(argument: _User, callback: grpc.requestCallback<_User__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreatePost: grpc.handleUnaryCall<_Posts__Output, _Empty>;
  
  CreateUser: grpc.handleUnaryCall<_User__Output, _Empty>;
  
  GetPosts: grpc.handleUnaryCall<_User__Output, _Posts>;
  
  GetUser: grpc.handleUnaryCall<_User__Output, _User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreatePost: MethodDefinition<_Posts, _Empty, _Posts__Output, _Empty__Output>
  CreateUser: MethodDefinition<_User, _Empty, _User__Output, _Empty__Output>
  GetPosts: MethodDefinition<_User, _Posts, _User__Output, _Posts__Output>
  GetUser: MethodDefinition<_User, _User, _User__Output, _User__Output>
}
