import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { ProtoGrpcType } from "./generated/a";
import { UserServiceHandlers } from "./generated/UserService";
import { User__Output } from "./generated/User";

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, "../a.proto"),
);

const userProto = grpc.loadPackageDefinition(
  packageDefinition,
) as unknown as ProtoGrpcType;

const server = new grpc.Server();
let person: { name: string; id: number; email: string };
let post: {
  user_id: string;
  user: User__Output | null;
  message: string;
};
const handler: UserServiceHandlers = {
  CreateUser: (call, callback) => {
    person = {
      name: call.request.name,
      id: call.request.id,
      email: call.request.email,
    };
    return callback(null, { message: "Post created" });
  },
  GetUser: (call, callback) => {
    console.log(call.request);
    callback(null, person);
  },

  CreatePost: (call, callback) => {
    post = {
      user_id: call.request.userId,
      user: call.request.user,
      message: call.request.message,
    };
    return callback(null, { message: "Post created" });
  },
  GetPosts: (call, callback) => {
    console.log(call.request);
    callback(null, post);
  },
};

server.addService(userProto.UserService.service, handler);
server.bindAsync(
  "localhost:50051",
  grpc.ServerCredentials.createInsecure(),
  () => { },
);
