# Grpc 101

## Steps to create this

- Make the proto file and fill it up with the service and message definitions.
- Run the following command to generate typescript types.

```bash
./node_modules/@grpc/proto-loader/build/bin/proto-loader-gen-types.js  --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=src/generated a.proto
```

- Now the types are generated in the `src/generated` folder.
- Now create the server in `src/index.ts`.
- Initialize the grpc server with the proto file and the services.
