"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("@grpc/grpc-js"));
const protoLoader = __importStar(require("@grpc/proto-loader"));
const path_1 = __importDefault(require("path"));
const packageDefinition = protoLoader.loadSync(path_1.default.join(__dirname, "../a.proto"));
const userProto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();
let person;
let post;
const handler = {
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
server.bindAsync("localhost:50051", grpc.ServerCredentials.createInsecure(), () => { });
